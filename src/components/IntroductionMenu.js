import React from 'react'
import Card from "./Card";
import PopularPost from "./PopularPost";
import Tags from "./Tags";

const IntroductionMenu = () => {
    return(
        <div className="w3-col l4">
            <Card/>
            <PopularPost/>
            <Tags/>
        </div>
    )
}
export default IntroductionMenu;