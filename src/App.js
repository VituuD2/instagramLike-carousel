import React from 'react';
import './style/App.css';
import './awesome6/css/all.css'
// import Navbar from './Navbar';
// import Carousel from './Carousel';
import Home from "./routes/Home";
import FirstC from "./routes/FirstC";
import SecondC from "./routes/SecondC";
import ThirdC from "./routes/ThirdC";
import FourthC from "./routes/FourthC";
import FifthC from "./routes/FifthC";
import SixthC from "./routes/SixthC";
import Value from "./routes/Value";
import FirstV from "./routes/ValueFolder/FirstV";
import SecondV from "./routes/ValueFolder/SecondV";
import ThirdV from "./routes/ValueFolder/ThirdV";
import { HashRouter, Routes, Route} from 'react-router-dom';


// Importa todas as imagens da pasta
// const importAll = (req) => req.keys().map(req);
// const imagesSrc = importAll(require.context('./assets', false, /\.(png)$/));

const App = () => {
  return (
    <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="Value" element={<Value/>}></Route>
          <Route path="FirstC" element={<FirstC/>}></Route>
          <Route path="SecondC" element={<SecondC/>}></Route>
          <Route path="ThirdC" element={<ThirdC/>}></Route>
          <Route path="FourthC" element={<FourthC/>}></Route>
          <Route path="FifthC" element={<FifthC/>}></Route>
          <Route path="SixthC" element={<SixthC/>}></Route>
          <Route path="FirstV" element={<FirstV/>}></Route>
          <Route path="SecondV" element={<SecondV/>}></Route>
          <Route path="ThirdV" element={<ThirdV/>}></Route>
        </Routes>
      
      {/* <h1> <i className="fab fa-instagram"></i> Carousel tester </h1>
      <Carousel imagesSrc={imagesSrc} /> */}
      {/* <Navbar /> */}
    </HashRouter>
  );
};

export default App;
