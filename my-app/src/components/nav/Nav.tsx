import React, { MouseEventHandler } from "react";
import './Nav.css'

const Nav: React.FC = () => {
    return(
        <>
           <div className="
           w-[5rem]
           h-screen
           flex
           flex-col
           border-r-[1px]
           border-black
           fixed
           mixBlend
           bg-alphaWhite
           top-0
           left-0
           text-black
           z-[9000]
           font-normal
           ">
            <MenuBtn />
            <NavText text='— front-end —' />
            <Logo />
           </div>
        </>
    );
}; 

const MenuBtn: React.FC = () => {

    const mouseOverMenu: MouseEventHandler = (event: React.MouseEvent<Element, MouseEvent>) => {
        let parent = event.currentTarget;
        let secLine = parent?.querySelector('.secMenuLine');
        let lastLine = parent?.querySelector('.lastMenuLine');

        if( event.type === 'mouseover') {

            lastLine?.classList.remove('w-full');
            secLine?.classList.remove('w-full');

            lastLine?.classList.add('w-[60%]');
            secLine?.classList.add('w-[80%]');

            return;
        };
            lastLine?.classList.add('w-full');
            secLine?.classList.add('w-full');

            lastLine?.classList.remove('w-[60%]');
            secLine?.classList.remove('w-[80%]');
    };

    return(
        <>
           <div
           onMouseOver={mouseOverMenu} 
           onMouseLeave={mouseOverMenu}
           className="
           w-[5rem]
           h-[5rem]
           flex
           flex-col
           mb-auto
           p-[1rem]
           gap-[.5rem]
           justify-center
           items-start
           cursor-pointer
           ">
              <div className="w-full"><MenuLine height='h-[.3rem]' /></div>
              <div className="w-full duration-[200ms] secMenuLine"><MenuLine height='h-[.2rem]' /></div>
              <div className="w-full duration-[200ms] lastMenuLine"><MenuLine height='h-[.1rem]' /></div>
           </div>
        </>
    );
};

interface menuLineWidh {
    height: string,
};

const MenuLine: React.FC<menuLineWidh> = ({ height }) => {
    return(
        <>
          <div className={`
          w-full
          ${height}
          bg-black
          `}
          >

          </div>
        </>
    );
};

interface NavTextProp {
    text?: string,
};

const NavText: React.FC<NavTextProp> = ({ text }) => {
    return(
        <>
           <div className="
           w-full
           h-[20rem]
           ml-[0]
           flex
           flex-col
           items-center
           text-[2.5rem]
           justify-center
           mt-auto
           mb-auto
           ">
              <div className="-rotate-90 w-max">{text}</div>
           </div> 
        </>
    );
};

const Logo: React.FC = () => {
    return(
        <>
          <div className="
          w-full
          h-[5rem]
          flex
          justify-center
          items-center
          font-medium
          mt-auto
          ">
            <div className="-rotate-90 w-max">LV</div>
          </div>
        </>
    );
};

export default Nav;