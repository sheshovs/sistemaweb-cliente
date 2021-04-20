import React, { useContext, useEffect } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AuthContext from '../context/autenticacion/authContext';

const Sidebar = () => {

    // Extaer la informacion de la autenticacion
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

    useEffect(() => {
        usuarioAutenticado();

        // eslint-disable-next-line
    }, []);

    return (
        <Container>
            <Titulo>Hola {usuario ? usuario.nombre : null}</Titulo>

            <Separar>
                <ItemsMenu>
                    <Link to={'/clientes'} className='enlace-nav'><IconItem className="fas fa-users"></IconItem> Clientes</Link>
                    <Link to={'/reportes'} className='enlace-nav'><IconItem className="fas fa-file-invoice-dollar"></IconItem> Reportes</Link>
                </ItemsMenu>
                <BtnExit
                    onClick={() => cerrarSesion()}
                    className='enlace-nav'
                ><IconItem className="fas fa-sign-out-alt"></IconItem> Salir</BtnExit>
            </Separar>
        </Container>
    );
};

export default Sidebar;

const Container = styled.div`
    padding: 20px;
    width:250px;
    min-height:100vh;
    background-color: cadetblue;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-end;

    box-shadow: 2px 0px 5px rgba(0,0,0,.3);
    position:fixed;
    z-index:1;
`;

const Titulo = styled.h1`
    margin:20px 0;
    color:white;
    text-align:center;
`;

const Separar = styled.div`
    margin:0 auto;
    padding:20px 0;
    width:70%;
    height:calc(100vh - 150px);
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:space-between;
`;

const ItemsMenu = styled.div`
    display:flex;
    flex-direction:column;
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

    :hover{
        text-shadow: 0 0 10px rgba(255,255,255,.5);
    }
`;