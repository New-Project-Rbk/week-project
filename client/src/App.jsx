
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginFinal from './LoginFinal.jsx';
import SignUp from "./SignUp.jsx";
import LandingPage from "./components/LandingPage.jsx";
import UploadImage from "./components/UploadImage.jsx";




function App() {
















  return (
    <div>
        <BrowserRouter>
      <Routes>
        <Route >
          <Route path="/" index element={<LandingPage />} />

          <Route path="Login" element={< LoginFinal/>} />

          <Route path="SignUp" element={< SignUp/>} />
          
          
        </Route>
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
