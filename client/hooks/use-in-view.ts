import { useEffect, useRef, useState } from "react";

export interface UseInViewOptions {
  threshold?: number | number[];
  rootMargin?: string;
  once?: boolean;
}

export function useInView<T extends HTMLElement = HTMLElement>(
  { threshold = 0.2, rootMargin = "0px", once = true }: UseInViewOptions = {},
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView } as const;
}

