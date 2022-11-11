import React, { useContext, useState, useEffect } from "react";
import { ModalContext } from "./context/ModalContext";
import { ScoreContext } from "./context/ScoreContext";


const Game = () => {
    const { changeMode } = useContext(ModalContext);
    const { updateScore, gameResultText } = useContext(ScoreContext);
    const [ chosen, setChosen ] = useState("");
    const [ playing, setPlaying ] = useState(false);
    const [ houseChoice, setHouseChoice ] = useState("");
    const options = ["rock", "paper", "scissors"];

    const gameResult = (chosen, house) => {
        
        if(chosen === house) {
            updateScore("draw");
            return;
        }
        
        if(chosen === "paper") {
            if(house === "scissors") updateScore("lose");
            if(house === "rock") updateScore("win");
            return;
        }

        if(chosen === "scissors") {
            if(house === "rock") updateScore("lose");
            if(house === "paper") updateScore("win");
            return;
        }

        if(chosen === "rock") {
            if(house === "paper") updateScore("lose");
            if(house === "scissors") updateScore("win");
            return;
        }
    }

    const choosePlayedItem = (e) => {
        setChosen(e.currentTarget.value);
        setPlaying(true);
        gameResult(e.currentTarget.value, houseChoice);
    }

    const playAgain = () => {
        setPlaying(false);
    }

    useEffect(() => {
        const findHouseChoice = () => {
            setHouseChoice(options[Math.floor(Math.random() * options.length)]);
        }

        findHouseChoice()
        
    });

    
    return (
        <div className="container">
            {playing ? (
                <div className="game game--ongoing">
                    <div className="player-choise">
                        <h4>You picked</h4>
                        <div className={`game-btn ${chosen}`}>
                            <span><img src={`../images/icon-${chosen}.svg`} alt={chosen}/></span>
                        </div>
                    </div>
                    <div className="result">
                        <h3>{gameResultText}</h3>
                        <button className="btn btn--secondary" onClick={playAgain}>Play again</button>
                    </div>
                    <div className="house-choise">
                        <h4>The house picked</h4>
                        <div className={`game-btn ${houseChoice}`}>
                            <span><img src={`../images/icon-${houseChoice}.svg`} alt={houseChoice}/></span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="game">
                    <div className="bg-image">
                        <img src="../images/bg-triangle.svg" alt="Triangle"/>
                    </div>
                    <button type="button" value="paper" className="game-btn paper" onClick={choosePlayedItem}>
                        <span><img src="../images/icon-paper.svg" alt="Paper hand"/></span>
                    </button>    
                    <button type="button" value="scissors" className="game-btn scissors" onClick={choosePlayedItem}>
                        <span><img src="../images/icon-scissors.svg" alt="Scissors hand"/></span>
                    </button>
                    <button type="button" value="rock" className="game-btn rock" onClick={choosePlayedItem}>
                        <span><img src="../images/icon-rock.svg" alt="Rock hand"/></span>
                    </button>
                </div>
            )}
            
            <button type="button" className="btn btn--primary rules-btn" onClick={changeMode}><span className="purple-gradient">Rules</span></button>
        </div>
        
    )
}

export default Game;