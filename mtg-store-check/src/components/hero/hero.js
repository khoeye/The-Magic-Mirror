import React from "react";
import HomeButton from "./homeButton";
import ManualSearchButton from "./manualSearchButton";
import HeroText from "./heroText"

const Hero = (props) => {
    return (
        <div>
            <HomeButton /> 
            <ManualSearchButton />
            <HeroText />
        </div>
    )
};

export default Hero