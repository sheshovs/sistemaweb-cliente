import React, { Fragment, useContext, useState } from 'react';
import styled from 'styled-components'
import ingresoContext from '../context/ingresos/ingresoContext'
import AuthContext from '../context/autenticacion/authContext';

const EditarIngreso = () => {

    const authContext = useContext(AuthContext);
    const { usuario } = authContext;

    const ingresosContext = useContext(ingresoContext);
    const { ingresoActual, handleEditarIngreso, actualizarIngreso, obtenerIngresos } = ingresosContext;

    const [ingresoA] = ingresoActual;

    const [ingreso, guardarIngreso] = useState({
        _id: ingresoA._id,
        descripcion: ingresoA.descripcion,
        monto: ingresoA.monto,
        fecha: ingresoA.fecha.slice(0, 10),
        creador: ingresoA.creador
    })

    const { descripcion, monto, fecha } = ingreso;

    const onChange = (e) => {
        guardarIngreso({
            ...ingreso,
            [e.target.name]: e.target.value
        })
    }

    const cerrarPopup = () => {
        handleEditarIngreso(false);
    }

    const onSubmitForm = e => {
        e.preventDefault();

        //validar que no esten los campos vacios
        if (descripcion.trim() === '' || monto === 0) {
            return;
        }

        //actualizar ingreso
        actualizarIngreso(ingreso);
        obtenerIngresos(usuario._id);
    }

    return (
        <Fragment>
            <Fondo onClick={cerrarPopup} ></Fondo>
            <Container>
                <DivClientes>
                    <Titulo>Editar ingreso</Titulo>
                    <Formulario
                        onSubmit={onSubmitForm}
                    >
                        <FormGroup2>
                            <FormGroup>
                                <Label htmlFor="descripcion">Descripción:</Label>
                                <Input
                                    type='text'
                                    name='descripcion'
                                    id='descripcion'
                                    placeholder='Ingrese descripcion'
                                    onChange={onChange}
                                    value={descripcion}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="monto">Monto:</Label>
                                <Input
                                    type='number'
                                    name='monto'
                                    id='monto'
                                    placeholder='Ingrese monto'
                                    onChange={onChange}
                                    value={monto}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="fecha">Fecha:</Label>
                                <Input
                                    type='date'
                                    name='fecha'
                                    id='fecha'
                                    onChange={onChange}
                                    value={fecha}
                                />
                            </FormGroup>
                        </FormGroup2>

                        <FormGroup2>
                            <BtnEnviar
                                type='submit'
                            >
                                Actualizar ingreso
                            </BtnEnviar>
                            <BtnCancelar
                                type='button'
                                onClick={cerrarPopup}
                            >
                                Cerrar
                            </BtnCancelar>
                        </FormGroup2>
                    </Formulario>
                </DivClientes>

            </Container>
        </Fragment>
    );
};

export default EditarIngreso;

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
    overflow:hidden;

    @media (max-width:768px){
        transform:translate(-50%,-50%);
    }
`;

const DivClientes = styled.div`
    width:100%;
    background-color:white;
    min-height:500px;
    padding:50px;
    border-radius:30px;
    display:flex;
    flex-direction:column;
    align-items:center;

    @media (max-width:768px){
        padding:40px;
    }
    @media (max-width:400px){
        padding:30px;
    }

`;

const Titulo = styled.h1`
    margin-bottom:50px;

    @media (max-width:768px){
        margin-bottom:10px;
        text-align:center;
    }
    @media (max-width:400px){
        font-size:26px;
    }
`;

const Formulario = styled.form`
    width:100%;
    display: flex;
    flex-direction:column;
    align-items:center;

`;
const FormGroup = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:40px;
    width: 100%;

    @media (max-width:768px){
        margin-bottom:20px;
    }
`;

const FormGroup2 = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    margin:0 20px;

    :nth-child(1){
        flex-direction:column;
        align-items:center;
    }
    
    @media (max-width:768px){
        flex-direction:column;
        align-items:center;
    }
`;

const Label = styled.label`
    font-size:20px;
    margin-bottom:10px;
    align-self:flex-start;

    @media (max-width:768px){
        font-size:16px;
        margin-bottom:5px;
    }
`;

const Input = styled.input`
    width:100%;
    height:50px;
    border:none;
    border:1px solid rgba(0,0,0,.3);
    border-radius:5px;
    padding-left:10px;
    font-size:16px;
    margin:0 50px;

    :focus{
        outline:none;
        border:1px solid rgba(0,0,0,1);
    }

    
    @media (max-width:768px){
        font-size:14px;
    }

    @media (max-width:400px){
        margin:0 20px;
    }
`;

const BtnEnviar = styled.button`
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
        font-size:16px;
        width:60%;
    }
`;

const BtnCancelar = styled.button`
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