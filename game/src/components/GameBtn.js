import React from "react";

const GameBtn = ({ name, handleClick, playing, houseIsChoosing, id, win }) => {

    return (
        !playing ? 
            <button type="button" value={name} className={`game-btn ${name}`} onClick={handleClick}>
                <span><img src={`../images/icon-${name}.svg`} alt={`${name} hand`}/></span>
            </button> 
        : 
            <div className={`game-btn ${name} ${id === "house" && !houseIsChoosing ? "show" : ""} ${id === win && "winner"}`} id={id}>
                <span><img src={`../images/icon-${name}.svg`} alt={name}/></span>
            </div> 
    )
}

export default GameBtn;