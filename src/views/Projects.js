import React, { useContext } from "react";
import { Link } from "react-router-dom";

// component
// hook
import { LayoutContext } from "hooks/context";

function Projects() {
  const { elemTexts, elemRefs } = useContext(LayoutContext);
  return (
    <>
      <div className="container-lg p32-x lg-p56-x project" id="content">
          <div className="row h-100 gx-5 contentWrap intro">
              <div ref={elemRefs.sides[0]} className="col-12 col-md-6 col-lg-7 order-1 order-lg-0 d-flex justify-content-end justify-content-lg-start">
              <div className="col-12 col-md-5">
                  <div className="pageSubTitle m10-t">Experience</div>
                    <div className="font-14 pageContent">
                        <ul className="col-12 p-0">
                            <li>Fassto · 풀필먼트 서비스</li>
                            <li>CoordiSpace · 비콘위치 추적 서비스</li>
                            <li>Hanwith · 통합관제 클라우드 플랫폼</li>
                            <li>Secuve · 보안솔루션 개발 업체</li>
                            <li>Synapsoft · 네이버오피스 개발 업체</li>
                        </ul>
                    </div>
                  </div>
              </div>
              <div className="col-12 col-md-6 col-lg-5 order-0 order-lg-1">
                  <div className="row">
                        <div className="col-auto medium pageTitle">
                            {elemTexts.projects.map((project,index)=>(
                                <div key={index} className="sFadeWrap d-block pageTitleWrap" >
                                    <Link ref={elemRefs.projects[index]} to={`/projects/${project.id}`} key={index} className="sFade text-decoration-none">
                                        {project.name}
                                        <span ref={elemRefs.projects[4]} className="icon light" data-font="neue"><i className="fal fa-arrow-right"></i></span>
                                    </Link><span className="font-12 light cate" data-font="sfmono">{project.cate}</span></div> 
                            ))}
                        </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

export default Projects;