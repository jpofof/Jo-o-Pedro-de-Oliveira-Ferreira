import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Aulas from './pages/Aulas';
import Desenvolvedor from './pages/Desenvolvedor'
import Estudos from './pages/Estudos'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aulas" element={<Aulas />} />
        <Route path='/desenvolvedor' element={<Desenvolvedor />} />
        <Route path='/estudos' element={<Estudos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;