import { useState, useEffect } from "react";

const useDetectScroll = (
  ref: React.MutableRefObject<HTMLDivElement | null> | null,
  threshold: number,
  enabled: boolean,
) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollPos = ref?.current?.scrollTop || 0;
      setScrolled(scrollPos > threshold);
    };

    if (enabled) ref?.current?.addEventListener("scroll", scrollHandler);
    return () => {
      setScrolled(false);
      ref?.current?.removeEventListener("scroll", scrollHandler);
    };
  }, [enabled]);

  return scrolled;
};

export default useDetectScroll;
