import React, { useContext } from "react";
import { ScoreContext } from "./context/ScoreContext";

const Score = () => {
    const { score } = useContext(ScoreContext);

    return (
        <div className="tile">
            <p>Score</p>
            <h2>{score}</h2>
        </div>
    )
}

export default Score;