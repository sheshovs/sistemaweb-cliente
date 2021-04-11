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
                <Link to={'/clientes'} className='enlace'><i className="fas fa-users"></i> Clientes</Link>
                <BtnExit
                    onClick={() => cerrarSesion()}
                ><i className="fas fa-sign-out-alt"></i> Salir</BtnExit>
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