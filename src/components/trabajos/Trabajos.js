import React, { useContext, useState, useEffect } from 'react';
import Sidebar from '../../components/layout/Sidebar'
import Nav from '../../components/layout/Nav'
import EditarCliente from '../clientes/EditarCliente';
import NuevoTrabajo from './NuevoTrabajo'
import ListadoTrabajos from './ListadoTrabajos'
import clienteContext from '../context/clientes/clienteContext'
import trabajoContext from '../context/trabajos/trabajoContext'

import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Confirmacion from '../layout/Confirmacion';


const Trabajos = () => {

    const clientesContext = useContext(clienteContext);
    const { confirmacion, popup, clienteActual, handleNuevoCliente, handleConfirmacion } = clientesContext;

    const trabajosContext = useContext(trabajoContext);
    const { trabajoscliente } = trabajosContext;

    const size = useWindowSize();

    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });
        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            // Add event listener
            window.addEventListener("resize", handleResize);
            // Call handler right away so state gets updated with initial window size
            handleResize();
            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
        return windowSize;
    }

    if (clienteActual === null) return <Redirect to='/clientes' />;

    const [cliente] = clienteActual;

    const { nombre, patente, tel, marca, modelo } = cliente;



    const mostrarPopup = () => {
        handleNuevoCliente(true);
    }

    const mostrarPopupConfirmacion = () => {
        handleConfirmacion(true);
    }

    console.log(size.width);

    return (
        <Container>
            {popup ? <EditarCliente /> : null}
            {confirmacion ? <Confirmacion /> : null}

            {size.width < 992 ? <Nav /> : <Sidebar />}
            <DivTrabajos>
                <BtnVolver>
                    <Link to={'/clientes'} className='volver'> <i className="fas fa-caret-left"></i> Volver</Link>
                </BtnVolver>
                <DivTitulo>
                    <Titulo>Cliente: {nombre}</Titulo>
                    <DivBotones>
                        <BtnNuevoCliente
                            onClick={mostrarPopup}
                        >
                            {(window.innerWidth < 1300
                                ? <i className="fas fa-user-edit"></i>
                                : ('Editar'))}
                        </BtnNuevoCliente>
                        <BtnEliminar
                            onClick={mostrarPopupConfirmacion}
                        >
                            {(window.innerWidth < 1300
                                ? <i className="fas fa-user-times"></i>
                                : ('Eliminar'))}
                        </BtnEliminar>
                    </DivBotones>
                </DivTitulo>
                <DivInfo>
                    <PInfo>
                        <strong>Teléfono:</strong> {tel}
                    </PInfo>
                    <PInfo>
                        <strong>Patente:</strong> {patente}
                    </PInfo>
                    <PInfo>
                        <strong>Marca:</strong> {marca}
                    </PInfo>
                    <PInfo>
                        <strong>Modelo:</strong> {modelo}
                    </PInfo>
                </DivInfo>

                <DivNuevoTrabajo>
                    <NuevoTrabajo />
                </DivNuevoTrabajo>

                {trabajoscliente.length === 0
                    ? <Mensaje>No hay trabajos, comienza agregando uno!</Mensaje>
                    : <ListadoTrabajos />
                }
            </DivTrabajos>
        </Container>

    );
};

export default Trabajos;

const Container = styled.div`
    width: 100%;
    min-height:100vh;
    display:flex;
    justify-content:flex-start;

    @media (max-width:992px){
        flex-direction:column;
    }
`;

const DivTrabajos = styled.div`
    width: calc(100% - 250px);
    min-height:100vh;
    padding:50px;
    margin-left:250px;

    @media (max-width:992px){
        width:100%;
        margin:0;
        padding:20px;
    }
`;

const DivTitulo = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:20px;
    padding:10px;

    @media (max-width:500px){
        flex-wrap:wrap-reverse;
        margin-bottom:0;
    }
`;

const Titulo = styled.h1`
    @media (max-width:1080px){
        font-size:28px;
    }
    @media (max-width:500px){
        text-align:center;
    }
`;

const DivBotones = styled.div`
    display:flex;

    @media (max-width:500px){
        width:100%;
        justify-content:center;
        margin-bottom:20px;
    }
`;

const BtnNuevoCliente = styled.div`
    width:150px;
    height:50px;
    margin-right:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 20px;
    font-family:'Arial';
    border-radius:5px;
    border:1px solid rgba(0,0,0,.5);
    background-color:cadetblue;
    color:white;
    cursor: pointer;

    :hover{
        background-color:rgba(95,158,160,.9);
    }

    @media (max-width:1080px){
        width:100px;
    }
    @media (max-width:500px){
        width:30%;
    }
`;
const BtnEliminar = styled.button`
    width:150px;
    height:50px;
    background-color:#D34949;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 20px;
    border-radius:5px;
    border:1px solid rgba(0,0,0,.5);
    color:white;
    cursor: pointer;

    :hover{
        background-color:rgba(211, 73, 73 ,.9);
    }

    @media (max-width:1080px){
        width:100px;
    }
    @media (max-width:500px){
        width:30%;
    }
`;

const BtnVolver = styled.div`
    width:100px;
    height:40px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin-bottom:10px;
`;

const DivInfo = styled.div`
    width:60%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:30px;

    @media (max-width:1080px){
        width:70%;
    }

    @media (max-width:675px){
        width:100%;
        margin:20px auto;
    }

    @media (max-width:500px){
        flex-wrap:wrap;
    }
    @media (max-width:400px){
        flex-direction:column;
    }
`;

const PInfo = styled.p`
    font-size:18px;

    @media (max-width:500px){
        width:50%;
        display:flex;
        justify-content:space-around;
    }

    @media (max-width:400px){
        width:100%;
        justify-content:space-evenly;
    }
`;

const DivNuevoTrabajo = styled.div`
    width:100%;
`;

const Mensaje = styled.p`
    font-size:32px;
    font-weight:bold;
    
    @media (max-width:400px){
        font-size:26px;
    }
`;