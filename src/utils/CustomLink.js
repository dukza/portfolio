import React,{useContext, useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

// hook
import { LayoutContext } from "hooks/context";


const CustomLink = ({to,children,...rest}) => {
    const { onClick } = useContext(LayoutContext);
    const history = useHistory();
    // useEffect(()=>{
    //     console.log('pathname',history.location.pathname)
    // })
    return(
        <>
            <Link to={to} {...rest} onClick={(event)=>onClick(event,history,to)}>
                {children}
            </Link>
        </>
    )
}

export default CustomLink;