import React, { useState, useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar'
import Nav from '../layout/Nav'
import NuevoCliente from './NuevoCliente'
import ListadoClientes from './ListadoClientes'
import clienteContext from '../context/clientes/clienteContext'
import styled from 'styled-components'
import AuthContext from '../context/autenticacion/authContext';


const Clientes = () => {

    // Extaer la informacion de la autenticacion
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    // Extraer clientes de state inicial
    const clientesContext = useContext(clienteContext);
    const { popup, filtrarClientes, handleNuevoCliente } = clientesContext;

    const [filtro, guardarFiltro] = useState({
        patente: ''
    });

    const { patente } = filtro;

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

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {

        filtrarClientes(patente);

        // eslint-disable-next-line
    }, [patente]);

    const onChange = e => {
        guardarFiltro({
            ...filtro,
            [e.target.name]: e.target.value
        })
    }

    const mostrarPopup = () => {
        handleNuevoCliente(true);
    }

    return (
        <Container>
            {popup ? <NuevoCliente /> : null}
            {window.innerWidth < 850 ? <Nav /> : <Sidebar />}
            <DivClientes>
                <Titulo>Clientes</Titulo>
                <DivBarraBtn>
                    <Busqueda>
                        <Input
                            type='text'
                            placeholder='Buscar patente'
                            name='patente'
                            onChange={onChange}
                            value={patente}
                        />
                    </Busqueda>
                    <BtnNuevoCliente
                        onClick={mostrarPopup}
                    >
                        {size.width < 992 ? <i className="fas fa-user-plus"></i> : 'Nuevo Cliente'}
                    </BtnNuevoCliente>
                </DivBarraBtn>


                <ListadoClientes />

            </DivClientes>
        </Container>
    );
};

export default Clientes;

const Container = styled.div`
    width: 100%;
    min-height:100vh;
    display:flex;
    justify-content:flex-start;

    @media (max-width:850px){
        flex-direction:column;
    }
`;

const DivClientes = styled.div`
    width: calc(100% - 250px);
    min-height:100vh;
    padding:50px;
    margin-left:250px;

    @media (max-width:850px){
        margin-left:0;
        width:100%;
        padding:20px 50px;
    }

    @media (max-width:435px){
        padding:20px;
    }
`;

const Titulo = styled.h1`
    margin-bottom:50px;

    @media (max-width:850px){
        margin-bottom:20px;
    }
`;

const DivBarraBtn = styled.div`
    width:90%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:40px;

    @media (max-width:1300px){
        width:100%;
    }

    @media (max-width:575px){
        flex-direction:column;
    }
`;

const Busqueda = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;

    @media (max-width:575px){
        width:100%;
        margin-bottom:20px;
    }
`;

const Input = styled.input`
    width:500px;
    height:50px;
    border:none;
    border:1px solid rgba(0,0,0,.3);
    border-radius:5px;
    padding-left:10px;
    font-size:16px;
    
    :focus{
        outline:none;
        border:1px solid rgba(0,0,0,1);
    }

    @media (max-width:1300px){
        width:300px;
    }

    @media (max-width:992px){
        width:250px;
    }

    @media (max-width:850px){
        width:350px;
    }

    @media (max-width:675px){
        width:250px;
    }

    @media (max-width:575px){
        width:100%;
    }
`;

const BtnNuevoCliente = styled.div`
    width:200px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 20px;
    border-radius:5px;
    border:1px solid rgba(0,0,0,.5);
    background-color:cadetblue;
    color:white;
    cursor: pointer;

    :hover{
        background-color:rgba(95,158,160,.9);
    }

    @media (max-width:992px){
        width:100px;
    }
    @media (max-width:575px){
        width:250px;
    }
    @media (max-width:435px){
        width:100%;
    }
`;

