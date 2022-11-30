import React, { useContext, useState, useEffect } from "react";
import { ModalContext } from "./context/ModalContext";
import { ScoreContext } from "./context/ScoreContext";
import GameBtn from "./GameBtn";

const Game = () => {
    const { changeMode } = useContext(ModalContext);
    const { win, updateScore, gameResultText } = useContext(ScoreContext);
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
            return;
        }
    }

    useEffect(() => {
        console.log(win);

    }, [win])

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
console.log(win === "player");
    return (
        <div className="container">
            {playing ? (
                <div className="game game--ongoing">
                    <div className="player-choise">
                        <h4>You picked</h4>
                        <GameBtn name={chosen} playing={playing} id={"player"} win={win}/>
                    </div>
                    <div className="result">
                        {!houseIsChoosing && <h3>{gameResultText}</h3>}
                        <button className="btn btn--secondary" onClick={playAgain}>Play again</button>
                    </div>
                    <div className={houseIsChoosing ? "house-choise animated" : "house-choise"}>
                        <h4>The house picked</h4>
                        <GameBtn name={houseChoice} houseIsChoosing={houseIsChoosing} playing={playing} id={"house"} win={win}/>
                    </div>
                </div>
            ) : (
                <div className="game">
                    <div className="bg-image">
                        {/* <img src="../images/bg-triangle.svg" alt="Triangle"/> */}
                        <img src="../images/bg-pentagon.svg" alt="Pentagon"/> 
                    </div>
                    <GameBtn name="scissors" handleClick={choosePlayedItem} playing={playing}/>
                    <GameBtn name="paper" handleClick={choosePlayedItem} playing={playing}/>
                    <GameBtn name="rock" handleClick={choosePlayedItem} playing={playing}/>
                    <GameBtn name="lizard" handleClick={choosePlayedItem} playing={playing}/>
                    <GameBtn name="spock" handleClick={choosePlayedItem} playing={playing}/>
                </div>
            )}
            
            <button type="button" className="btn btn--primary rules-btn" onClick={changeMode}><span>Rules</span></button>
        </div>
        
    )
}

export default Game;