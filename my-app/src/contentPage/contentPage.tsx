import React from "react";
import FirstPage from "../components/firstPage/FirstPage";
import TransitionSection from "../components/transitionComp/TransitionSection";

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
            <div className="w-screen h-screen"></div>
        </div>
        </>
    );
};

export default Content;