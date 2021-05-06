import React, { useContext } from 'react';
import styled from 'styled-components'
import ingresoContext from '../context/ingresos/ingresoContext'

const Ingreso = ({ ingreso }) => {

    const ingresosContext = useContext(ingresoContext);
    const { handleConfirmacionI, obtenerIngresoActual, handleEditarIngreso } = ingresosContext;

    const { descripcion, monto, fecha } = ingreso;

    const selectIngreso = () => {
        obtenerIngresoActual(ingreso._id);
        handleEditarIngreso(true);
    }

    const mostrarPopupConfirmacion = () => {
        handleConfirmacionI(true);
        obtenerIngresoActual(ingreso._id);
    }

    return (
        <Container>
            <DivInfo>{descripcion}</DivInfo>
            <DivInfo>{monto ? monto.toLocaleString('de-DE') : null}</DivInfo>
            <DivInfo>{fecha.substr(8, 2) + '-' + fecha.substr(5, 2) + '-' + fecha.substr(0, 4)}</DivInfo>
            <DivAcciones>
                <DivEditar
                    onClick={selectIngreso}
                ><i className="fas fa-edit"></i></DivEditar>
                <DivEliminar
                    onClick={mostrarPopupConfirmacion}
                ><i className="fas fa-trash-alt"></i></DivEliminar>
            </DivAcciones>
        </Container>
    );
};

export default Ingreso;

const Container = styled.tr`
    width: 100%;
    min-height:90px;
    border: 1px solid rgba(0,0,0,.1);
    border-top:none;
    display:flex;
    justify-content:center;
    align-items:center;
    
    :nth-child(2n){
        background-color:#eee;
    }
`;

const DivInfo = styled.td`
    width:40%;
    height:100%;
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
        text-align:center;
        width:20%;
    }

    @media (max-width:675px){
        padding:10px;
    }
`;

const DivAcciones = styled.td`
    width:20%;
    height:100%;
    padding:10px;
    display:flex;
    justify-content:space-around;
    align-items:center;
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