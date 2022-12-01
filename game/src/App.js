import ModalProvider from "./components/context/ModalContext";
import ScoreProvider from "./components/context/ScoreContext";
import Layout from "./components/Layout";

const App = () => {

  return (
    <ModalProvider>
        <ScoreProvider>
            <div className="App">          
                <Layout />
            </div>
        </ScoreProvider>
    </ModalProvider>
  );
}

export default App;
