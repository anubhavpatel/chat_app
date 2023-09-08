import socketIO from "socket.io-client" 
import {BrowserRouter , Routes, Route} from "react-router-dom";
import './App.css';
import Join from "./components/join/Join";
import Chat from "./components/Chats/UserChat"
function App() {
 
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" Component={Join}/>
        <Route path="/chat"Component={Chat}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
