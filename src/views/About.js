import React, { useContext } from 'react';
import Mailto from 'react-protected-mailto'
// component

// hook
import { LayoutContext } from "hooks/context";

     
const About = () => {
    const { elemTexts, elemRefs } = useContext(LayoutContext);
    return(
        <>
            <div className="container-lg p32-x lg-p56-x" id="content">
                <div className="row h-100 contentWrap intro">
                    <div ref={elemRefs.sides[0]} className="col-12 col-md-6 col-lg-7 order-1 order-lg-0 d-flex justify-content-end justify-content-lg-start ">
                        <div className="col-12 col-md-5 text-justify">
                            <div className="pageSubTitle">Working Tools</div>
                            <div className="font-14 pageContent">
                                 Figma, Sketch, ProtoPie, Principle, Framer, Axure, Notion, HTML5, SCSS, jquery, react, Bootstrap, Eclipse, Git, Jira, Slack
                            </div>
                            <div className="pageSubTitle m32-t">Contact</div>
                            <div className="font-14 pageContent">
                                010.2660.2558<br/>
                                <Mailto email="dyha7648@gmail.com">dyha7648@gmail.com</Mailto>
                            </div>                             
                        </div>
                       
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 order-0 order-lg-1">
                        <div className="col-12">
                                <div className="col-12 pageTitle">
                                    {elemTexts.abouts.map((about,index)=>(
                                        <span key={index} className={about.className}>
                                            <span ref={elemRefs.abouts[index]} key={index} className="sFade pageTitleWrap">
                                                {about.name}
                                            </span>
                                        </span>
                                    ))}
                                </div>
                                <div className="pageSubTitle m28-t">
                                    <span className="sFadeWrap">
                                        <span className="sFade" ref={elemRefs.abouts[3]}>About Me</span>
                                    </span>
                                    
                                </div>
                                <div className="pageContent" >
                                    <div className="sFadeWrap">
                                        <div className="sFade text-justify" ref={elemRefs.abouts[4]}>
                                            <div className="m28-b">
                                                "주로 소프트웨어 회사에서 인하우스 디자이너로서 대시보드, 앱, 웹의 UI/UX 디자인 및 퍼블리싱 작업을 했습니다. 
                                            </div>
                                            <div className="m28-b">
                                            일관성·확장성을 고려한 디자인을 좋아해 디자인 시스템(atlassian, lighthouse, carbon, shopify, uber design system)을 연구합니다. 디자인을 코드로 구현하는 데 관심이 많아 자바스크립트를 좋아합니다. 이 사이트도 리액트와 만들었습니다.
                                            </div>
                                            <div className="m28-b">
                                                앞으로도 웹을 더 이해하여 빠른 사용성 개선을 위해 디자인 할 것입니다."
                                            </div> 

                                        </div>
                                    </div>
                                     
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default About;
