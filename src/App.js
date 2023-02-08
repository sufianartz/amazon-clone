
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import Footer from './components/footer/Footer';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/login" element={[ <Login/>,<Footer/>]} />
        <Route path="/checkout" element={  [<Header/>, <Checkout/>, <Footer/>]} />
        <Route path = "/" element={ [<Header/>,<Home />, <Footer/>]} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
