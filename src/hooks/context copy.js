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
import useScrollClipPath from 'hooks/useScrollClipPath';


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
            },
            {
                type:'a',
                name:'dyha7648@gmail.com',
                to:'mailto:dyha7648@gmail.com'
            }
        ],
        abouts:[
            {
                type:'inline',
                name:'Now'
            },
            {
                type:'inline',
                name:'&'
            },
            {
                type:'block',
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
                        classname0:"d-block overflow-hidden",
                        classname1:"d-inline-block",
                        name:"Fassto"
                    },
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
                pageContent:"Fassto의 물류 서비스에 대한 인지도를 높이고 현지 호스트가 전문적이고 신뢰할 수 있음을 잠재적 예약자에게 안심시키기 위해 설계되었습니다. 컬러 블록 스타일은 시선을 사로 잡고 수평선과 수직선을 결합하여 안전성과 안정성을 전달합니다. 겹쳐진 요소는 이것이 너무 딱딱하게 느껴지는 것을 방지합니다. 스톡 이미지와 색상 그레이딩을 통해 몽환적 인 품질로 부드럽게 표현하여 좋은 추억을 제안합니다. 아이콘은 처음부터 만들어졌습니다.",
                highlights:true,
                imgs:[
                    {className0:"col-12 sectionSpace-01-t",
                    className1:"w-100",
                    src:fmsApp00,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-5 sectionSpace-02-t sectionSpace-03-b",
                    className1:"w-100",
                    src:fmsApp01,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-6 offset-lg-1 sectionSpace-03-t",
                    className1:"w-100",
                    src:fmsApp02,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-6 offset-lg-1",
                    className1:"w-100",
                    src:fmsApp03,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-3 sectionSpace-03-b offset-lg-2",
                    className1:"w-100",
                    src:fmsApp04,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-3 sectionSpace-02-t sectionSpace-03-b",
                    className1:"w-100",
                    src:fmsApp05,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-6 offset-lg-3 sectionSpace-02-t",
                    className1:"w-100",
                    src:fmsApp06,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-5 offset-lg-3 justify-content-center",
                    className1:"w-100",
                    src:fmsApp07,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-6 sectionSpace-02-t",
                    className1:"w-100 border",
                    src:fmsApp08,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-3 offset-lg-3 sectionSpace-02-t sectionSpace-02-b",
                    className1:"w-100",
                    src:fmsApp09,
                    effect:useScrollClipPath()},
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
                bottomNav:"디자인 시스템",
                bottomLink:"designSystem"
            },
            {
                id:"designSystem",
                name:"디자인 시스템",
                sequence: 2,
                pageTitles:["Fassto","Fullfillment","App"],
                pageContent:"Fassto의 물류 서비스에 대한 인지도를 높이고 현지 호스트가 전문적이고 신뢰할 수 있음을 잠재적 예약자에게 안심시키기 위해 설계되었습니다. 컬러 블록 스타일은 시선을 사로 잡고 수평선과 수직선을 결합하여 안전성과 안정성을 전달합니다. 겹쳐진 요소는 이것이 너무 딱딱하게 느껴지는 것을 방지합니다. 스톡 이미지와 색상 그레이딩을 통해 몽환적 인 품질로 부드럽게 표현하여 좋은 추억을 제안합니다. 아이콘은 처음부터 만들어졌습니다.",
                highlights:true,
                imgs:[
                    {className0:"col-12 sectionSpace-01-t",
                    className1:"w-100",
                    src:fmsApp00,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-5 sectionSpace-02-t sectionSpace-03-b",
                    className1:"w-100",
                    src:fmsApp01,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-6 offset-lg-1 sectionSpace-03-t",
                    className1:"w-100",
                    src:fmsApp02,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-6 offset-lg-1",
                    className1:"w-100",
                    src:fmsApp03,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-3 sectionSpace-03-b offset-lg-2",
                    className1:"w-100",
                    src:fmsApp04,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-3 sectionSpace-02-t sectionSpace-03-b",
                    className1:"w-100",
                    src:fmsApp05,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-6 offset-lg-3 sectionSpace-02-t",
                    className1:"w-100",
                    src:fmsApp06,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-5 offset-lg-3 justify-content-center",
                    className1:"w-100",
                    src:fmsApp07,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-6 sectionSpace-02-t",
                    className1:"w-100 border",
                    src:fmsApp08,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-3 offset-lg-3 sectionSpace-02-t sectionSpace-02-b",
                    className1:"w-100",
                    src:fmsApp09,
                    effect:useScrollClipPath()},
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
                bottomNav:"물류관리 대시보드",
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
                        name:"App"
                    }],
                pageContent:"Fassto의 물류 서비스에 대한 인지도를 높이고 현지 호스트가 전문적이고 신뢰할 수 있음을 잠재적 예약자에게 안심시키기 위해 설계되었습니다. 컬러 블록 스타일은 시선을 사로 잡고 수평선과 수직선을 결합하여 안전성과 안정성을 전달합니다. 겹쳐진 요소는 이것이 너무 딱딱하게 느껴지는 것을 방지합니다. 스톡 이미지와 색상 그레이딩을 통해 몽환적 인 품질로 부드럽게 표현하여 좋은 추억을 제안합니다. 아이콘은 처음부터 만들어졌습니다.",
                highlights:true,
                imgs:[
                    {className0:"col-12 sectionSpace-01-t",
                    className1:"w-100",
                    src:fmsApp00,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-5 sectionSpace-02-t sectionSpace-03-b",
                    className1:"w-100",
                    src:fmsApp01,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-6 offset-lg-1 sectionSpace-03-t",
                    className1:"w-100",
                    src:fmsApp02,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-6 offset-lg-1",
                    className1:"w-100",
                    src:fmsApp03,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-3 sectionSpace-03-b offset-lg-2",
                    className1:"w-100",
                    src:fmsApp04,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-3 sectionSpace-02-t sectionSpace-03-b",
                    className1:"w-100",
                    src:fmsApp05,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-6 offset-lg-3 sectionSpace-02-t",
                    className1:"w-100",
                    src:fmsApp06,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-5 offset-lg-3 justify-content-center",
                    className1:"w-100",
                    src:fmsApp07,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-6 sectionSpace-02-t",
                    className1:"w-100 border",
                    src:fmsApp08,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-3 offset-lg-3 sectionSpace-02-t sectionSpace-02-b",
                    className1:"w-100",
                    src:fmsApp09,
                    effect:useScrollClipPath()},
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
                bottomNav:"반응형 웹",
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
                pageContent:"Fassto의 물류 서비스에 대한 인지도를 높이고 현지 호스트가 전문적이고 신뢰할 수 있음을 잠재적 예약자에게 안심시키기 위해 설계되었습니다. 컬러 블록 스타일은 시선을 사로 잡고 수평선과 수직선을 결합하여 안전성과 안정성을 전달합니다. 겹쳐진 요소는 이것이 너무 딱딱하게 느껴지는 것을 방지합니다. 스톡 이미지와 색상 그레이딩을 통해 몽환적 인 품질로 부드럽게 표현하여 좋은 추억을 제안합니다. 아이콘은 처음부터 만들어졌습니다.",
                highlights:true,
                imgs:[
                    {className0:"col-12 sectionSpace-01-t",
                    className1:"w-100",
                    src:fmsApp00,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-5 sectionSpace-02-t sectionSpace-03-b",
                    className1:"w-100",
                    src:fmsApp01,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-6 offset-lg-1 sectionSpace-03-t",
                    className1:"w-100",
                    src:fmsApp02,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-6 offset-lg-1",
                    className1:"w-100",
                    src:fmsApp03,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-3 sectionSpace-03-b offset-lg-2",
                    className1:"w-100",
                    src:fmsApp04,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-3 sectionSpace-02-t sectionSpace-03-b",
                    className1:"w-100",
                    src:fmsApp05,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-6 offset-lg-3 sectionSpace-02-t",
                    className1:"w-100",
                    src:fmsApp06,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-5 offset-lg-3 justify-content-center",
                    className1:"w-100",
                    src:fmsApp07,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-6 sectionSpace-02-t",
                    className1:"w-100 border",
                    src:fmsApp08,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-3 offset-lg-3 sectionSpace-02-t sectionSpace-02-b",
                    className1:"w-100",
                    src:fmsApp09,
                    effect:useScrollClipPath()},
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
                bottomNav:"네이버 오피스",
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
                pageContent:"Fassto의 물류 서비스에 대한 인지도를 높이고 현지 호스트가 전문적이고 신뢰할 수 있음을 잠재적 예약자에게 안심시키기 위해 설계되었습니다. 컬러 블록 스타일은 시선을 사로 잡고 수평선과 수직선을 결합하여 안전성과 안정성을 전달합니다. 겹쳐진 요소는 이것이 너무 딱딱하게 느껴지는 것을 방지합니다. 스톡 이미지와 색상 그레이딩을 통해 몽환적 인 품질로 부드럽게 표현하여 좋은 추억을 제안합니다. 아이콘은 처음부터 만들어졌습니다.",
                highlights:true,
                imgs:[
                    {className0:"col-12 sectionSpace-01-t",
                    className1:"w-100",
                    src:fmsApp00,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-5 sectionSpace-02-t sectionSpace-03-b",
                    className1:"w-100",
                    src:fmsApp01,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-6 offset-lg-1 sectionSpace-03-t",
                    className1:"w-100",
                    src:fmsApp02,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-6 offset-lg-1",
                    className1:"w-100",
                    src:fmsApp03,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-3 sectionSpace-03-b offset-lg-2",
                    className1:"w-100",
                    src:fmsApp04,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-3 sectionSpace-02-t sectionSpace-03-b",
                    className1:"w-100",
                    src:fmsApp05,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-6 offset-lg-3 sectionSpace-02-t",
                    className1:"w-100",
                    src:fmsApp06,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-5 offset-lg-3 justify-content-center",
                    className1:"w-100",
                    src:fmsApp07,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-6 sectionSpace-02-t",
                    className1:"w-100 border",
                    src:fmsApp08,
                    effect:useScrollClipPath()},
                    {className0:"col-12 col-lg-3 offset-lg-3 sectionSpace-02-t sectionSpace-02-b",
                    className1:"w-100",
                    src:fmsApp09,
                    effect:useScrollClipPath()},
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
                bottomNav:"물류관리 앱",
                bottomLink:"fmsApp"
            }
        ],
        workSection:{
            highlights:[
                {
                    classname0:"d-block overflow-hidden",
                    classname1:"d-inline-block",
                    name:"UI"
                },
                {
                    classname0:"d-block overflow-hidden m16-r",
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
                    classname0:"d-block overflow-hidden",
                    classname1:"d-inline-block",
                    name:"Design"
                },
                {
                    classname0:"d-block overflow-hidden m16-r",
                    classname1:"d-inline-block",
                    name:"Systems"
            }],
            prototype:[
                {
                    classname0:"d-block overflow-hidden",
                    classname1:"d-inline-block",
                    name:"Prototype"
                }  
            ],
            processes:[
                {
                    classname0:"d-block overflow-hidden",
                    classname1:"d-inline-block",
                    name:"Scope of"
                },
                {
                    classname0:"d-block overflow-hidden m16-r",
                    classname1:"d-inline-block",
                    name:"Process"}],
        }
    }
    const elemRefs ={
        logos:[useRef(),useRef(),useRef()],
        menus:[useRef(),useRef(),useRef(),useRef(),useRef()],
        lines:[useRef(),useRef()],
        abouts:[useRef(),useRef(),useRef(),useRef()],
        projects:[useRef(),useRef(),useRef(),useRef(),useRef()],
        footers:useRef(),
        fmsApps:useRef(),
        panel:[useRef()],
    }
    const panel = (flag) => {
        let tl = gsap.timeline();   
        tl.delay(2)
        .add(
            st({
                elem:[elemRefs.panel[0].current],
                duration:1,
                delay:'0',
                x:'',
                y:'',
                height:'0%',
                opacity:''}))
        return tl; 
    }
    const about = (flag) => {
        let tl = gsap.timeline();    
        tl.add(
            sf({
                elem:[elemRefs.abouts[0].current,elemRefs.abouts[1].current,elemRefs.abouts[2].current,elemRefs.abouts[3].current],
                duration:1.6,
                x:'',
                y:'100%',
                opacity:'1',
                stagger:'.1',relativeT:""}));
        return flag? tl:tl.reverse();  
    }
    const menus = () => {
        let tl = gsap.timeline({ease: ease01});   
        tl.add(
            sf({
                elem:[elemRefs.logos[0].current,elemRefs.logos[1].current,elemRefs.logos[2].current,elemRefs.menus[0].current,elemRefs.menus[1].current,elemRefs.menus[2].current,elemRefs.footers.current],
                duration:1.2,
                x:'',
                y:'-100%',
                opacity:'1',
                stagger:'.1',relativeT:""}))
        return tl;
    }
    const lines = (index) => {
        let tl = gsap.timeline();   
        tl.add(
            // menus line
            sf({
                elem:[elemRefs.lines[index].current],
                duration:1.2,
                x:'-100%',
                y:'',
                opacity:'0',
                stagger:'',relativeT:""}));
        return tl;
    }
    const projects = (flag) => {
        let tl = gsap.timeline({
            ease:  ease01
        });  
        tl.add(
            sf({
                elem:[elemRefs.projects[0].current,elemRefs.projects[1].current,elemRefs.projects[2].current,elemRefs.projects[3].current,,elemRefs.projects[4].current],
                duration:1.6,
                x:'',
                y:'100%',
                opacity:'1',
                stagger:'.2',relativeT:""}));
        return flag ? tl:tl.reverse();
    }
    const onMove = (history,to) =>{
        let master = gsap.timeline({
            ease: ease01
        });
        if(to === '/'){
            master.add(projects(false))
        }else if(to === '/projects'){
            master
            .add(about(false))
            .add(lines(0));
        }
        setTimeout(() => {
            history.push(to);
            if(to === '/'){
                master
                .add(about(true))
                .add(lines(0),'-=.6');
            }else if(to === '/projects'){
                master
                .add(projects(true))
                .add(lines(1),'-=.6');
            }
        }, 2000);
    }
    const onload = () => {
        let master = gsap.timeline({
            ease: ease01
        });  
        if(url === '/'){
            // About
            master.add(panel(true))
            .add(about(true),'-=1.6')
            .add(menus(),'-=1')
            .add(lines(0),'-=.6');
        }
        else if(url === '/projects'){
            // projects
            master.add(panel(true))
            .add(projects(true),'-=1.6')
            .add(menus(),'-=1')
            .add(lines(1),'-=.6');
        }
    }
    const onClick = (event,history,to) => {
        event.preventDefault();
        // 인트로가 아닐시
        if(history.location.pathname !== '/' && history.location.pathname !== '/projects'){
            console.log('to',to)
            history.push(to);
            setUrl(to)
            onload()
        // 인트로 일시
        }else{
            console.log('here1')
            onMove(history,to)   
        }
    }
    // 효과
    useEffect(()=>{
        onload()
    },[]);
    useScrollPosition(
        ({ prevPos, currPos }) => {
          // 위로 가면 보인다
          const isShow = currPos.y > prevPos.y;
          if (isShow !== hideOnScroll) setHideOnScroll(isShow);
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