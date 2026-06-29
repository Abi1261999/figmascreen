import { useEffect, useRef } from 'react';

/**
 * Returns a ref. When the element enters the viewport,
 * the class `is-visible` is added to it (triggering CSS animations).
 */
const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el); // animate once
        }
      },
      { threshold: 0.12, ...options }
    );

    observer?.observe(el);
    return () => observer?.disconnect();
  }, []);

  return ref;
};

export default useScrollAnimation;
