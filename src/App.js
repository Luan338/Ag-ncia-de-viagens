import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/pages/Home';
import Destinos from './Components/pages/Destinos';
import Promocoes from './Components/pages/Promocoes';
import Login from './Components/Login/Login';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <Header />
           <div className='animeLeft'>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/destino" element={<Destinos />}/>
                <Route path="/promocao" element={<Promocoes />} />
                <Route path="/login/*" element={<Login />}/> 
              </Routes> 
            </div> 
           <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
