import Game from "./components/Game";
import Header from "./components/Header";
import ModalProvider from "./components/context/ModalContext";
import Modal from "./components/Modal";
import ScoreProvider from "./components/context/ScoreContext";


const App = () => {

  return (
    <ModalProvider>
      <ScoreProvider>
      <div className="App">
          <Header/>
          <Game />
          <Modal />
      </div>
      </ScoreProvider>
      </ModalProvider>
  );
}

export default App;
