import React, { useEffect, useRef } from "react";

const LazyImage = ({ src, alt, className, ...props }) => {
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src; // move data-src -> src
          img.onload = () => img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      data-src={src}
      alt={alt}
      className={`lazyload ${className}`}
      {...props}
    />
  );
};

export default LazyImage;
