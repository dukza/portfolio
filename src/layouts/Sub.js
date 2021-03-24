import React, { useState, useContext,useEffect} from "react";
// hooks
// import useScroll from 'hooks/useScroll';
import { LayoutContext } from 'hooks/context';

//component
import Header from 'components/layout/Header';
const Sub = ({ children }) => {
  const {hideOnScroll} = useContext(LayoutContext);
  return(
    <>
      <div className="subBg">
        {/* <Panel/> */}
        <Header show={hideOnScroll} theme={'sub'}/>
        <main>
          {children}
        </main>      
      </div>
    </>
)}

export default Sub;  