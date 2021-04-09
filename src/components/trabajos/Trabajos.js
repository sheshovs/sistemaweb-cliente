import React, { useContext } from 'react';
import Sidebar from '../../components/layout/Sidebar'
import EditarCliente from '../clientes/EditarCliente';
import NuevoTrabajo from './NuevoTrabajo'
import ListadoTrabajos from './ListadoTrabajos'
import clienteContext from '../context/clientes/clienteContext'
import trabajoContext from '../context/trabajos/trabajoContext'

import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'


const Trabajos = () => {

    const clientesContext = useContext(clienteContext);
    const { popup, clienteActual, handleNuevoCliente, eliminarCliente } = clientesContext;

    const trabajosContext = useContext(trabajoContext);
    const { trabajoscliente } = trabajosContext;

    if (clienteActual === null) return <Redirect to='/clientes' />;

    const [cliente] = clienteActual;

    const { _id, nombre, patente, tel, marca, modelo } = cliente;



    const mostrarPopup = () => {
        handleNuevoCliente(true);
    }

    return (
        <Container>
            {popup ? <EditarCliente /> : null}

            <Sidebar />
            <DivTrabajos>
                <BtnVolver>
                    <Link to={'/clientes'} className='volver'> <i className="fas fa-caret-left"></i> Volver</Link>
                </BtnVolver>
                <DivTitulo>
                    <h1>Cliente: {nombre}</h1>
                    <DivBotones>
                        <BtnNuevoCliente
                            onClick={mostrarPopup}
                        >Editar</BtnNuevoCliente>
                        <BtnEliminar
                            onClick={() => (eliminarCliente(_id))}
                        >
                            <Link to={'/clientes'} className='enlace' >Eliminar</Link>
                        </BtnEliminar>
                    </DivBotones>
                </DivTitulo>
                <DivInfo>
                    <PInfo>
                        <strong>Teléfono:</strong> {tel}
                    </PInfo>
                    <PInfo>
                        <strong>Patente:</strong> {patente}
                    </PInfo>
                    <PInfo>
                        <strong>Marca:</strong> {marca}
                    </PInfo>
                    <PInfo>
                        <strong>Modelo:</strong> {modelo}
                    </PInfo>
                </DivInfo>

                <DivNuevoTrabajo>
                    <NuevoTrabajo />
                </DivNuevoTrabajo>

                {trabajoscliente.length === 0
                    ? <Mensaje>No hay trabajos, comienza agregando uno!</Mensaje>
                    : <ListadoTrabajos />
                }
            </DivTrabajos>
        </Container>

    );
};

export default Trabajos;

const Container = styled.div`
    width: 100%;
    min-height:100vh;
    display:flex;
    justify-content:flex-start;
`;

const DivTrabajos = styled.div`
    width: calc(100% - 300px);
    min-height:100vh;
    padding:50px;
    margin-left:300px;
`;

const DivTitulo = styled.div`
    width:80%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:20px;
`;

const DivBotones = styled.div`
    display:flex;
`;

const BtnNuevoCliente = styled.div`
    width:150px;
    height:50px;
    margin-right:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 20px;
    font-family:'Arial';
    border-radius:5px;
    border:1px solid rgba(0,0,0,.5);
    background-color:cadetblue;
    color:white;
    cursor: pointer;

    :hover{
        background-color:rgba(95,158,160,.9);
    }
`;
const BtnEliminar = styled.button`
    width:150px;
    height:50px;
    background-color:#D34949;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 20px;
    border-radius:5px;
    border:1px solid rgba(0,0,0,.5);
    color:white;
    cursor: pointer;

    :hover{
        background-color:rgba(211, 73, 73 ,.9);
    }
`;

const BtnVolver = styled.div`
    width:100px;
    height:40px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin-bottom:10px;
`;

const DivInfo = styled.div`
    width:50%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:30px;
`;

const PInfo = styled.p`
    font-size:18px;
`;

const DivNuevoTrabajo = styled.div`
    width:80%;
`;

const Mensaje = styled.p`
    font-size:32px;
    font-weight:bold;
`;