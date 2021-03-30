import React from 'react';
import Sidebar from '../layout/Sidebar'
import ListadoClientes from './ListadoClientes'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Clientes = () => {
    return (
        <Container>
            <Sidebar />
            <DivClientes>
                <Titulo>Clientes</Titulo>
                <DivBarraBtn>
                    <Busqueda>
                        <Input
                            type='text'
                            placeholder='Buscar patente'
                            name='patente'
                        />
                        <Buscar
                            type='button'
                        >Enviar</Buscar>
                    </Busqueda>
                    <BtnNuevoCliente>
                        <Link to={'/nuevo-cliente'} className='enlace'>Nuevo Cliente</Link>
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
`;

const DivClientes = styled.div`
    width: calc(100% - 300px);
    min-height:100vh;
    padding:50px;
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
    background-color:cadetblue;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:5px;
`;