import React,{useContext} from 'react';
import styled from "styled-components";

// hook
import { LayoutContext } from "hooks/context";

const PanelBase = styled.div`
    position:absolute;
    top:0px;
    z-index:33;
    background:black;
    height:100%;
`;
const Navbar = styled(PanelBase)`

`;

const PanelIntro = () => {
    const { elemTexts, elemRefs } = useContext(LayoutContext);
    return(
        <>
        <PanelBase ref={elemRefs.panel[0]} className="col-12 intro" id="panel">
        </PanelBase>
        </>
    )
}

export default PanelIntro;