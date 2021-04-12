import React, { useContext } from 'react';
import styled from 'styled-components'
import trabajoContext from '../context/trabajos/trabajoContext'

const Trabajo = ({ trabajo }) => {

    const trabajosContext = useContext(trabajoContext);
    const { obtenerTrabajoActual, handleConfirmacionT, estadoEditar } = trabajosContext;

    const { descripcion, kilometraje, fecha } = trabajo;

    const selectTrabajo = () => {
        obtenerTrabajoActual(trabajo._id);
        estadoEditar(true);
    }

    const mostrarPopupConfirmacion = () => {
        handleConfirmacionT(true);
        obtenerTrabajoActual(trabajo._id);
        estadoEditar(false);
    }

    return (

        <Container>
            <DivInfo>{descripcion}</DivInfo>
            <DivInfo>{kilometraje}</DivInfo>
            <DivInfo>{fecha.substr(8, 2) + '-' + fecha.substr(5, 2) + '-' + fecha.substr(0, 4)}</DivInfo>
            <DivAcciones>
                <DivEditar
                    onClick={selectTrabajo}
                ><i className="fas fa-edit"></i></DivEditar>
                <DivEliminar
                    onClick={mostrarPopupConfirmacion}
                ><i className="fas fa-trash-alt"></i></DivEliminar>
            </DivAcciones>
        </Container>

    );
};

export default Trabajo;

const Container = styled.div`
    width: 100%;
    min-height:100px;
    border: 1px solid rgba(0,0,0,.1);
    border-top:none;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`;

const DivInfo = styled.p`
    width:40%;
    height:100%;
    border-right: 1px solid rgba(0,0,0,.1);
    display:flex;
    justify-content:flex-start;
    align-items:center;
    padding:20px;
    white-space:pre-wrap;

    :nth-child(2){
        justify-content:center;
        width:20%;
    }
    :nth-child(3){
        justify-content:center;
        width:20%;
    }

    @media (max-width:675px){
        padding:10px;
    }
`;

const DivAcciones = styled.div`
    width:20%;
    height:100%;
    padding:10px;
    display:flex;
    justify-content:space-around;
    align-items:center;

    @media (max-width:400px){
        flex-direction:column;
    }
`;
const DivEditar = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:24px;
    cursor: pointer;
`;
const DivEliminar = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:24px;
    cursor: pointer;
`;