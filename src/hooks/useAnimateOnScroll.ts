import { useEffect, useRef } from "react";

type Options = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
};

export default function useAnimateOnScroll(options?: Options) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            if (options?.once !== false) observer.unobserve(entry.target);
          } else {
            if (options?.once === false) el.classList.remove("in-view");
          }
        });
      },
      {
        root: options?.root ?? null,
        rootMargin: options?.rootMargin ?? "0px",
        threshold: options?.threshold ?? 0.15,
      },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [options?.once, options?.root, options?.rootMargin, options?.threshold]);

  return ref;
}
