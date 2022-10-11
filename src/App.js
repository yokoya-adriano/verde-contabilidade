import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services/Services'
import Contact from './Components/Contact'
import NotFound from './Components/NotFound';
import './App.css';
import Service1 from './Components/Services/Service1';


function App() {
  return (
    <div>
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="sobre" element={<About />} />
                    <Route path="servicos" element={<Services />} />
                    <Route path="servicos/servico1" element={<Service1 />} />
                    <Route path="contato" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
