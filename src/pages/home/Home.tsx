
import { useEffect, useState } from "react";
import './home.css'
import { Cartas } from '../../types/types'
import { Button } from '../../componentStyles/component';
import '../../api/cartas.json';
import axios from 'axios';

const Home = () => {

    const [cartas, setCartas] = useState<Cartas[]>([])
    const [busca, setBusca] = useState('')


    useEffect(() => {
        axios.get(`http://localhost:3000/cards?q=${busca}`)
            .then(res => {
                setCartas(res.data)
            });
    })

    const buscarCartas =(e:any)=>{
       e.preventDefault()
       console.log('botao clicado');
    }
    return (
        <>
            <main className="container--primary">
                <section className='section--buscar' >
                    <div className='container--buscar'>
                        <h2 className='h2--subtitle'>Buscar uma carta</h2>
                        <div className='section--pesquisa'>
                            <input type="text" className='input--buscar' placeholder='Digite um valor de carta...'
                                onChange={(ev) => setBusca(ev.target.value)}
                                value={busca} />
                            <Button onClick={buscarCartas}> Buscar</Button>
                        </div>
                    </div>
                </section>
            </main>

            <h2> Cartas do jogo</h2>
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

        </>

    )
}

export default Home