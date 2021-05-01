import React, { useState, useEffect, useContext } from 'react';
import Sidebar from '../layout/Sidebar'
import Nav from '../layout/Nav'
import styled from 'styled-components'
import ListadoIngresos from './ListadoIngresos';
import AuthContext from '../context/autenticacion/authContext';
import ingresoContext from '../context/ingresos/ingresoContext';
import NuevoIngreso from './NuevoIngreso';

const Ingresos = () => {

    // Extaer la informacion de la autenticacion
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    const ingresosContext = useContext(ingresoContext);
    const { ingresoPopup, handleNuevoIngreso } = ingresosContext;


    useEffect(() => {
        usuarioAutenticado();

        // eslint-disable-next-line
    }, []);

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

    const mostrarPopup = () => {
        handleNuevoIngreso(true);
    }

    return (
        <Container>
            {ingresoPopup ? <NuevoIngreso /> : null}
            {window.innerWidth < 850 ? <Nav /> : <Sidebar />}
            <DivIngresos>
                <Titulo>Ingresos</Titulo>
                <DivBarraBtn>
                    <Busqueda>
                        <Input
                            type='date'
                            name='fecha'
                        />
                        <BtnBuscar
                            type='submit'
                        >
                            <i className="fas fa-search"></i>
                        </BtnBuscar>
                    </Busqueda>
                    <BtnNuevoCliente
                        onClick={mostrarPopup}
                    >
                        {size.width < 993 ? <i className="fas fa-plus"></i> : 'Nuevo Ingreso'}
                    </BtnNuevoCliente>
                </DivBarraBtn>

                <DivTabla>
                    <ListadoIngresos />
                </DivTabla>
            </DivIngresos>
        </Container>
    );
};

export default Ingresos;

const Container = styled.div`
    width: 100%;
    min-height:100vh;
    display:flex;
    justify-content:flex-start;

    @media (max-width:850px){
        flex-direction:column;
    }
`;

const DivIngresos = styled.div`
    width: calc(100% - 250px);
    min-height:100vh;
    padding:50px;
    margin-left:250px;

    @media (max-width:850px){
        margin-left:0;
        width:100%;
        padding:20px 50px;
        display:flex;
        flex-direction:column;
        align-items:center;
    }

    @media (max-width:500px){
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
    width:70%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:40px;

    @media (max-width:1300px){
        width:100%;
    }
    
    @media (max-width:1080px){
        width:100%;
    }

    @media (max-width:575px){
        flex-direction:column;
    }
`;

const Busqueda = styled.form`
    display:flex;
    justify-content:flex-start;
    align-items:center;

    @media (max-width:575px){
        width:100%;
        margin-bottom:20px;
    }
`;

const Input = styled.input`
    width:300px;
    height:50px;
    border:none;
    border:1px solid rgba(0,0,0,.3);
    border-radius:5px 0 0 5px;
    padding:0 10px;
    font-size:16px;
    
    :focus{
        outline:none;
        border:1px solid rgba(0,0,0,1);
    }

    @media (max-width:675px){
        width:200px;
    }

    @media (max-width:575px){
        width:100%;
    }
`;

const BtnBuscar = styled.button`
    width:100px;
    height:50px;
    border-radius:0 5px 5px 0;
    border:none;
    border:1px solid rgba(0,0,0,.3);
    border-left:none;
    outline:none;
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

const DivTabla = styled.div`
    overflow: auto;
    width: 100%;

    @media (max-width:760px){
        width:100%;
    }
`;