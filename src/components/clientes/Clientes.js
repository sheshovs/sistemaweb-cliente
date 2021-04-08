import React, { useState, useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar'
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
    const { clientes, popup, filtrarClientes, obtenerClientes, handleNuevoCliente } = clientesContext;

    const [filtro, guardarFiltro] = useState({
        patente: ''
    });

    const { patente } = filtro;

    useEffect(() => {
        usuarioAutenticado();
    }, []);

    useEffect(() => {

        obtenerClientes();
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
            <Sidebar />
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
                        <Buscar
                            type='button'
                        >Enviar</Buscar>
                    </Busqueda>
                    <BtnNuevoCliente
                        onClick={mostrarPopup}
                    >
                        Nuevo Cliente
                    </BtnNuevoCliente>
                </DivBarraBtn>


                {clientes.length === 0
                    ? <Mensaje>No hay clientes, comienza agregando uno!</Mensaje>
                    : <ListadoClientes />
                }
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
`;

const DivClientes = styled.div`
    width: calc(100% - 300px);
    min-height:100vh;
    padding:50px;
    margin-left:300px;
`;

const Titulo = styled.h1`
    margin-bottom:50px;
`;

const DivBarraBtn = styled.div`
    width:80%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:40px;
`;

const Busqueda = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
`;

const Input = styled.input`
    width:500px;
    height:50px;
    border:none;
    border:1px solid rgba(0,0,0,.3);
    border-radius:5px 0 0 5px;
    padding-left:10px;
    font-size:16px;
    
    :focus{
        outline:none;
        border:1px solid rgba(0,0,0,1);
    }
`;

const Buscar = styled.button`
    width:80px;
    height:50px;
    border:none;
    border: 1px solid rgba(0,0,0,.3);
    border-left:none;
    border-radius:0 5px 5px 0;
    cursor:pointer;

    :focus{
        outline:none;
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
`;

const Mensaje = styled.p`
    font-size:32px;
    font-weight:bold;
`;