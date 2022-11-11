import React from "react";

const Game = () => {
    return (
        <div className="container">
            <div className="game">
                <div className="bg-image">
                    <img src="../images/bg-triangle.svg" alt="Triangle"/>
                </div>
                <button type="button" id="paper" className="game-btn">
                    <span><img src="../images/icon-paper.svg" alt="Paper hand"/></span>
                </button>    
                <button type="button" id="scissors" className="game-btn">
                    <span><img src="../images/icon-scissors.svg" alt="Scissors hand"/></span>
                </button>
                <button type="button" id="rock" className="game-btn">
                    <span><img src="../images/icon-rock.svg" alt="Rock hand"/></span>
                </button>
            </div>
        </div>
        
    )
}

export default Game;