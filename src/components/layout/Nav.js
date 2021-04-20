import React, { useContext, useEffect } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AuthContext from '../context/autenticacion/authContext';

const Nav = () => {

    // Extaer la informacion de la autenticacion
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

    useEffect(() => {
        usuarioAutenticado();

        // eslint-disable-next-line
    }, []);

    const handleMenu = () => {
        const containerNav = document.querySelector('#container-nav');
        const Nav = document.querySelector('#nav');

        containerNav.classList.toggle("open");
        Nav.classList.toggle("menu-open");
    }

    return (
        <Container id='container-nav'>
            <Head>
                <Icon className="fas fa-bars" onClick={handleMenu}></Icon>
                <DivTitulo>
                    <Titulo>Hola {usuario ? usuario.nombre : null}</Titulo>
                </DivTitulo>

            </Head>
            <Menu id='nav'>
                <Link to={'/clientes'} className='enlace-nav'><IconItem className="fas fa-users"></IconItem> Clientes</Link>
                <Link to={'/reportes'} className='enlace-nav'><IconItem className="fas fa-file-invoice-dollar"></IconItem> Reportes</Link>
                <BtnExit
                    onClick={() => cerrarSesion()}
                    className='enlace-nav'
                ><IconItem className="fas fa-sign-out-alt"></IconItem> Salir</BtnExit>
            </Menu>
        </Container>
    );
};

export default Nav;

const Container = styled.div`
    width:100%;
    height:80px;
    background-color:cadetblue;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    flex-direction:column;
    box-shadow: 0 2px 5px rgba(0,0,0,.3);

    transition:height .2s ease;
`;

const Head = styled.div`
    margin-top:20px;
    width:80%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

const Icon = styled.i`
    font-size:30px;
    color:white;
    border-radius:5px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
`;
const DivTitulo = styled.div`
    width:90%;
    padding:0 10px;
`;
const Titulo = styled.h1`
    color:white;
    text-align:center;

    @media (max-width:575px){
        font-size:26px;
    }
`;
const Menu = styled.div`
    width:80%;
    height:60px;
    margin-top:30px;
    flex-direction:column;
    align-items:flex-start;
    justify-content:space-between;
    display:none;
`;

const IconItem = styled.i`
    padding:0 5px;
    margin-right:5px;
    width: 30px;
    height: 30px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const BtnExit = styled.button`
    background:none;
    border:none;
    outline:none;
    cursor:pointer;
    color: white;
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

    :hover{
        text-shadow: 0 0 10px rgba(255,255,255,.5);
    }
`;