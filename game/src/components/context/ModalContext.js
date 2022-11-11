import { createContext, useState, useCallback } from 'react';

export const ModalContext = createContext({
    modal: false,
    changeMode: () => {}
});

const ModalProvider = (props) => {
    const [modal, setModal] = useState(false);

    const changeMode = useCallback(() => {
        setModal(!modal);
    }, [modal])


    return (
        <ModalContext.Provider value={{ modal, changeMode}}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider