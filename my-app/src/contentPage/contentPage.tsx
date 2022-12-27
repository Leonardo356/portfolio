import React from "react";
import FirstPage from "../components/firstPage/FirstPage";
import SkillsPage from "../components/SkillsPage/Skills";
import TransitionSection from "../components/transitionComp/TransitionSection";
import WorkPage from "../components/WorkPage/WorkPage";

const Content: React.FC = () => {

    return(
        <>
        <div className="
        w-max
        h-screen
        flex
        contentPage
        ">
            <FirstPage />

            <TransitionSection 
            containerClass="skillsContainer"
            parentTextClass="skillsParent"
            title="Skills" />

            <SkillsPage />

            <TransitionSection 
            containerClass="workContainer"
            parentTextClass="workParent"
            title="Work" />
            
            <WorkPage />
        </div>
        </>
    );
};

export default Content;