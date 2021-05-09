import React, { useState, useEffect, useContext } from 'react';
import Sidebar from '../layout/Sidebar'
import Nav from '../layout/Nav'
import styled from 'styled-components'
import AuthContext from '../context/autenticacion/authContext';
import trabajoContext from '../context/trabajos/trabajoContext';
import clienteContext from '../context/clientes/clienteContext';
import ListaTrabajos from './ListaTrabajos'


const ResumenTrabajos = () => {

    // Extaer la informacion de la autenticacion
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado } = authContext;

    const trabajosContext = useContext(trabajoContext);
    const { allTrabajos, obtenerTodosLosTrabajos } = trabajosContext;

    const clientesContext = useContext(clienteContext);
    const { obtenerClientes } = clientesContext;

    const fechaHoy = new Date();
    const Mes = (fechaHoy.getMonth() + 1 < 10) ? '0' + (fechaHoy.getMonth() + 1) : (fechaHoy.getDate() + 1).toString();
    const Anio = fechaHoy.getFullYear().toString();

    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const [fecha, guardarFecha] = useState(
        Anio + '-' + Mes
    );

    const [filtrados, guardarFiltrados] = useState([]);

    useEffect(() => {
        usuarioAutenticado();

        setTimeout(() => {
            obtenerTodosLosTrabajos(usuario);
            obtenerClientes();
            guardarFiltrados(allTrabajos.filter(trabajo => trabajo.fecha.slice(0, 7) === fecha ? trabajo : null));
        }, 2000);

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        guardarFiltrados(allTrabajos.filter(trabajo => trabajo.fecha.slice(0, 7) === fecha ? trabajo : null));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fecha]);

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

    const onChange = (e) => {
        if (e.target.value === '') return;
        guardarFecha(e.target.value);
    }

    return (
        <Container>
            {window.innerWidth < 850 ? <Nav /> : <Sidebar />}
            <DivTrabajos>
                <Titulo>Trabajos de {monthNames[parseInt(fecha.slice(5)) - 1]}: {filtrados.length}</Titulo>
                <DivBarraBtn>
                    <Busqueda>
                        <Input
                            type='month'
                            name='fecha'
                            value={fecha}
                            onChange={onChange}
                        />
                    </Busqueda>
                </DivBarraBtn>

                <DivTabla>
                    <ListaTrabajos
                        filtrados={filtrados}
                    />
                </DivTabla>
            </DivTrabajos>
        </Container>
    );
};

export default ResumenTrabajos;

const Container = styled.div`
    width: 100%;
    min-height:100vh;
    display:flex;
    justify-content:flex-start;

    @media (max-width:850px){
        flex-direction:column;
    }
`;

const DivTrabajos = styled.div`
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
    border-radius:5px;
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


const DivTabla = styled.div`
    overflow: auto;
    width: 100%;

    @media (max-width:760px){
        width:100%;
    }
`;