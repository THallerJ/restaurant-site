import { useState, useEffect, useRef } from "react";

const useDetectScroll = (threshold: number) => {
  const firstRender = useRef<boolean>(true);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollPos = document.getElementById("page-body")?.scrollTop || 0;
      setScrolled(scrollPos > threshold);
    };

    if (firstRender.current) {
      scrollHandler();
      firstRender.current = false;
    }

    document
      .getElementById("page-body")
      ?.addEventListener("scroll", scrollHandler);
    return () =>
      document
        .getElementById("page-body")
        ?.removeEventListener("scroll", scrollHandler);
  }, []);

  return scrolled;
};

export default useDetectScroll;
