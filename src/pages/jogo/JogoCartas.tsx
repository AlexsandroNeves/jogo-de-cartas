import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button } from '../../componentStyles/component'
import { Cartas } from '../../types/types'
import './JogoCartas.css'

export const JogoCartas = () => {
  const [cartas, setCartas] = useState<Cartas[]>([])



  useEffect(() => {
    axios.get(`http://localhost:3000/cards`)
      .then(res => {
        setCartas(res.data)
      });
  })

  return (
    <>
      <h2>Carregando cartas aleatorias:</h2>
      <div className='container--cards'>
        {cartas.map((item, index) => (

          <div className='section--card'>
            <div key={index}>
              <img className='img--cards' src={item.image} alt="" />
              <p className='card--suit'> <strong>Tipo:</strong> {item.suit} </p>
              <p className='card--suit'><strong>Valor:</strong> {item.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='container-botao'>
        <Button>Adicionar carta</Button>
        <Button>Trocar cartas</Button>
      </div>
    </>
  )
}
