import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Aulas from './pages/Aulas';
import Desenvolvedor from './pages/Desenvolvedor'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aulas" element={<Aulas />} />
        <Route path='/desenvolvedor' element={<Desenvolvedor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;