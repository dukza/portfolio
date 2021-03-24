import React, { useState, useEffect, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';

const ScrollReveal = React.forwardRef((props, ref) => {
  const [viewportHeight, setViewportheight] = useState(window.innerHeight);
  const [revealEl, setRevealel] = useState([]);

  //1
  useImperativeHandle(ref, () => ({
    init() {
      setRevealel(document.querySelectorAll('.jScroll'));
    }
  }));  
  const sceneInfo = [
    {
      type: 'normal',
      scrollHeight:0,
      objs:{
        container: revealEl[0]
      }
    }
  ]
  const revealElements = () => {
    console.log(revealEl[0].querySelector('.test'))
  }

  useEffect(() => {
    revealElements();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [revealEl]);  
  //2
  useEffect(() => {
    revealElements();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewportHeight]);  
  return (
    <>
      {props.children()}
    </>
  );
});

ScrollReveal.propTypes = {
  children: PropTypes.func.isRequired
};

export default ScrollReveal;