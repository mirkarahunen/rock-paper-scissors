import { createContext, useState } from 'react';

export const ScoreContext = createContext({
    score: 0,
    win: false,
    updateScore: () => {},
    gameResultText: ""
});

const ScoreProvider = (props) => {
    let [score, setScore] = useState(0);
    const [ gameResultText, setGameResultText ] = useState("");
    const [win, setWin] = useState("");

    const updateScore = (result) => {
        if(result === "win") {
            setScore(score+1);           
            setGameResultText("You win!");
            setWin("player");
        } else if(result === "draw") {
            setGameResultText("Draw");
            setWin("");
        } else {
            setScore(score-1);
            if(score <= 0) setScore(0);
            setGameResultText("You lose");
            setWin("house");
        };
    }

    return (
        <ScoreContext.Provider value={{ score, updateScore, gameResultText, win}}>
            {props.children}
        </ScoreContext.Provider>
    )
}

export default ScoreProvider