import React, { useEffect, useRef } from "react";

const LazyImage = ({ src, alt, className = "", fallback, ...props }) => {
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const realSrc = img.dataset.src;
          if (realSrc) {
            img.src = realSrc;
            img.onload = () => img.classList.add("loaded");
            if (fallback) {
              img.onerror = () => (img.src = fallback);
            }
          } else if (fallback) {
            img.src = fallback;
          }
          observer.unobserve(img);
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [fallback]);

  return (
    <img
      ref={imgRef}
      src={fallback || ""}         // fallback hoy to default set
      data-src={src}
      alt={alt || "image"}
      className={`lazyload ${className}`}
      {...props}
    />
  );
};

export default LazyImage;
