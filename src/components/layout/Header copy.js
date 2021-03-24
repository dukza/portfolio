import React,{ useContext } from "react";
import {Link, withRouter} from "react-router-dom";
import classNames from 'classnames';
import styled from "styled-components";

//utils
import CostomLink from 'utils/CustomLink';

// hook
import { LayoutContext } from "hooks/context";


const Navbar = styled.div`
  visibility: ${props => props.show ? "visible" : "hidden" };
  transition: all 200ms ${props => (props.show ? "ease-in" : "ease-out")};
  transform: ${props => props.show ? "none" : "translate(0, -100%)"};
`;

const Header = ({history,show}) => {
    const { elemTexts, elemRefs } = useContext(LayoutContext);
    const pathname = history.location.pathname;
    return(
        <>
        <Navbar show={show} className="container-fluid p32-x lg-p56-x" id="header">
            <div className="row gx-5 h-100 align-items-center justify-content-center">
                <div className="col-12">
                    <div className="row d-flex align-items-center position-relative">
                        <div className="col-12" id="nav">
                            <Link className="logo bold" data-font="neue" to="/">   
                                {/* logo */}
                                {elemTexts.logos.map((logo,index)=>(
                                    <span key={index} className="sFadeWrap">
                                        <span key={index} ref={elemRefs.logos[index]} className="sFade">{logo}</span>       
                                    </span>
                                ))}
                            </Link>
                            <a className="menu ml-auto"><i className="fal fa-bars"></i></a>                    
                        </div>
                        {/* menu */}
                        <div className="col-12" id="nav-web">
                            {elemTexts.menus.map((menu,index)=>(menu.type === 'link' ? 
                            <CostomLink key={index} to={menu.to} 
                            className={classNames("sFadeWrap",pathname === menu.to && "active")}>
                                <span ref={elemRefs.menus[index]} className={classNames("sFade")}>{menu.name}
                                </span>
                                <span className="sFadeWrap">
                                    <span ref={elemRefs.lines[index]} className="line sFade"></span>
                                </span>                                
                            </CostomLink>
                            : <Link key={index} to={menu.to} className="sFadeWrap p8-r"><span ref={elemRefs.menus[index]} className="sFade regular" data-font="sfmono">{menu.name}</span></Link>))}
                        </div>                   
                    </div>
                </div>
            </div>
        </Navbar> 
        </>      
    )
}

export default withRouter(Header);
