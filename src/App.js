import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Main from "./components/Main";
import { FaceProvider } from "./context";

function App() {
  return (
    <FaceProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FaceProvider>
  );
}

export default App;
