import React, { useContext } from "react";
import Game from "./Game";
import { ModalContext } from "./context/ModalContext";
import Modal from "./Modal";
import Header from "./Header";

const Layout = () => {
    const { changeMode } = useContext(ModalContext);

    return(
        <>
            <Header/>
            <Game />
            <button type="button" className="btn btn--primary rules-btn" onClick={changeMode}><span>Rules</span></button>
            <Modal />
        </>
    )
}

export default Layout;