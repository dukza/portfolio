
import {gsap} from 'gsap';


export const onFadeInOriginT = (...rest) =>{
    let tl = gsap.timeline();
    tl.staggerFrom([rest[0].elem],rest[0].duration,
        {x:rest[0].x,y:rest[0].y,opacity:rest[0].opacity},
        rest[0].stagger,rest[0].relativeT);
    return tl;
}

export const framer = ()=>{


    const transition = {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.9]
    }

    const maskAnimation = {
        initial: {
            width: "100%"
        },
        animate: {
            width: "0%"
        }
    }

    const worksTitleParent = {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity:1,
            transition: {
                duration: 1,
                staggerChildren: 0.2,
                delayChildren: 3,
            }
        }
    }

    const parent = {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity:1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 3,
            }
        }
    }
    const textReveal = {

      visible: (delay = 0.05) => ({
        x:'0px',
        y:'0%',
        z:'1px',
        transition: {
          duration: 0.8,
          ease: [0.25, 1, 0.5, 1],
        },
      }),
      hidden: (delay: 0 | 0.3 = 0) => ({
        x:'0px',
        y:'100%',
        z:'1px',
        transition: {
          duration: 0.5,

        },
      }),
    }
    const textMask = {
        initial: {
            y: "-50%",
        },
        animate: {
            y: "0%",
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
    // const animationVariants = {
    //   visible: (delay = 1) => ({
    //     x:'0px',
    //     y:'0%',
    //     z:'1px',
    //     transition: {
    //       duration: 0.5,
    //       delay,
    //       delayChildren: 1
    //     },
    //   }),
    //   hidden: (delay: 0 | 0.3 = 0) => ({
    //     x:'0px',
    //     y:'100%',
    //     z:'1px',
    //     transition: {
    //       duration: 0.5,
    //       delay: 0.3 - delay, // the inverse of the show delay
    //       delayChildren: 1
    //     },
    //   }),
    // };
    const animationVariants = {
        visible: {
          x:'0px',
          y:'0%',
          z:'1px',
          transition: {
            duration: 0.8,
            ease: [0.25, 1, 0.5, 1],
            delayChildren: 0.1,
            staggerChildren:0.1
          },
        },
        hidden:{
          x:'0px',
          y:'100%',
          z:'1px',
          transition: {
            duration: 0.5,
            delayChildren: 1,
            staggerChildren:0.4

          },
        },
      };
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
        transition,
        maskAnimation,
        parent,
        textReveal,
        opacityReveal,
        worksTitleParent,
        textMask,
        showIn,
        showInWrap,
        animationVariants
    }
}