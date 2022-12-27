import React from "react";

interface WorkTemplateProps {
    title: string,
    number: string,
    feature1: string,
    feature2: string,
    feature3: string,
    feature4: string,
    feature5: string,
    feature6: string,
    feature7: string,
    titleClass: string,
    numberClass: string,
    workPageClass: string,
};

const WorkTemplate: React.FC<WorkTemplateProps> = ({ 
    title, 
    number, 
    feature1,
    feature2,
    feature3,
    feature4,
    feature5,
    feature6,
    feature7,
    titleClass,
    numberClass,
    workPageClass,
    }) => {

    return(
        <>
          <div className={`
           w-screen
           h-screen
           pl-[5rem]
           flex
           flex-col
           relative
           ${workPageClass}
          `}>
             <div className={`
             w-full 
             h-max
             p-[4rem]
             text-[5vmax]
             flex
             justify-end
             ${titleClass}
             `}>{title}
             </div>

             <div className="
             w-max
             h-full
             px-[2rem]
             flex
             flex-col
             items-start
             gap-[1rem]
             pl-[5rem]
             ">
             <div className=" bg-black text-bgColor p-[.5rem] font-normal">Features:</div>
                <div className="duration-[200ms]">{feature1}</div>
                <div className="duration-[200ms]">{feature2}</div>
                <div className="duration-[200ms]">{feature3}</div>
                <div className="duration-[200ms]">{feature4}</div>
                <div className="duration-[200ms]">{feature5}</div>
                <div className="duration-[200ms]">{feature6}</div>
                <div className="duration-[200ms]">{feature7}</div>
             </div>

             <div className={`
              w-full 
              h-max
              mt-auto
              p-[4rem]
              text-[5vmax]
              flex
              justify-start
              ${numberClass}
             `}>{number}
             </div>
             <AccessProject />
          </div>
        </>
    );
};

const AccessProject: React.FC = () => {
    return(
        <>
           <div className="
           absolute
           w-[10rem]
           h-[10rem]
           top-[60%]
           left-[70%]
           animate-spin
           flex
           justiyce-center
           items-center
           hover:tracking-tight
           tracking-[8px]
           ">
              <div className="absolute w-full h-full rounded-full border-[1px] border-l-transparent border-t-transparent border-black"></div>
              <div className="absolute w-max text-[1.5rem] duration-[400ms] left-[50%] font-normal -translate-x-[50%]">View project</div>
              <div className="absolute w-full h-full rounded-full border-[1px] border-r-transparent border-b-transparent border-black"></div>
           </div>
        </>
    );
};

export default WorkTemplate;