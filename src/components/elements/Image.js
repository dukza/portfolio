import React, { useState, useRef, useEffect } from 'react';



const Image = ({
  className,
  src,
  width,
  height,
  alt,
  ...props
}) => {

  const image = useRef(null);

  return (
    <img
      {...props}
      ref={image}
      className={className}
      src={src}
      width={width}
      height={height}
      alt={alt}
      />
  );
}


export default Image;