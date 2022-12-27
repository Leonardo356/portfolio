import React from "react";
import WorkTemplate from "./workTemplate";

const WorkPage: React.FC = () => {
    return(
        <> 
          <div className="
          w-max
          h-screen
          flex
          ">
            <WorkTemplate 
            titleClass="chromaTitle"
            numberClass="number1"
            feature1='- color blindness simulation'
            feature2='- editable color palettes'
            feature3='- luminance map'
            feature4='- contrast checker'
            feature5='- color wheel'
            feature6='- generating colors based on color theory (triadic, complementary etc.)'
            feature7='- users are able to save both colors & palettes by logging in their account'
            title="Chroma Colors" 
            number="0.1" 
            workPageClass='workPageChroma'/>

            <WorkTemplate 
            workPageClass='workPageFrames'
            titleClass="framesTitle"
            numberClass="number2"
            feature1='- in-browser css animation library'
            feature2='- edit animation duration, delay, timing function, etc.'
            feature3='- select animation category ( scale, rotate, slide, flip etc. )'
            feature4='- enjoy all type of animation based on chosen category'
            feature5='- free access to animation class and key frames'
            feature6='- copy your new custom animation in your code editor'
            feature7=''
            title="Key frames" 
            number="0.2" />

            <WorkTemplate 
            workPageClass='workPageFit'
            titleClass="fitTitle"
            numberClass="number3"
            feature1='- create an account and save your progress'
            feature2='- calculate your calorie and macro intake'
            feature3='- choose your goal based on your daily activity level'
            feature4='- track your meals based on nutritional value'
            feature5='- create your own food item templates'
            feature6='- select preset items from a large database'
            feature7='- after a 24 hour cycle your food input is reset and ready for a new day'
            title="Fit Track" 
            number="0.3" />

            <WorkTemplate 
            workPageClass='workPagePlanify'
            titleClass="planifyTitle"
            numberClass="number4"
            feature1='- create multiple boards to organize your tasks'
            feature2='- create your own list logic and task implementation'
            feature3='- give notes and captions to your composite tasks'
            feature4='- fully editable boards, lists, and tasks'
            feature5='- select your board favorite color'
            feature6='- search sistem for easily found boards'
            feature7='- starred section for boards'
            title="Planify" 
            number="0.4" />

            <WorkTemplate 
            workPageClass='workPageFoodApp'
            titleClass="foodAppTitle"
            numberClass="number5"
            feature1='- an order food simulation app'
            feature2='- log in into your account'
            feature3='- select your items from different stores'
            feature4='- add items to your cart'
            feature5='- view total price including delivery fee'
            feature6='- check out'
            feature7=''
            title="Food App" 
            number="0.5" />
          </div>
        </>
    );
};

export default WorkPage;