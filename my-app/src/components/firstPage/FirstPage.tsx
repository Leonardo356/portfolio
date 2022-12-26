import React from "react";
import './FirstPage.css'

const FirstPage: React.FC = () => {
    return(
        <>
           <div
           className="
           w-screen
           h-screen
           firstPage
           pl-[5rem]
           flex
           flex-col
           justify-center
           items-center
           py-[1rem]
           relative
           font-bold
           ">
              <TextFirstPage />
           </div>
        </>
    );
};

const TextFirstPage: React.FC = () => {
    return(
        <>
           <div className="
           absolute
           w-max
           px-[1rem]
           overflow-hidden
           h-max
           text-[6vmax]
           flex
           flex-col
           z-[200]
           gap-[3rem]
           ">
            <div>I'm Leonardo</div> 
            <div>Front-end</div>
            <div>Developer</div>
           </div>
        </>
    );
};

export default FirstPage;