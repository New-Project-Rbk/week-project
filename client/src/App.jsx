
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginFinal from './LoginFinal.jsx';
import SignUp from "./SignUp.jsx";



function App() {
















  return (
    <div>
        <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LoginFinal />} />
          {/* <Route path="Login" element={< LoginFinal/>} /> */}
          <Route path="SignUp" element={< SignUp/>} />
          
          
        </Route>
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
