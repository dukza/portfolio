
import {gsap} from 'gsap';
const ease01 = [0.16, 0.5, 0.3, 1];

export const tweenMax = () => {
  const sf = (...rest) =>{
      let tl = gsap.timeline();
      tl.staggerFrom([rest[0].elem],rest[0].duration,
          {x:rest[0].x,y:rest[0].y,opacity:rest[0].opacity,
          ease:ease01},rest[0].stagger
          );
      return tl;
  }
  const st = (...rest) =>{
    let tl = gsap.timeline();
    tl.staggerTo([rest[0].elem],rest[0].duration,
        {x:rest[0].x,y:rest[0].y,height:rest[0].height,
          opacity:rest[0].opacity,
          ease:ease01},
        rest[0].delay);
    return tl;
}
  const sft = (...rest) => {
    let tl = gsap.timeline();
    tl.staggerFromTo([rest[0].elem],rest[0].duration,
      {height:rest[0].height0,opacity:rest[0].opacity0},
      {height:rest[0].height1,opacity:rest[0].opacity1},
      rest[0].stagger,rest[0].relativeT);
    return tl;
  }
  return {sf, st, sft}
  
}


export const framer = ()=>{
    const transition =({ duration = 1,delay=0.1,easing = [0, 0, 0.2, 1]}) => ({
      duration:duration,
      delay: delay,
      ease: easing,
      type: "spring"
    });
    const btOrigin = {
      visible: (delay = 0.05) => ({
        x:'0px',
        y:'0%',
        z:'1px',
        transition: {
          duration: 2,
          ease: ease01,
        },
      }),
      hidden: (delay: 0 | 0.3 = 0) => ({
        x:'0px',
        y:'100%',
        z:'1px'
      }),
    }
    const btOpacity = {
      visible: (delay = 0.05) => ({
        x:'0px',
        y:'0%',
        z:'1px',
        opacity:0.1,
        transition: {
          duration: 2,
          ease: ease01,
        },
      }),
      hidden: (delay: 0 | 0.3 = 0) => ({
        x:'0px',
        y:'100%',
        z:'1px',
        opacity:1
      }),
    }
    const mask = {
        visible: {
            y: "0%",
            transition: {
              duration: 2,
              ease: ease01,
            },
        },
        hidden: {
            y: "-10%",
        }
    }
    const line = {
      visible: {
          height: "100%",
          transition: {
            delay:1,
            duration: 2,
            ease: ease01,
          },
      },
      hidden: {
        width: "100%",
        height: "0%",
        top:0,
        x:0,
        y:0
      }
  }
    const opacityReveal = {
        initial: {
            y: "120%",
            opacity: 0
        },
        animate: {
            y: "0",
            opacity: 1
        }
    }
    const animationVariants = {
        visible: {
          x:'0px',
          y:'0%',
          z:'1px',
          transition: {
            staggerChildren:0.4
          },
        },
        hidden:{
          x:'0px',
          y:'0%',
          z:'1px',
          transition: {
            staggerChildren:0.4
          }
        },
        initial:{
          x:'0px',
          y:'100%',
          z:'1px',
          opacity : 0
        }
      };

    const clipPath = {
      hidden: {
        opacity: 0,
        transform: "scale(1.1)",
        clipPath: "inset(0 20% 0 0)"
      },
      show: {
        opacity: 1,
        transform: "scale(1)",
        clipPath: "inset(0 0 0 0)",
        transition
      }
    }
    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.5
        }
      }
    } 
    const showIn = {
        hidden: {
          opacity: 0
        },
        default: {
          transition: {

          }
        },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 1,
            staggerChildren: 1
          }
        }
      };
      const showInWrap = {
        initial: { y: "100%" },
        hidden: { y: "100%" },
        defualt: { y: "0%" },
        visible: (i) => ({
          y: "0%",
          transition: {
            delay: i * 0.6
          }
        })
      };
    return {
        btOrigin,
        btOpacity,
        mask,
        line,
        opacityReveal,
        showIn,
        showInWrap,
        animationVariants,
        clipPath
    }
}