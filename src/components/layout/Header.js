import React,{ useContext } from "react";
import {Link, withRouter} from "react-router-dom";
import classNames from 'classnames';
import styled from "styled-components";

//utils
import CostomLink from 'utils/CustomLink';

// hook
import { LayoutContext } from "hooks/context";

const NavbarBase = styled.nav`
    position: absolute;
    top: 0;
    z-index: 22;
    transition:all 1s;
`;
    // visibility: ${props => (props.show == null) ? "visible" : (props.show ? "visible" : "hidden") };
const Navbar = styled(NavbarBase)`
    opacity: ${props => (props.show == null) ? "1" : (props.show ? "1" : "0") };
    position: ${props => (props.show == null) ? "absolute"  : (props.show  ? "fixed" : "absolute" )};
    transition-timing-function: ${props => (props.show == null) ? "ease-out"  : (props.show ? "ease-in" : "ease-out")};
    #nav{        
        .logo{
            color: ${props => props.theme === 'sub' ? "#e5e5e5" : "#e5e5e5" };
            font-weight:${props => props.theme === 'sub' ? "500" : "200" };
        }
        .menu{
            color: ${props => props.theme === 'sub' ? "#e5e5e5" : "#e5e5e5" };
            
        }
    }
    #nav-web{
        a{
            color: ${props => props.theme === 'sub' ? "#e5e5e5" : "#e5e5e5" }};
            font-weight:${props => props.theme === 'sub' ? "300" : "200" };
            .line{
                &::after{
                    background-color: ${props => props.theme === 'sub' ? "#e5e5e5" : "#e5e5e5" };
                }
            }
        }
    }
`;

const Header = ({history,show,theme}) => {
    const { elemTexts, elemRefs } = useContext(LayoutContext);
    const pathname = history.location.pathname;

    return(
        <>
        <Navbar theme={theme} show={(history.location.pathname !== '/' &&  history.location.pathname !== '/projects') ? show  : NavbarBase} className="container-fluid p32-x lg-p56-x" id="header">
            <div className="row gx-5 h-100 align-items-center justify-content-center">
                <div className="col-12">
                    <div className="row d-flex align-items-center position-relative">
                        <div className="col-12" id="nav">
                            <Link className="logo" to="/">   
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
                            {elemTexts.menus.map((menu,index)=>(
                            <CostomLink key={index} to={menu.to} 
                            className={classNames("sFadeWrap", ((history.location.pathname.startsWith(menu.to) && menu.to !== '/') || pathname === menu.to ) && "active")}>
                                <span ref={elemRefs.menus[index]} className={classNames("sFade")}>{menu.name}
                                </span>
                                <span className="sFadeWrap">
                                    <span ref={elemRefs.lines[index]} className="line sFade"></span>
                                </span>                                
                            </CostomLink>))}
                        </div>                   
                    </div>
                </div>
            </div>
        </Navbar> 
        </>      
    )
}

export default withRouter(Header);
