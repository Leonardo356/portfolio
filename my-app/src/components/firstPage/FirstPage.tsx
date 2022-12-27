import React from "react";
import './FirstPage.css'

const FirstPage: React.FC = () => {
    
    return(
        <>
           <div
           className="
           w-screen
           h-screen
           pl-[5rem]
           flex
           justify-center
           items-center
           relative
           ">
            <FirstPageText />
           </div>
        </>
    );
};

const FirstPageText: React.FC = () => {
    return(
        <>
           <div className="
           text-[8vmax]
           flex
           gap-[1rem]
           flex-col
           px-[1rem]
           text-black
           w-max
           h-max
           italic
           ">
             <div className="text-[1.6rem] mr-auto">{'<h1>'}</div>
             <div className=" flex gap-[2rem] ml-auto">
               <div className="-rotate-[10deg] font-bold text-[4vmax]">Hi!</div> <div>I'm Leonardo</div>
             </div>
             <div className="flex w-max mr-auto">
                <div>Front - end</div>
             </div>
             <div className=" ml-auto flex">
                <div>Developer...</div>
             </div>
             <div className="text-[1.6rem] mr-auto">{'</h1>'}</div>
           </div>
        </>
    );
};

export default FirstPage;