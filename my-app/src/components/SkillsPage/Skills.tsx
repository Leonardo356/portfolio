import React, { useEffect } from "react";

const SkillsPage: React.FC = () => {
    return(
        <>
            <div className="
            w-screen
            h-screen
            flex
            pl-[5rem]
            justify-center
            items-center
            ">
                <Skills />
            </div>
        </>
    );
};

const Skills: React.FC = () => {
    return(
        <>
           <div className="
           w-max
           h-max
           flex
           p-[1rem]
           gap-[1rem]
           space-x-[3rem]
           ">
              <SkillName containerClass="cssContainer" skillName="1—CSS" />
              <SkillName containerClass="htmlContainer" skillName="2—HTML" />
              <SkillName containerClass="tailwindContainer" skillName="3—TAILWIND" />
              <SkillName containerClass="jsContainer" skillName="4—JAVASCRIPT" />
              <SkillName containerClass="tsContainer" skillName="5—TYPESCRIPT" />
              <SkillName containerClass="fbContainer" skillName="6—FIREBASE" />
              <SkillName containerClass="reactContainer" skillName="7—REACT" />
           </div>
        </>
    );
};

interface SkillNameProps {
    skillName: string;
    containerClass: string;
};

const SkillName: React.FC<SkillNameProps> = ({ skillName, containerClass }) => {
    let skillNameToArr = skillName.split('');

    useEffect(() => {
        let skillNameContainer = document.querySelector(`.${containerClass}`);
        skillNameContainer!.innerHTML = '';
        for(let i = 0; i < skillNameToArr.length; i++) {
            let letter = document.createElement('div');
            letter.className = 'w-[3rem] h-[3rem] flex justify-center items-center'
            letter.innerHTML = skillName[i];
            skillNameContainer?.appendChild(letter);
        }
    }, [skillNameToArr, skillName, containerClass]);

    return(
        <>
           <div className={`
           flex
           flex-col
           w-max
           h-max
           ${containerClass}
           `}>

           </div>
        </>
       );
};

export default SkillsPage;