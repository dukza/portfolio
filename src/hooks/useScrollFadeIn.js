import { useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';

const useScrollFadeIn = (direction = 'up', duration = 1, delay = 0) => {

  const element = useRef();

  const handleDirection = (name) => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 100%, 0)';       
      case 'down':
        return 'translate3d(0, -50%, 0)';
      case 'left':
        return 'translate3d(50%, 0, 0)';
      case 'right':
        return 'translate3d(-50%, 0, 0)';
      default:
        return;
    }
  };

  const onScroll = useCallback(
    ([entry]) => {
      //element
      // console.log('element',element)
      const { current } = element;
      if (entry.isIntersecting) {
        // onOrigin(current,delay, duration)
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = 'translate3d(0, 0, 0)';
      }
    }
  );

  useEffect(() => {
    let observer;
    if (element.current) {
      // 실행되는 함수
      observer = new IntersectionObserver(onScroll, { threshold: 0});
      observer.observe(element.current);
    }
    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,style: { opacity: 1, transform: handleDirection(direction)}
  };
};

export default useScrollFadeIn;
