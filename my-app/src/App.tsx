import React, { useEffect } from "react";
import './App.css'
import Nav from "./components/nav/Nav";
import Content from "./contentPage/contentPage";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {

  useEffect(() => {
      window.onload = () => {
        window.requestAnimationFrame(function() {
          let container = document.querySelector('.contentPage') as HTMLElement | null;
          let appPage = document.querySelector('.appPage') as HTMLElement | null;
      
            let timeline = gsap.timeline({
              scrollTrigger: {
                trigger: appPage!,
                scrub: 1,
                invalidateOnRefresh: true,
                pin: true,
                start: 'start start',
                end: () => "+=" + container!.offsetWidth
              },
            });
      
            timeline.to(container!, {
              x: () => -(container!.scrollWidth - document.documentElement.clientWidth) + "px",
            });
        });
      };
}, []);

  return (
    <>
       <div className="
       w-screen
       h-screen
       overflow-hidden
       flex
       text-[2rem]
       appPage
       leading-none
       font-thin
       font-
       ">
         <Nav />
         <Content />
       </div>
    </>
  );
}

export default App;
