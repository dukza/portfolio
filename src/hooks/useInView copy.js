import React, { useEffect, useCallback, useRef, useState } from "react";
import { useAnimation } from 'framer-motion';

const useInView = () => {
  // const ref = React.useRef();
  const animationControls = useAnimation();
  const element = useRef();

  // 객체 목록과 관차자를 받음 entries, observer
  const onScroll = useCallback(([entry]) => {
    //element
    animationControls.start(entry.isIntersecting === true ? 'show' : 'hide');

  });
  useEffect(() => {

    // observer 생성
    //[entry] 배열에 넣고 하나씩 꺼내어
    let observer;
    if (element.current) {
      // 콜백함수
      observer = new IntersectionObserver(onScroll, { threshold: 0.5 });
      // 관찰 대상
      observer.observe(element.current);
    }
    return () => observer && observer.disconnect();
  }, [onScroll]);

  return [{ref:element}, animationControls];
};

export default useInView;