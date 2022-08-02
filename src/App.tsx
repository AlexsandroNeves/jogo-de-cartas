import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './Components/menu/Menu'
import Home from './pages/home/Home'
import { Contato } from './pages/contato/Contato'
import { JogoCartas } from './pages/jogo/JogoCartas'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jogo-de-cartas" element={<JogoCartas />} />
        <Route path="/contatos" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
