import React, { useContext, useState } from "react";
import { ModalContext } from "./context/ModalContext";
import { ScoreContext } from "./context/ScoreContext";


const Game = () => {
    const { changeMode } = useContext(ModalContext);
    const { updateScore, gameResultText } = useContext(ScoreContext);
    const [ chosen, setChosen ] = useState("");
    const [ playing, setPlaying ] = useState(false);
    const [ houseChoice, setHouseChoice ] = useState("");
    const options = ["rock", "paper", "scissors", "lizard", "spock"];
    const [houseIsChoosing, setHouseIsChoosing] = useState(false);

    const gameResult = (chosen, house) => {

        if(chosen === house) {
            updateScore("draw");
            return;
        }

        if(chosen === "scissors") {
            if(house === "rock" || house === "spock") updateScore("lose");
            if(house === "paper" || house === "lizard") updateScore("win");
            return;
        }
        
        if(chosen === "paper") {
            if(house === "rock" || house === "spock") updateScore("win");
            if(house === "scissors" || house === "lizard") updateScore("lose");
            return;
        }

        if(chosen === "rock") {
            if(house === "paper" || house === "spock") updateScore("lose");
            if(house === "scissors" || house === "lizard") updateScore("win");
            return;
        }

        if(chosen === "lizard") {
            if(house === "paper" || house === "spock") updateScore("win");
            if(house === "rock" || house === "scissors") updateScore("lose");
            return;
        }

        if(chosen === "spock") {
            if(house === "scissors" || house === "rock") updateScore("win");
            if(house === "lizard" || house === "paper") updateScore("lose");
        }
    }

    const choosePlayedItem = (e) => {
        let randomChoice;
        let chosenItem = e.currentTarget.value;
        setHouseIsChoosing(true);
        setChosen(e.currentTarget.value);
        setPlaying(true);

        setTimeout(() => {
            setHouseIsChoosing(false);
            randomChoice = options[Math.floor(Math.random() * options.length)];
            setHouseChoice(randomChoice);
            gameResult(chosenItem, randomChoice);
        }, 1000);    
    }

    const playAgain = () => setPlaying(false);

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
                        {!houseIsChoosing && <h3>{gameResultText}</h3>}
                        <button className="btn btn--secondary" onClick={playAgain}>Play again</button>
                    </div>
                    <div className={houseIsChoosing ? "house-choise animated" : "house-choise"}>
                        <h4>The house picked</h4>
                        <div className={houseIsChoosing ? `game-btn` : `game-btn ${houseChoice} show`}>
                            <span><img src={`../images/icon-${houseChoice}.svg`} alt={houseChoice}/></span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="game">
                    <div className="bg-image">
                        {/* <img src="../images/bg-triangle.svg" alt="Triangle"/> */}
                        <img src="../images/bg-pentagon.svg" alt="Pentagon"/> 
                    </div>
                    <button type="button" value="scissors" className="game-btn scissors" onClick={choosePlayedItem}>
                        <span><img src="../images/icon-scissors.svg" alt="Scissors hand"/></span>
                    </button>
                    <button type="button" value="paper" className="game-btn paper" onClick={choosePlayedItem}>
                        <span><img src="../images/icon-paper.svg" alt="Paper hand"/></span>
                    </button>    
                    
                    <button type="button" value="rock" className="game-btn rock" onClick={choosePlayedItem}>
                        <span><img src="../images/icon-rock.svg" alt="Rock hand"/></span>
                    </button>
                    <button type="button" value="lizard" className="game-btn lizard" onClick={choosePlayedItem}>
                        <span><img src="../images/icon-lizard.svg" alt="Lizard"/></span>
                    </button>
                    <button type="button" value="spock" className="game-btn spock" onClick={choosePlayedItem}>
                        <span><img src="../images/icon-spock.svg" alt="Spock"/></span>
                    </button>
                </div>
            )}
            
            <button type="button" className="btn btn--primary rules-btn" onClick={changeMode}><span className="purple-gradient">Rules</span></button>
        </div>
        
    )
}

export default Game;