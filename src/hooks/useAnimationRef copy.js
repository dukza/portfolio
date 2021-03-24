import { useEffect, useRef, RefObject } from 'react';

import { useAnimation, AnimationControls } from 'framer-motion';

function useAnimationRef (observerOptions){
  const animationControls = useAnimation();
  const ref = useRef(null);

  /**
   * Use an intersection observer for know when the ref is visible
   */
  useEffect(() => {
    function handleIntercession([entry]){
      animationControls.start(entry.isIntersecting ? 'show' : 'hide');
    }

    const options = observerOptions || {
      rootMargin: `-65% 0px -34% 0px`,
    };

    const observer = new IntersectionObserver(handleIntercession, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return observer.disconnect;
  }, [animationControls, observerOptions, ref]);

  return [animationControls, ref];
}

export default useAnimationRef;
