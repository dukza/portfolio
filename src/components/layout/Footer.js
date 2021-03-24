import React, { useContext } from 'react';

// hook
import { LayoutContext } from "hooks/context";

const Footer = () => {
    const { elemRefs } = useContext(LayoutContext);
    return(
        <>
            <div className="container-fluid p32-x lg-p56-x" id="footer">
                <div className="row gx-5" >
                    <span className="sFadeWrap">
                        <span ref={elemRefs.footers}>
                            Dukyeon Ha
                        </span>
                    </span>
                </div>
            </div>
        </>
    ) 
}
export default Footer;