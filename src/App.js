import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Destinos from './Components/Destinos';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <Header /> 
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/destino" element={<Destinos />}/>
              {/*<Route path="/promocao" element={<Promocao />}/>
              <Route path="/login/*" element={<Login />}/> */}
            </Routes> 
           <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
