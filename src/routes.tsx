import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PerfilDolce from './pages/Dolce'
import PerfilSushi from './pages/Sushi'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dolce" element={<PerfilDolce />} />
    <Route path="/sushi" element={<PerfilSushi />} />
  </Routes>
)

export default Rotas
