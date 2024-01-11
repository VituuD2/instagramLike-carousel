import React from 'react';
import './style/App.css';
import './awesome6/css/all.css'
// import Navbar from './Navbar';
// import Carousel from './Carousel';
import Home from "./routes/Home";
import FirstC from "./routes/FirstC";
import SecondC from "./routes/SecondC";
import ThirdC from "./routes/ThirdC";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


// Importa todas as imagens da pasta
// const importAll = (req) => req.keys().map(req);
// const imagesSrc = importAll(require.context('./assets', false, /\.(png)$/));

const App = () => {
  return (
    <div className="App">
      <Router basename="/instagramLike-carousel">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="FirstC" element={<FirstC/>}></Route>
          <Route path="SecondC" element={<SecondC/>}></Route>
          <Route path="ThirdC" element={<ThirdC/>}></Route>
        </Routes>
      </Router>
      {/* <h1> <i className="fab fa-instagram"></i> Carousel tester </h1>
      <Carousel imagesSrc={imagesSrc} /> */}
      {/* <Navbar /> */}
    </div>
  );
};

export default App;
