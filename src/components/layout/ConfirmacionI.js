import React, { Fragment, useContext } from 'react';
import styled from 'styled-components'

import ingresoContext from '../context/ingresos/ingresoContext'
import AuthContext from '../context/autenticacion/authContext'

const ConfirmacionTrabajo = () => {

    const authContext = useContext(AuthContext);
    const { usuario } = authContext;

    const ingresosContext = useContext(ingresoContext);
    const { ingresoActual, handleConfirmacionI, eliminarIngreso, obtenerIngresos } = ingresosContext;

    const [ingreso] = ingresoActual;

    const cerrarPopup = () => {
        handleConfirmacionI(false);
    }

    const deleteTrabajo = () => {
        eliminarIngreso(ingreso._id)
        obtenerIngresos(usuario._id);
    }

    return (
        <Fragment>
            <Fondo onClick={cerrarPopup}></Fondo>
            <Container>
                <DivClientes>
                    <Titulo>¿Está seguro que desea eliminar este ingreso?</Titulo>
                    <FormGroup2>
                        <BtnEliminar
                            onClick={deleteTrabajo}
                        >
                            Eliminar
                        </BtnEliminar>
                        <BtnCancelar
                            type='button'
                            onClick={cerrarPopup}
                        >
                            Cancelar
                            </BtnCancelar>
                    </FormGroup2>
                </DivClientes>

            </Container>
        </Fragment>
    );
};

export default ConfirmacionTrabajo;

const Fondo = styled.div`
    position:fixed;
    width: 100%;
    min-height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:rgba(0,0,0,.5);
    z-index:2;
`;

const Container = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    z-index:3;

    @media (max-width:768px){
        transform:translate(-50%,-50%);
    }
`;

const DivClientes = styled.div`
    width:100%;
    background-color:white;
    min-height:200px;
    padding:50px;
    border-radius:30px;
    display:flex;
    flex-direction:column;
    align-items:center;

    @media (max-width:768px){
        overflow-y:scroll;
        padding:30px;
        width:500px;
    }
    @media (max-width:550px){
        width:400px;
    }
    @media (max-width:430px){
        width:300px;
    }
`;

const Titulo = styled.h1`
    margin-bottom:50px;
    text-align:center;

    @media (max-width:768px){
        margin-bottom:10px;
        font-size:24px;
    }
`;

const FormGroup2 = styled.div`
    width:100%;
    display:flex;
    justify-content:space-evenly;
    margin:0 20px;
    
    @media (max-width:768px){
        flex-direction:column;
        align-items:center;

        :nth-child(4){
            flex-direction:row;
        }
    }
`;

const BtnCancelar = styled.button`
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

    @media (max-width:768px){
        margin-top:10px;
        height:40px;
        font-size:16px;
        width:45%;
    }
`;

const BtnEliminar = styled.button`
    width:200px;
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

    @media (max-width:768px){
        margin-top:10px;
        height:40px;
        font-size:16px;
        width:45%;
    }
`;