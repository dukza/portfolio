import React,{ useRef, useState ,useEffect} from 'react';
import { useHistory} from 'react-router-dom';
import { gsap } from 'gsap';
import { useScrollPosition } from "@n8tb1t/use-scroll-position";


// image
// fmsApp
import fmsApp00 from "./../assets/images/fmsapp-00.jpg";
import fmsApp01 from "./../assets/images/fmsapp-01.jpg";
import fmsApp02 from "./../assets/images/fmsapp-02.jpg";
import fmsApp03 from "./../assets/images/fmsapp-03.jpg";
import fmsApp04 from "./../assets/images/fmsapp-04.jpg";
import fmsApp05 from "./../assets/images/fmsapp-05.jpg";
import fmsApp06 from "./../assets/images/fmsapp-06.jpg";
import fmsApp07 from "./../assets/images/fmsapp-07.jpg";
import fmsApp08 from "./../assets/images/fmsapp-08.jpg";
import fmsApp09 from "./../assets/images/fmsapp-09.jpg";


// hook
import {tweenMax} from "hooks/animations";


export const LayoutContext = React.createContext();

const LayoutProvider = ({children}) => {
    const {sf,st, sft} = tweenMax();
    const history = useHistory();
    const [url,setUrl] = useState(history.location.pathname);
    const [hideOnScroll, setHideOnScroll] = useState(true);
    const ease01 = [0.16, 1, 0.3, 1];
    const elemTexts = {
        logos:['UX/UI','DESIGNER','PORTFOLIO'],
        menus:[
            {
                type:'link',
                name:'About',
                to:'/',
            },
            {
                type:'link',
                name:'Projects',
                to:'/projects', 
            }
        ],
        abouts:[
            {
                className:'sFadeWrap m8-r',
                name:'Now'
            },
            {
                className:'sFadeWrap m8-r',
                name:'&'
            },
            {
                className:'sFadeWrap',
                name:'Forward'  
            }
        ],
        projects:[
            {
                name:'물류관리앱',
                component:'FmsApp',
                id:'fmsApp',
                cate:'App'
            },
            {
                name:'디자인 시스템',
                component:'Designsystem',
                id:'designSystem',
                cate:'Site',
            },
            {
                name:'물류관리시스템' ,
                component:'Fms',
                id:'fms',
                cate:'Site'
            },
            {
                name:'파스토 웹',
                component:'Fasstoweb',
                id:'flexWeb',
                cate:'Site'
            },
            {
                name:'네이버 오피스',
                component:'Fasstoweb',
                id:'naverOffice',
                cate:'Site'
            }
        ],
        work:[
            {
                id:"fmsApp",
                name:"물류관리 앱",
                sequence: 1,
                pageTitles:[
                    {
                        classname0:"d-inline-block overflow-hidden m16-r",
                        classname1:"d-inline-block",
                        name:"Fullfillment"
                    },
                    {
                        classname0:"d-inline-block overflow-hidden",
                        classname1:"d-inline-block",
                        name:"App"
                    }],
                pageContents:[{className:"",text:"Fassto의 물류 서비스에 대한 인지도를 높이고 현지 호스트가 전문적이고 신뢰할 수 있음을 잠재적 예약자에게 안심시키기 위해 설계되었습니다."},{className:"m24-t",text:"컬러 블록 스타일은 시선을 사로 잡고 수평선과 수직선을 결합하여 안전성과 안정성을 전달합니다. 겹쳐진 요소는 이것이 너무 딱딱하게 느껴지는 것을 방지합니다."}],
                highlights:true,
                imgs:[
                    {className0:"col-12 sectionSpace-01-t",
                    className1:"w-100",
                    src:fmsApp00},
                    {className0:"col-12 col-lg-3 sectionSpace-02-t lg-sectionSpace-03-b xs-sectionSpace-0-b",
                    className1:"w-100",
                    src:fmsApp01},
                    {className0:"col-12 col-lg-5 offset-lg-4 sectionSpace-02-t",
                    className1:"w-100",
                    src:fmsApp02},
                    {className0:"col-12 col-lg-5 offset-lg-2 xs-sectionSpace-01-t",
                    className1:"w-100",
                    src:fmsApp03},
                    {className0:"col-12 col-lg-3 xs-sectionSpace-01-t sectionSpace-03-b xs-sectionSpace-0-b offset-lg-2",
                    className1:"w-100",
                    src:fmsApp04},
                    {className0:"col-12 col-lg-3 sectionSpace-02-t sectionSpace-03-b xs-sectionSpace-0-b",
                    className1:"w-100",
                    src:fmsApp05},
                    {className0:"col-12 col-lg-5 offset-lg-4 sectionSpace-02-t",
                    className1:"w-100",
                    src:fmsApp06},
                    {className0:"col-12 col-lg-4 offset-lg-4 xs-sectionSpace-01-t justify-content-center",
                    className1:"w-100",
                    src:fmsApp07},
                    {className0:"col-12 col-lg-4 offset-lg-1 sectionSpace-02-t",
                    className1:"w-100 border",
                    src:fmsApp08},
                    {className0:"col-12 col-lg-3 offset-lg-4 sectionSpace-02-t sectionSpace-02-b xs-sectionSpace-0-b",
                    className1:"w-100",
                    src:fmsApp09},
                ],
                designSystems: true,
                prototype: true,
                process: true,
                processes:[{
                    name:"Deliverables",
                    text:"Product Design, Branding",
                    classname0:"pageSubTitle d-block",
                    className1:"pageContent"
                },{
                    name:"Year",
                    text:"2019",
                    classname0:"pageSubTitle d-block m24-t",
                    classname1:"pageContent font-14"
                },{
                    name:"Type",
                    text:"Case Study",
                    classname0:"pageSubTitle d-block m24-t",
                    classname1:"pageContent font-14"
                },{
                    name:"Team",
                    text:"Solo",
                    classname0:"pageSubTitle d-block m24-t",
                    classname1:"pageContent font-14"
                },{
                    name:"harge",
                    text:"UX and UI / Interaction Designer UI design, prototyping, and concept video production. Lead UX and UI concept definition, ideation, and helped usability studies.",
                    classname0:"pageSubTitle d-block m24-t",
                    classname1:"pageContent font-14"
                }
                ],                
                bottomNav:["designSystem","디자인 시스템","projectName"]
            },
            {
                id:"designSystem",
                name:"디자인 시스템",
                sequence: 2,
                pageTitles:[
                    {
                        classname0:"d-inline-block overflow-hidden m16-r",
                        classname1:"d-inline-block",
                        name:"designSystem"
                    }],
                pageContents:[{className:"",text:"Fassto의 물류 서비스에 대한 인지도를 높이고 현지 호스트가 전문적이고 신뢰할 수 있음을 잠재적 예약자에게 안심시키기 위해 설계되었습니다."},{className:"m24-t",text:"컬러 블록 스타일은 시선을 사로 잡고 수평선과 수직선을 결합하여 안전성과 안정성을 전달합니다. 겹쳐진 요소는 이것이 너무 딱딱하게 느껴지는 것을 방지합니다."}],
                highlights:true,
                imgs:[
                    {className0:"col-12 sectionSpace-01-t",
                    className1:"w-100",
                    src:fmsApp00},
                    {className0:"col-12 col-lg-5 sectionSpace-02-t sectionSpace-03-b",
                    className1:"w-100",
                    src:fmsApp01},
                    {className0:"col-12 col-lg-6 offset-lg-1 sectionSpace-03-t",
                    className1:"w-100",
                    src:fmsApp02},
                    {className0:"col-12 col-lg-6 offset-lg-1",
                    className1:"w-100",
                    src:fmsApp03},
                    {className0:"col-12 col-lg-3 sectionSpace-03-b offset-lg-2",
                    className1:"w-100",
                    src:fmsApp04},
                    {className0:"col-12 col-lg-3 sectionSpace-02-t sectionSpace-03-b",
                    className1:"w-100",
                    src:fmsApp05},
                    {className0:"col-12 col-lg-6 offset-lg-3 sectionSpace-02-t",
                    className1:"w-100",
                    src:fmsApp06},
                    {className0:"col-12 col-lg-5 offset-lg-3 justify-content-center",
                    className1:"w-100",
                    src:fmsApp07},
                    {className0:"col-12 col-lg-6 sectionSpace-02-t",
                    className1:"w-100 border",
                    src:fmsApp08},
                    {className0:"col-12 col-lg-3 offset-lg-3 sectionSpace-02-t sectionSpace-02-b",
                    className1:"w-100",
                    src:fmsApp09},
                ],
                designSystems: true,
                prototype: true,
                process: true,
                processes:[
                    "Deliverables : Product Design, Branding",
                    "Year : 2019",
                    "Type : Case Study",
                    "Team : Solo",
                    "harge : UX and UI / Interaction Designer UI design, prototyping, and concept video production. Lead UX and UI concept definition, ideation, and helped usability studies."
                ],     
                bottomNav:["fms","물류관리 대시보드","projectName"],       
                bottomLink:"fms"
            },
            {
                id:"fms",
                name:"물류관리 대시보드",
                sequence: 3,
                pageTitles:[
                    {
                        classname0:"d-block m8-r",
                        name:"Fassto"
                    },
                    {
                        classname0:"d-inline-block m8-r",
                        name:"Fullfillment"
                    },
                    {
                        classname0:"d-inline-block",
                        name:"Dashboard"
                    }],
                pageContents:[{className:"",text:"Fassto의 물류 서비스에 대한 인지도를 높이고 현지 호스트가 전문적이고 신뢰할 수 있음을 잠재적 예약자에게 안심시키기 위해 설계되었습니다."},{className:"m24-t",text:"컬러 블록 스타일은 시선을 사로 잡고 수평선과 수직선을 결합하여 안전성과 안정성을 전달합니다. 겹쳐진 요소는 이것이 너무 딱딱하게 느껴지는 것을 방지합니다."}],
                highlights:true,
                imgs:[
                    {className0:"col-12 sectionSpace-01-t",
                    className1:"w-100",
                    src:fmsApp00},
                    {className0:"col-12 col-lg-5 sectionSpace-02-t sectionSpace-03-b",
                    className1:"w-100",
                    src:fmsApp01},
                    {className0:"col-12 col-lg-6 offset-lg-1 sectionSpace-03-t",
                    className1:"w-100",
                    src:fmsApp02},
                    {className0:"col-12 col-lg-6 offset-lg-1",
                    className1:"w-100",
                    src:fmsApp03},
                    {className0:"col-12 col-lg-3 sectionSpace-03-b offset-lg-2",
                    className1:"w-100",
                    src:fmsApp04},
                    {className0:"col-12 col-lg-3 sectionSpace-02-t sectionSpace-03-b",
                    className1:"w-100",
                    src:fmsApp05},
                    {className0:"col-12 col-lg-6 offset-lg-3 sectionSpace-02-t",
                    className1:"w-100",
                    src:fmsApp06},
                    {className0:"col-12 col-lg-5 offset-lg-3 justify-content-center",
                    className1:"w-100",
                    src:fmsApp07},
                    {className0:"col-12 col-lg-6 sectionSpace-02-t",
                    className1:"w-100 border",
                    src:fmsApp08},
                    {className0:"col-12 col-lg-3 offset-lg-3 sectionSpace-02-t sectionSpace-02-b",
                    className1:"w-100",
                    src:fmsApp09},
                ],

                designSystems: true,
                prototype: true,
                process: true,
                processes:[
                    "Deliverables : Product Design, Branding",
                    "Year : 2019",
                    "Type : Case Study",
                    "Team : Solo",
                    "harge : UX and UI / Interaction Designer UI design, prototyping, and concept video production. Lead UX and UI concept definition, ideation, and helped usability studies."
                ],  
                bottomNav:["flexWeb","반응형 웹","projectName"],                 
                bottomLink:"flexWeb"
            },
            {
                id:"flexWeb",
                name:"빈응형 웹",
                sequence: 4,
                pageTitles:[
                    {
                        classname:"d-block m8-r",
                        name:"Fassto"
                    },
                    {
                        classname:"d-inline-block m8-r",
                        name:"Fullfillment"
                    },
                    {
                        classname:"d-inline-block",
                        name:"App"
                    }],
                pageContents:[{className:"",text:"Fassto의 물류 서비스에 대한 인지도를 높이고 현지 호스트가 전문적이고 신뢰할 수 있음을 잠재적 예약자에게 안심시키기 위해 설계되었습니다."},{className:"m24-t",text:"컬러 블록 스타일은 시선을 사로 잡고 수평선과 수직선을 결합하여 안전성과 안정성을 전달합니다. 겹쳐진 요소는 이것이 너무 딱딱하게 느껴지는 것을 방지합니다."}],
                highlights:true,
                imgs:[
                    {className0:"col-12 sectionSpace-01-t",
                    className1:"w-100",
                    src:fmsApp00},
                    {className0:"col-12 col-lg-5 sectionSpace-02-t sectionSpace-03-b",
                    className1:"w-100",
                    src:fmsApp01},
                    {className0:"col-12 col-lg-6 offset-lg-1 sectionSpace-03-t",
                    className1:"w-100",
                    src:fmsApp02},
                    {className0:"col-12 col-lg-6 offset-lg-1",
                    className1:"w-100",
                    src:fmsApp03},
                    {className0:"col-12 col-lg-3 sectionSpace-03-b offset-lg-2",
                    className1:"w-100",
                    src:fmsApp04},
                    {className0:"col-12 col-lg-3 sectionSpace-02-t sectionSpace-03-b",
                    className1:"w-100",
                    src:fmsApp05},
                    {className0:"col-12 col-lg-6 offset-lg-3 sectionSpace-02-t",
                    className1:"w-100",
                    src:fmsApp06},
                    {className0:"col-12 col-lg-5 offset-lg-3 justify-content-center",
                    className1:"w-100",
                    src:fmsApp07},
                    {className0:"col-12 col-lg-6 sectionSpace-02-t",
                    className1:"w-100 border",
                    src:fmsApp08},
                    {className0:"col-12 col-lg-3 offset-lg-3 sectionSpace-02-t sectionSpace-02-b",
                    className1:"w-100",
                    src:fmsApp09},
                ],

                designSystems: true,
                prototype: true,
                process: true,
                processes:[
                    "Deliverables : Product Design, Branding",
                    "Year : 2019",
                    "Type : Case Study",
                    "Team : Solo",
                    "harge : UX and UI / Interaction Designer UI design, prototyping, and concept video production. Lead UX and UI concept definition, ideation, and helped usability studies."
                ],    
                bottomNav:["naverOffice","네이버 오피스","projectName"],              
                bottomLink:"naverOffice"
            },
            {
                id:"naverOffice",
                name:"네이버 오피스",
                sequence: 5,
                pageTitles:[
                    {
                        classname0:"d-block m8-r",
                        name:"Fassto"
                    },
                    {
                        classname0:"d-inline-block m8-r",
                        name:"Fullfillment"
                    },
                    {
                        classname0:"d-inline-block",
                        name:"App"
                    }],
                pageContents:[{className:"",text:"Fassto의 물류 서비스에 대한 인지도를 높이고 현지 호스트가 전문적이고 신뢰할 수 있음을 잠재적 예약자에게 안심시키기 위해 설계되었습니다."},{className:"m24-t",text:"컬러 블록 스타일은 시선을 사로 잡고 수평선과 수직선을 결합하여 안전성과 안정성을 전달합니다. 겹쳐진 요소는 이것이 너무 딱딱하게 느껴지는 것을 방지합니다."}],
                highlights:true,
                imgs:[
                    {className0:"col-12 sectionSpace-01-t",
                    className1:"w-100",
                    src:fmsApp00},
                    {className0:"col-12 col-lg-5 sectionSpace-02-t sectionSpace-03-b",
                    className1:"w-100",
                    src:fmsApp01},
                    {className0:"col-12 col-lg-6 offset-lg-1 sectionSpace-03-t",
                    className1:"w-100",
                    src:fmsApp02},
                    {className0:"col-12 col-lg-6 offset-lg-1",
                    className1:"w-100",
                    src:fmsApp03},
                    {className0:"col-12 col-lg-3 sectionSpace-03-b offset-lg-2",
                    className1:"w-100",
                    src:fmsApp04},
                    {className0:"col-12 col-lg-3 sectionSpace-02-t sectionSpace-03-b",
                    className1:"w-100",
                    src:fmsApp05},
                    {className0:"col-12 col-lg-6 offset-lg-3 sectionSpace-02-t",
                    className1:"w-100",
                    src:fmsApp06},
                    {className0:"col-12 col-lg-5 offset-lg-3 justify-content-center",
                    className1:"w-100",
                    src:fmsApp07},
                    {className0:"col-12 col-lg-6 sectionSpace-02-t",
                    className1:"w-100 border",
                    src:fmsApp08},
                    {className0:"col-12 col-lg-3 offset-lg-3 sectionSpace-02-t sectionSpace-02-b",
                    className1:"w-100",
                    src:fmsApp09},
                ],
                designSystems: true,
                prototype: true,
                process: true,
                processes:[
                    "Deliverables : Product Design, Branding",
                    "Year : 2019",
                    "Type : Case Study",
                    "Team : Solo",
                    "harge : UX and UI / Interaction Designer UI design, prototyping, and concept video production. Lead UX and UI concept definition, ideation, and helped usability studies."
                ],    
                bottomNav:["fmsApp","물류관리 앱","projectName"],               
                bottomLink:"fmsApp"
            }
        ],
        workSection:{
            highlights:[
                {
                    classname0:"d-inline-block overflow-hidden m8-r",
                    classname1:"d-inline-block",
                    name:"UI"
                },
                {
                    classname0:"d-inline-block overflow-hidden m8-r",
                    classname1:"d-inline-block",
                    name:"Design"
                },
                {
                    classname0:"d-inline-block overflow-hidden",
                    classname1:"d-inline-block",
                    name:"Highlights "
            }],
            designSystems:[
                {
                    classname0:"d-inline-block overflow-hidden m8-r",
                    classname1:"d-inline-block",
                    name:"Design"
                },
                {
                    classname0:"d-inline-block overflow-hidden m16-r",
                    classname1:"d-inline-block",
                    name:"Systems"
            }],
            prototype:[
                {
                    classname0:"d-inline-block overflow-hidden",
                    classname1:"d-inline-block",
                    name:"Prototype"
                }  
            ],
            processes:[
                {
                    classname0:"d-inline-block overflow-hidden m8-r",
                    classname1:"d-inline-block",
                    name:"Scope of"
                },
                {
                    classname0:"d-inline-block overflow-hidden ",
                    classname1:"d-inline-block",
                    name:"Process"}],
        }
    }
    const elemRefs ={
        logos:[useRef(),useRef(),useRef()],
        menus:[useRef(),useRef(),useRef(),useRef(),useRef()],
        lines:[useRef(),useRef()],
        abouts:[useRef(),useRef(),useRef(),useRef(),useRef()],
        projects:[useRef(),useRef(),useRef(),useRef(),useRef()],
        sides:[useRef()],
        footers:useRef(),
        fmsApps:useRef(),
        panel:[useRef()],
    }
    const panel = (flag) => {
        const tlPanel = gsap.timeline();   
        tlPanel.delay(1)
        .add(
            st({
                elem:[elemRefs.panel[0].current],
                duration:1,
                delay:'0',
                height:'0%'}));
        return tlPanel; 
    }
    const about = () => {
        const tlAbout = gsap.timeline({ease:  ease01});    
        tlAbout
        .add(sf({
                elem:[elemRefs.abouts[0].current,elemRefs.abouts[1].current,elemRefs.abouts[2].current],
                duration:0.8,
                y:'100%', stagger:0.05}));     
        return tlAbout;  
    }

    const aboutCon = (flag) => {
        const tlAboutCon = gsap.timeline({ease:  ease01});    
        tlAboutCon
        .add(sf({
                elem:[elemRefs.abouts[3].current,elemRefs.abouts[4].current],
                duration:0.8,
                y:'5%',
                opacity:'0'}));         
        return flag? tlAboutCon:tlAboutCon.reverse();  
    }
    const projects = (flag) => {
        const tlPrj = gsap.timeline({
            ease:  ease01
        });  
        tlPrj.add(
            sf({
                elem:[elemRefs.projects[0].current,elemRefs.projects[1].current,elemRefs.projects[2].current,elemRefs.projects[3].current,elemRefs.projects[4].current],
                duration:1.6,
                y:'100%',
                opacity:'1',
                stagger:0.1}));
        return flag ? tlPrj:tlPrj.reverse();
    }    
    const side = (flag) => {
        let tlSide = gsap.timeline({ease: ease01});    
        tlSide.add(
            sft({
                elem:[elemRefs.sides[0].current],
                duration:0.8,
                opacity0:'0',
                opacity1:'1'}));
        return flag? tlSide:tlSide.reverse();  
    }
    const menus = () => {
        let tlMenu = gsap.timeline({ease: ease01});   
        tlMenu.add(
            sf({
                elem:[elemRefs.logos[0].current,elemRefs.logos[1].current,elemRefs.logos[2].current,elemRefs.menus[0].current,elemRefs.menus[1].current,elemRefs.menus[2].current,elemRefs.footers.current],
                duration:1.2,
                y:'-100%',
                opacity:'1',
                stagger:0.1}));
        return tlMenu;
    }
    const lines = (index) => {
        let tlLine = gsap.timeline();   
        tlLine.add(
            // menus line
            sf({
                elem:[elemRefs.lines[index].current],
                duration:1.2,
                x:'-100%',
                opacity:'0'}));
        return tlLine;
    }

    const onMove = (hist,to) =>{ 
        let master = gsap.timeline({
            ease: ease01
        });
        //클릭
        if(to === '/' && hist.location.pathname !== '/'){
            master
            .add([projects(false),side(false),lines(1)])
        }else if(to === '/projects' && hist.location.pathname !== '/projects'){
            
            master
            .add([about().reverse(),aboutCon(false), side(false),lines(0)])
        }
        setTimeout(() => {
            hist.push(to);
            
            if(to === '/'){
                master.add([about(),  aboutCon(true), side(true) , lines(0)]);
                
            }else if(to === '/projects'){
                master
                .add([projects(true),side(true),lines(1)])
            } 
        },2000);
    }
    // 로딩
    const onload = (to,url) => {
        let master = gsap.timeline({
            ease: ease01
        });  
        if( to ==='/' || url  === '/'){
            // About
            master.add(panel(true))
            .add(about(),'-=1.6')            
            .add(aboutCon(true))
            .add(menus(),'-=1.6')
            .add(side(true),'-=0.8')
            .add(lines(0),'-=1');
        }
        else if( to === '/projects' || url === '/projects' ){
            // projects
            master.add(panel(true))
            .add(projects(true),'-=0.8')
            .add(menus(),'-=1.6')
            .add(side(true),'-=0.8')
            .add(lines(1),'-=1');
        }
    }
    const onClick = (event,history,to) => {
        event.preventDefault(); 
        
        // 서브
        if(history.location.pathname !== '/' && history.location.pathname !== '/projects'){
            history.push(to);
            if ( url === '/' || url === '/projects') {
                setTimeout(() => {
                    setUrl(to);
                    onload(to); 
                }, 300); 
            }
        // 인트로 
        }else{
            onMove(history,to)   
        }
    }
    // 효과
    useEffect(()=>{
        onload(url)
    },[]);
    useScrollPosition(
        ({ prevPos, currPos }) => {
          // 위로 가면 보인다
          const isShow = currPos.y > prevPos.y;
          if (isShow !== hideOnScroll) setHideOnScroll(isShow);
          if (currPos.y > 0) setHideOnScroll(null);
        },
        [hideOnScroll]
    );
    return(
        <LayoutContext.Provider value={{elemTexts,elemRefs,hideOnScroll,onClick}}>
            {children}
        </LayoutContext.Provider>
    )
}
export default LayoutProvider;