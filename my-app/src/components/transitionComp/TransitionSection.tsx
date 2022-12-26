import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface transitionProps {
    title: string,
    containerClass: string,
    parentTextClass: string,
};

const TransitionSection: React.FC<transitionProps> = ({ title, containerClass, parentTextClass }) => {

    useEffect(() => {
        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: `.${containerClass}`,
                scrub: 1,
                start: 'start start',
                end: () => '+=' + window.innerWidth*2,
            },
        });

        timeline.to(`.${parentTextClass}`, {
           top: 0,
        });

    }, [containerClass, parentTextClass]);

    return(
        <>
           <div className={`
           w-[10rem]
           h-screen
           gap-[10rem]
           overflow-hidden
           justify-center
           items-center
           italic
           relative
           ${containerClass}
           `}>
              <div className={`
              absolute
              bottom-[0%]
              w-full 
              h-max 
              flex 
              flex-col
              text-[5rem]
              gap-[1rem]
              justify-center
              ${parentTextClass}
              `}>
                <Text text={title} />
                <Mdash />
                <Text text={title} />
                <Mdash />
                <Text text={title} />
                <Mdash />
                <Text text={title} />
                <Mdash />
                <Text text={title} />
                <Mdash />
                <Text text={title} />
                <Mdash />
                <Text text={title} />
                <Mdash />
                <Text text={title} />
                <Mdash />
                <Text text={title} />
              </div>
           </div>
        </>
    );
};

interface textProps {
    text: string,
};

const Text: React.FC<textProps> = ({ text }) => {
    return(
        <>
           <div className="
                 w-full 
                 flex 
                 justify-center 
                 items-center 
                 h-[10rem] ">
                     <div className="rotate-90">{text}</div>
           </div>
        </>
    );
};

const Mdash: React.FC = () => {
    return(
        <>
           <div 
           className="
           w-full 
           flex 
           justify-center 
           items-center 
           h-[10rem] ">
              <div className="rotate-90">—</div>
           </div>
        </>
    );
};

export default TransitionSection;