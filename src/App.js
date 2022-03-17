import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Destinos from './Components/pages/Destinos';
import Promocoes from './Components/pages/Promocoes';
import Login from './Components/Login/Login';
import Voos from './Components/pages/Voos';
import QuemSomos from './Components/pages/QuemSomos';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <Header />
           <section className='container'>
            <Navigation />
            <div className='animeLeft'>
                <Routes>
                  <Route path='/voos' element={<Voos />}/>
                  <Route path="/quemsomos" element={<QuemSomos />}/>
                  <Route path="/destino" element={<Destinos />}/>
                  <Route path="/promocao" element={<Promocoes />} />
                  <Route path="/login/*" element={<Login />}/> 
                </Routes> 
              </div> 
            <Footer />
           </section>
     </BrowserRouter>
    </div>
  );
}

export default App;
