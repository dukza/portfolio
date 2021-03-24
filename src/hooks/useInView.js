import { useEffect, useCallback, useRef } from "react";
import { useAnimation } from 'framer-motion';


const useInView = (resetFlag) => {
  // const ref = React.useRef();
  const animationcontrols = useAnimation();
  const element = useRef();

  // 객체 목록과 관차자를 받음 entries, observer
  const onScroll = useCallback(([entry]) => {
    //element
    animationcontrols.start(entry.isIntersecting ? 'visible' : 'default' );

    if(resetFlag) {
      animationcontrols.start('hidden');
    }

  });
  useEffect(() => {
    console.log('useInView : ', resetFlag);
    // observer 생성
    //[entry] 배열에 넣고 하나씩 꺼내어
    let observer;
    if (element.current) {
      // 콜백함수
      observer = new IntersectionObserver(onScroll, { threshold: 0.6});
      // 관찰 대상
      observer.observe(element.current);
    }
    return () => observer  && observer.disconnect();
  }, [onScroll]);

  return {ref: element,animationcontrols};
};
export default useInView;