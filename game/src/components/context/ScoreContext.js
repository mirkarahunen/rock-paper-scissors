import { createContext, useState } from 'react';

export const ScoreContext = createContext({
    score: 0,
    updateScore: () => {},
    gameResultText: ""
});

const ScoreProvider = (props) => {
    let [score, setScore] = useState(0);
    const [ gameResultText, setGameResultText ] = useState("");

    const updateScore = (result) => {
        if(result === "win") {
            setScore(score+1);           
            setGameResultText("You win!");
        } else if(result === "draw") {
            setGameResultText("Draw");
        } else {
            setScore(score-1);
            if(score <= 0) setScore(0);
            setGameResultText("You lose");
        };

        
    }

    return (
        <ScoreContext.Provider value={{ score, updateScore, gameResultText}}>
            {props.children}
        </ScoreContext.Provider>
    )
}

export default ScoreProvider