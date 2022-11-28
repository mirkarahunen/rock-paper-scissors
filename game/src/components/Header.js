import React from "react";
import Score from "./Score";

const Header = () => {
    return(
        <header>
            <div className="container">
                <div className="header">
                    <h1><span>Rock</span><span>Paper</span><span>Scissors</span><span>Lizard</span><span>Spock</span></h1>
                    <Score />
                </div>
            </div>
        </header>
    )
}

export default Header;