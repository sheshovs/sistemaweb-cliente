import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <Container>
            <Titulo>Hola Sergio!</Titulo>

            <Separar>
                <Menu>
                    <li><Link to={'/clientes'} className='enlace'>Clientes</Link></li>
                </Menu>


                <Link to={'/'} className='enlace'>Salir</Link>

            </Separar>
        </Container>
    );
};

export default Sidebar;

const Container = styled.div`
    padding: 20px 0;
    width:300px;
    min-height:100vh;
    background-color: cadetblue;
    display:flex;
    flex-direction:column;
    align-items:center;
    box-shadow: 2px 0px 5px rgba(0,0,0,.3);
    position:fixed;
    z-index:1;
`;

const Titulo = styled.h1`
    margin:20px 0;
    color:white;
`;

const Separar = styled.div`
    margin:0 auto;
    width:70%;
    height:calc(100vh - 150px);
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:space-between;
`;

const Menu = styled.ul`
    list-style:none;
`;
