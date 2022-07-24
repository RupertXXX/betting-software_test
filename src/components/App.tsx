import ControlPanel from "./controlPanel/ControlPanel";
import { ModalProvider } from "./modalProvider/ModalProvider";

function App() {
  return (
    <ModalProvider>
      <div className="app">
        <ControlPanel />
      </div>
    </ModalProvider>
  );
}

export default App;
