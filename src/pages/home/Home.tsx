import { Footer } from '../../Components/footer/Footer'
import { useEffect, useState } from "react";
import './home.css'
import { Cartas } from '../../types/types'
import axios from 'axios';
import { Button } from '../../componentStyles/component';
import cartas from '../../api/cartas.json';

const Home = () => {

    const [cartas, setCartas] = useState<Cartas[]>([])
    useEffect(() => {

        axios.get('../../api/cartas.json')
            .then(res => { setCartas(res.data.cards) })

    })

    return (
        <>
            <main className="container--primary">
                <section className='section--buscar' >
                    <div className='container--buscar'>
                        <h2  className='h2--subtitle'>Buscar uma carta</h2>
                        <div className='section--pesquisa'>
                        <input type="text" className='input--buscar' placeholder='Digite um valor de carta...' />
                        <Button> Buscar</Button>
                        </div>
                    </div>
                </section>
            </main>

            {cartas.map((item, index) => (

                <div key={item.code}>

                    <img src={item.image} alt="" />

                    <p>Tipo: {item.suit}</p>
                    <p>valor:{item.value}</p>

                </div>

            ))
            }

            <Footer />
        </>

    )
}

export default Home