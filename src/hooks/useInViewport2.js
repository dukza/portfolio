import { useEffect, useState } from 'react';

//hook
import useHeight from './useHeight';

const useInViewport2 = () => {
  const [inViewport, setInViewport] = useState(true);
  const viewportHeight = useHeight();
  const element = useRef(null);
  useEffect(() => {
    if (viewportHeight > 0) {
      const height = viewportHeight / 2 -
        (element.current?.clientHeight || viewportHeight - 10) / 2;
      const rootMargin = `${height * -1}px 0px ${height * -1}px 0px`;
      const options = {
        rootMargin,
        threshold: [0.2],
      };

      const onChange = (entries) => {
        entries.forEach((entry) => {
          if (entry.target === element.current) {
            if (entry.isIntersecting) {
              setInViewport(true);
            } else {
              setInViewport(false);
            }
          }
        });
      };
      const observer = new IntersectionObserver(onChange, options);
      observer.observe(element.current);
    }
  }, [viewportHeight]);

  return {ref: element,inViewport};
}

export default useInViewport2;