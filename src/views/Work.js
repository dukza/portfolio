import React, { useContext, useEffect, useState} from 'react';
import { motion,Frame } from "framer";
import {useParams } from "react-router-dom";
// component
import BottomNav from 'components/layout/BottomNav';
import TitleAni from 'utils/TitleAni';
import Image from 'components/layout/Image'

// hook
import useInView from "hooks/useInView";
import {framer} from "hooks/animations";
import { LayoutContext } from 'hooks/context';
import {useData} from "hooks/useData";

import {IntersectionContext,IntersectionObserver} from "hooks";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";

// style
import 'assets/dist/styles/main.css';


const Work = (resetFlag) => {
   
  const [resetAni, setResetAni] = useState(false);
  const { animationVariants,line, mask,btOrigin} = framer();
  const { elemTexts } = useContext(LayoutContext);
  const {getData} = useData();
  const {workID} = useParams();
  const {id,
  sequence,
  pageTitles,
  pageContents,
  highlights,
  imgs,
  designSystems,
  prototype,
  process,
  processes,
  bottomNav} = getData(workID);
  const animated = {
    0: useInView(resetAni),
    1: useInView(resetAni),
    2: useInView(resetAni),
    3: useInView(resetAni),
    4: useInView(resetAni),
  };
  const [restart, setRestart] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
        if (window.scrollY === 0) {
            setResetAni(true);
            console.log('reset..... true');
            setRestart(true);
            setTimeout(()=> {console.log('reset....false'); setRestart(false); }, 1000);
        }else{
            setResetAni(false);
        }
    },
    [resetAni]
  );

  return (
      <>
        <div className="container-fluid" id="content" >
            <div  className="row h-100 contentWrap sub">
                {/* pageIndex */}
                <motion.div variants={animationVariants} initial='hidden' animate={ restart ? "initial":"visible"} className="col-12 pageIndex overflow-hidden" >
                    <motion.div variants={mask} className="pageIndexWrap ">
                        <motion.span variants={btOrigin} className="sFade">0</motion.span> 
                    </motion.div>  
                    <motion.div variants={mask} className="pageIndexWrap overflow-hidden">
                        <motion.span variants={btOrigin} className="sFade">{sequence}</motion.span>  
                    </motion.div>
                </motion.div>                    
                {/* pageTitle */}
                <div className="col-12 d-flex justify-content-center pageTitle">
                    <div className="col-12 col-lg-10  xs-sectionSpace-01-t sectionSpace-02-t sectionSpace-02-b p32-x lg-p0-x">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-7">
                                    <div className="row">
                                        <div className="col-12 col-md-12 col-lg-9" {...animated[0]}>
                                            <motion.div className="row" >
                                                <motion.div className="col-12 light pageTitleWrap" variants={animationVariants} initial="hidden" animate={animated[0].animationcontrols} >
                                                    {pageTitles.map((pageTitle,index)=>(
                                                        <TitleAni
                                                        key={index}
                                                        index={index}
                                                        className0={pageTitle.classname0}
                                                        className1={pageTitle.classname1}
                                                        >{pageTitle.name}</TitleAni>
                                                    ))}
                                                </motion.div>
                                                <div className="pageSubTitle m24-t">Mobile App</div>
                                                <div className="font-14 pageCon">
                                                    <ul className="p-0">
                                                        <li>15 week design sprint</li>
                                                        <li>Fassto</li>
                                                    </ul>
                                                </div>
                        
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            <div className="col-12 col-md-6 col-lg-5  m76-t">
                                <div className="row">
                                    <div className="col-12 position-relative" >
                                        <div className="line position-absolute" style={{left:'0px',top:"0px",height:"100%", width:"1px"}}>
                                            <motion.div variants={line} initial="hidden" animate={animated[0].animationcontrols} className="lineWrap"></motion.div>
                                        </div>                             
                                        <motion.div className="col-12 p8-l">
                                            <div className="col-12">
                                                <div className="pageSubTitle">Project Brief</div> 
                                                <div className="col-12 pageContent">
                                                    {pageContents.map((pageContent, index)=>(
                                                        <div key={index} className={pageContent.className}>{pageContent.text}</div>
                                                    ))}                                                
                                                </div>
                                            </div>

                                        </motion.div>                              

                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>                
                    
                </div>

                {/* Highlights */}
                {highlights && <div className="col-12 col-lg-10 sectionSpace-02-t p32-x lg-p0-x">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-9">
                            <div className="col-12 col-md-8">
                                <motion.div variants={animationVariants} initial="hidden" animate={animated[1].animationcontrols} {...animated[1]} className="col-12 sectionTitle ">
                                    {elemTexts.workSection.highlights.map((highlight,index)=>(
                                        <TitleAni
                                        key={index}
                                        index={index}
                                        animate={animated[1].animationcontrols}
                                        className0={highlight.classname0}
                                        className1={highlight.classname1}
                                        last={elemTexts.workSection.highlights.length === (index + 1)}
                                        >{highlight.name}</TitleAni>
                                    ))}
                                </motion.div> 
                                <div className="pageContent">컬러 블록 스타일은 시선을 사로 잡고 수평선과 수직선을 결합하여 안전성과 안정성을 전달합니다. 겹쳐진 요소는 이것이 너무 딱딱하게 느껴지는 것을 방지합니다.</div>                                  
                            </div>
                        </div>

                    </div>
                </div>}
                {/* Images */}
                <div className="col-12 sectionSpace-01-t p32-x lg-p0-x">
                    <div className="row">
                        {imgs.map((img,index)=>(
                            <IntersectionObserver key={index} className={img.className0} reset={resetAni}>
                                 <Image
                                    className={img.className1}
                                    src={img.src}
                                    alt={index}/>
                            </IntersectionObserver>
                            // <div key={index} className={img.className0}>
                            //     <img className={img.className1} src={img.src} alt={index} {...img.effect}/>
                            // </div>                            
                        ))}
                    </div>
                </div>
                {/* DesignSystems */}
                {
                    designSystems && <>
                    <div className="col-12 col-lg-10 sectionSpace-02-t p32-x lg-p0-x">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-7">
                                <div className="col-12 col-md-12 col-lg-9">
                                    <motion.div variants={animationVariants} initial="hidden" animate={animated[2].animationcontrols} {...animated[2]} className="col-12 sectionTitle">
                                    {elemTexts.workSection.designSystems.map((designSystem,index)=>(
                                        <TitleAni
                                        key={index}
                                        index={index}
                                        animate={animated[2].animationcontrols}
                                        className0={designSystem.classname0}
                                        className1={designSystem.classname1}
                                        last={elemTexts.workSection.designSystems.length === (index + 1)}
                                        >{designSystem.name}</TitleAni>
                                    ))}
                                    </motion.div>
                                    <div className="pageContent">컬러 블록 스타일은 시선을 사로 잡고 수평선과 수직선을 결합하여 안전성과 안정성을 전달합니다. 겹쳐진 요소는 이것이 너무 딱딱하게 느껴지는 것을 방지합니다.</div>                                        
                                </div>

                            </div>
                        </div>
                    </div>                    
                    </>
                }
                 {/* Prototype */}
                {prototype && <>
                    <div className="col-12 col-lg-10 sectionSpace-02-t p32-x lg-p0-x">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-7">
                                <div className="col-12 col-md-12 col-lg-9">
                                    <motion.div variants={animationVariants} initial="hidden" animate={animated[3].animationcontrols} {...animated[3]} className="col-12 sectionTitle">
                                    {elemTexts.workSection.prototype.map((p_type,index)=>(
                                        <TitleAni
                                        key={index}
                                        index={index}
                                        animate={animated[3].animationcontrols}
                                        className0={p_type.classname0}
                                        className1={p_type.classname1}
                                        last={elemTexts.workSection.prototype.length === (index + 1)}
                                        >{p_type.name}</TitleAni>
                                    ))}
                                    </motion.div>   
                                    <div className="pageContent">컬러 블록 스타일은 시선을 사로 잡고 수평선과 수직선을 결합하여 안전성과 안정성을 전달합니다. 겹쳐진 요소는 이것이 너무 딱딱하게 느껴지는 것을 방지합니다.</div>   
                                </div>
                               
                            </div>
                        </div>
                    </div>                   
                    </>
                }
                <div className="sectionSpace-02-t" id="fixdBg">

                </div>
                {/* Process */}
                {process && <div className="col-12 col-lg-10 sectionSpace-02-t">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-7 d-flex justify-content-center">
                            <div className="col-12 col-md-12 col-lg-9">
                                <motion.div variants={animationVariants} initial="hidden" animate={animated[4].animationcontrols} {...animated[4]} className="col-12 sectionTitle">
                                    {elemTexts.workSection.processes.map((process,index)=>(
                                        <TitleAni
                                        key={index}
                                        index={index}
                                        animate={animated[4].animationcontrols}
                                        className0={process.classname0}
                                        className1={process.classname1}
                                        last={elemTexts.workSection.processes.length === (index + 1)}
                                        >{process.name}</TitleAni>
                                    ))}
                                </motion.div> 
                                <ul className="col-12 list-unstyled pageContent">
                                    {processes.map((process,index)=>(
                                        <li key={index}><span className={process.classname0}>{process.name}</span>{process.text}</li>
                                    ))}
                                </ul>                                   
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>  
        </div>
        <BottomNav to={`/projects/${bottomNav[0]}`}
        className={bottomNav[2]}
        name={bottomNav[1]}
        sequence={sequence}
        />
      </>
 
  );
};

export default Work;