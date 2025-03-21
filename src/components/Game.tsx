
import React from 'react';
import './Game.css';
import './BotonesGame.css';
import './index';
import './FooterGame.css'


export const Game = () => {

    const [scoreJugador, setScoreJugador] = React.useState(0);
    const [scoreCompu, setScoreCompu] = React.useState(0);
    const [jugador, setJugador] = React.useState('Jugador');
    const [compu, setCompu] = React.useState('Computadora');
    const [resultado, setResultado] = React.useState('Ganador');
    const [inputNombre, setInputNombre] = React.useState<string | null>();
    const [pedirNombre, setPedirNombre] = React.useState(true);

    
    if ( pedirNombre ) {
        
        while (true) {

            const varNombre = prompt('Ingresa tu nombre: ');
            if (varNombre == null || varNombre == '') {
                alert('Debes ingresar un nombre.')
            }else {
                setInputNombre(varNombre);
                setPedirNombre(false);
                break;
            }
        }
    }
    
    

    const onClickPiedra = () => setJugador('Piedra');
    const onClickPapel = () => setJugador('Papel');
    const onClickTijera = () => setJugador('Tijera');


    const onClickJugar = () => {

        const opciones = ['Piedra', 'Papel', 'Tijera'];
        const compuEleccion = opciones[Math.floor(Math.random()*3)] 

        if ( jugador === 'Piedra' && compuEleccion === 'Tijera' ) {
            setResultado('Ganador!!');
            setScoreJugador( (count:number) => count + 1 );


        }else if ( jugador === 'Piedra' && compuEleccion === 'Papel' ) {
            setResultado('Perdedor!!');
            setScoreCompu( (count:number) => count + 1 );


        }else if ( jugador === 'Papel' && compuEleccion === 'Piedra' ) {
            setResultado('Ganador!!');
            setScoreJugador( (count:number) => count + 1 );


        }else if ( jugador === 'Papel' && compuEleccion === 'Tijera' ) {
            setResultado('Perdedor!!');
            setScoreCompu( (count:number) => count + 1 );


        }else if ( jugador === 'Tijera' && compuEleccion === 'Papel' ) {
            setResultado('Ganador!!');
            setScoreJugador( (count:number) => count + 1 );


        }else if ( jugador === 'Tijera' && compuEleccion === 'Piedra' ) {
            setResultado('Perdedor!!');
            setScoreCompu( (count:number) => count + 1 );

        }else {
            setResultado('Empate!');
        }
        
        setCompu(compuEleccion);

    }

    const onClickReiniciar = () => {

        setJugador('Jugador');
        setCompu('Computadora');
        setResultado('Resultado');
        setScoreCompu(0);
        setScoreJugador(0);
        setPedirNombre(true);

    }

    return (
        <>
            <div id='contain-game'>
                <div id='contain-puntaje'>
                    <h2>{inputNombre}: {scoreJugador}</h2>
                    <h2>Computadora: {scoreCompu}</h2>
                </div>
                <div id='contain-jugadores'>
                    <div id='contain-nom-jugadores'>
                        <h2 className='nom-jugador'>{inputNombre}</h2>
                        <h2 className='nom-compu'>Computadora</h2>
                    </div>
                    <div id='jugadores'>
                        <div id='jugador'><h1>{jugador}</h1></div> 
                        <div id='compu'><h1>{compu}</h1></div> 
                        <div id='result'><h1>{resultado}</h1></div> 
                    </div>   
                </div>
                <div id='contain-main-botones'>
                    <div id='contain-botones'>
                        <div id='conjunto_1'>
                            <button onClick={onClickPiedra}>Piedra</button>
                            <button onClick={onClickPapel}>Papel</button>
                            <button onClick={onClickTijera}>Tijera</button>
                        </div>
                        <div id='conjunto_2'>
                            <button onClick={onClickJugar}>Jugar</button>
                            <button onClick={onClickReiniciar}>Reiniciar</button>
                        </div>
                    </div>
                </div>
                <div id='contain-footer-title'>
                    <h1 data-text="Piedra, Papel o Tijera"><span>Piedra, Papel o Tijera</span></h1>
                </div>
            </div>
        </>
    );
}












