import React, { Fragment } from "react";
import HomeButton from "./homeButton";
import ManualSearchButton from "./maualSearchButton";
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