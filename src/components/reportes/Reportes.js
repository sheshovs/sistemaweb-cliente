import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components'
import Sidebar from '../layout/Sidebar'
import Nav from '../layout/Nav'
import AuthContext from '../context/autenticacion/authContext';
import trabajoContext from '../context/trabajos/trabajoContext'

const Reportes = () => {

    // Extaer la informacion de la autenticacion
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado } = authContext;

    const trabajosContext = useContext(trabajoContext);
    const { allTrabajos, obtenerTodosLosTrabajos } = trabajosContext;

    const fechaHoy = new Date();
    const fechaReporteMensual = (fechaHoy.getMonth() + 1 < 10)
        ? fechaHoy.getFullYear() + '-0' + (fechaHoy.getMonth() + 1)
        : fechaHoy.getFullYear() + '-' + (fechaHoy.getMonth() + 1);
    const fechaReporteAnual = new Date().getFullYear().toString()

    const [fecha, guardarFecha] = useState({
        mes: fechaReporteMensual,
        anio: fechaReporteAnual
    });

    const { mes, anio } = fecha;

    const [ingresoMensual, guardarIngresoMensual] = useState(0);
    const [ingresoAnual, guardarIngresoAnual] = useState(0);


    useEffect(() => {
        usuarioAutenticado();
        obtenerTodosLosTrabajos(usuario);
        // eslint-disable-next-line
    }, []);



    // eslint-disable-next-line no-unused-vars
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

    const actualizarState = (e) => {
        guardarFecha({
            ...fecha,
            [e.target.name]: e.target.value
        });
    }



    const obtenerReporteMensual = (e) => {
        e.preventDefault();


        var ingreso = 0;

        allTrabajos.forEach(trabajo => {
            if (fecha.mes === trabajo.fecha.slice(0, 7)) {
                ingreso += parseInt(trabajo.costo);
            }
        });

        guardarIngresoMensual(ingreso);
    };

    const obtenerReporteAnual = (e) => {
        e.preventDefault();

        var ingreso = 0;

        allTrabajos.forEach(trabajo => {
            if (fecha.anio === trabajo.fecha.slice(0, 4)) {
                ingreso += parseInt(trabajo.costo);
            }
        });

        guardarIngresoAnual(ingreso);
    }

    return (
        <Container>
            {window.innerWidth < 850 ? <Nav /> : <Sidebar />}
            <DivClientes>
                <Titulo>Reportes </Titulo>
                <Formulario
                    onSubmit={obtenerReporteMensual}
                >
                    <TituloReporte>Reporte mensual</TituloReporte>
                    <Group>
                        <Input
                            type='month'
                            name='mes'
                            value={mes}
                            onChange={actualizarState}
                        />
                        <GenerarReporte
                            type='submit'
                        >Generar reporte</GenerarReporte>
                    </Group>
                    <ParrafoResultado>Monto: ${ingresoMensual.toLocaleString('de-DE')}</ParrafoResultado>

                </Formulario>

                <Formulario
                    onSubmit={obtenerReporteAnual}
                >
                    <TituloReporte>Reporte anual</TituloReporte>
                    <Group>
                        <Input
                            type='number'
                            name='anio'
                            placeholder="YYYY"
                            min="1900"
                            max="2099"
                            value={anio}
                            onChange={actualizarState}
                        />
                        <GenerarReporte
                            type='submit'
                        >Generar reporte</GenerarReporte>
                    </Group>
                    <ParrafoResultado>Monto: ${ingresoAnual.toLocaleString('de-DE')}</ParrafoResultado>

                </Formulario>
            </DivClientes>
        </Container>
    );
};

export default Reportes;

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

const Formulario = styled.form`
    width:500px;
    display:flex;
    flex-direction:column;
    align-items:center;
    border:1px solid rgba(0,0,0,.5);
    border-radius:40px;
    padding:40px;
    margin-bottom:40px;
    background-color:white;
    box-shadow:0 5px 10px rgba(0,0,0,.1);

    @media (max-width:575px){
        width:100%;
    }
    @media (max-width:430px){
        padding:40px 20px;
    }

`;
const TituloReporte = styled.h2`
    margin-bottom:20px;
    text-align:center;
`;

const Input = styled.input`
    width:45%;
    height:50px;
    padding:0 10px;
    border:1px solid rgba(0,0,0,.5);
    border-radius:5px;
    margin-right:20px;

    @media (max-width:575px){
        margin:0;
        margin-bottom:20px;
        width:100%;
    }
`;

const GenerarReporte = styled.button`
    width:45%;
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
    outline:none;

    :hover{
        background-color:rgba(95,158,160,.9);
    }

    @media (max-width:575px){
        width:100%;
    }
`;

const Group = styled.div`
    display:flex;
    width:100%;
    margin-bottom:20px;

    @media (max-width:575px){
        flex-direction:column;
        align-items:center;
    }
`;

const ParrafoResultado = styled.p`
    margin-bottom:20px;
    font-size:24px;

    @media (max-width:430px){
        font-size:20px;
    }
`;