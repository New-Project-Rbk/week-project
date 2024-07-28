
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginFinal from './LoginFinal.jsx';
import SignUp from "./SignUp.jsx";
import LandingPage from "./components/LandingPage.jsx";
import NewProduct from "./components/NewProduct.jsx";
import Checkout from "./components/Checkout.jsx";
import Cart from "./components/Cart.jsx";




function App() {
















  return (
    <div>
        <BrowserRouter>
      <Routes>
        <Route >
          <Route path="/" index element={<LandingPage />} />
          <Route path="Login" element={< LoginFinal/>} />
          <Route path="SignUp" element={< SignUp/>} />
          <Route path="NewProduct" element={< NewProduct/>} />
          <Route path="Checkout" element={< Checkout/>} />
          <Route path="Cart" element={< Cart/>} />
          
          
        </Route>
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
