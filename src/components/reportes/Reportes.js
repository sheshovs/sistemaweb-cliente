import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components'
import Sidebar from '../layout/Sidebar'
import Nav from '../layout/Nav'
import AuthContext from '../context/autenticacion/authContext';

const Reportes = () => {

    // Extaer la informacion de la autenticacion
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();

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


    return (
        <Container>
            {window.innerWidth < 850 ? <Nav /> : <Sidebar />}
            <DivClientes>
                <Titulo>PÁGINA EN CONSTRUCCIÓN </Titulo>


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