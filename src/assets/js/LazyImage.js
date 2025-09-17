import { useEffect, useRef, useState } from "react";

export default function LazyImage({ src, alt, className = "", fallback, ...props }) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const realSrc = img.dataset.src;

          if (realSrc) {
            img.src = realSrc;
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
      src={fallback || ""} // fallback hoy to default
      data-src={src}
      alt={alt || "image"}
      className={`${className} ${loaded ? "loaded" : ""}`}
      onLoad={() => setLoaded(true)}
      onError={(e) => {
        if (fallback) e.target.src = fallback;
      }}
      loading="lazy"
      draggable="false"
      {...props}
    />
  );
}
