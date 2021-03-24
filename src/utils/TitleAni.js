import React, { Children } from 'react';
import { motion } from "framer-motion";

// hook
import {framer} from "hooks/animations";
const TitleAni = ({
  index,
  children,
  className0,
  className1,
  arrow,
  last}) => {
  const { mask, btOrigin } = framer();
  arrow = (arrow === undefined) ? (<></>) :(<i className="far fa-arrow-down"></i>);
  last =  (last === undefined) ? false : last;
  return (
    <motion.span variants={mask} className={`rounded ${className0}`}>
      <motion.span
        custom={index}
        variants={btOrigin}
        className={className1}
      >
        {last ? (<><span>{children}</span>{arrow}</>): `${children}`}
      </motion.span>      
    </motion.span>

  );
}

export default TitleAni;