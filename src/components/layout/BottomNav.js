import React ,{ useContext }from 'react';
import { Link, useParams } from 'react-router-dom';

// hook
import {LayoutContext} from 'hooks/context';
import {useData} from "hooks/useData";

const BottomNav = () => {
    const {workID} = useParams();
    const { elemTexts } = useContext(LayoutContext);
    const {getData} = useData();
    const {id,
    sequence,
    name,
    pageTitle,
    pageContent,
    imgs,
    designSystems,
    prototype,
    processes,
    bottomNav,
    bottomLink} = getData(workID);
    const handleNext = (sequence) =>{
        if(elemTexts.work.length < sequence+1){
            return elemTexts.work[0].name
        }
        return elemTexts.work.filter(data=>data.sequence === sequence+1)
    }
    return(
        <>
        <div className="container-fluid p32-x lg-p56-x sectionSpace-01-t">
            <div className="row gx-5" id="bottomNav">
                <div className="col-12 bottomNavWrap">
                    <Link className="d-flex align-items-center" to={`/projects/${bottomNav[0]}`} onClick={ ()=> { window.scrollTo({top:0, behavior:'instant'}); return false;}}>     
                        <span className="pageSubTitle m8-r">Next Project</span> <span className={bottomNav[2]}>{bottomNav[1]}</span>
                        {/* {console.log(handleNext(sequence)) } */}
                        {/* {elemTexts.work.filter((data)=>(
                            //  === sequence+1
                            if(sequence+1 < elemTexts.work.length){
                                return
                            }
                            sequence+1 == data.sequence
                            // console.log(data.sequence)
                        ))} */}
                        <span className="m4-l"><i className="far fa-arrow-right"></i></span>
                    </Link>
                    <div className="projectNum">
                        <span className="bold"> 
                        { (sequence < 10) ? '0'+sequence : sequence }
                        / 
                        { (elemTexts.work.length < 10 ) ? '0' + elemTexts.work.length : elemTexts.work.length}
                        </span>
                    </div>          
                </div>
            </div>
        </div>        
        </>
    )
}


export default BottomNav;