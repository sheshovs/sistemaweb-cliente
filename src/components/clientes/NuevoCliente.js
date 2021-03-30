import React from 'react';
import Sidebar from '../layout/Sidebar'
import styled from 'styled-components'

const NuevoCliente = () => {
    return (
        <Container>
            <Sidebar />

            <DivClientes>
                <Titulo>Agregar nuevo cliente</Titulo>
                <Formulario>
                    <FormGroup>
                        <Label htmlFor="nombre">Nombre:</Label>
                        <Input
                            type='text'
                            name='nombre'
                            id='nombre'
                            placeholder='Ingrese nombre del cliente'
                        />
                    </FormGroup>
                    <FormGroup2>
                        <FormGroup>
                            <Label htmlFor="patente">Patente:</Label>
                            <Input
                                type='text'
                                name='patente'
                                id='patente'
                                placeholder='Ingrese patente del vehiculo'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="tel">Teléfono:</Label>
                            <Input
                                type='text'
                                name='tel'
                                id='tel'
                                placeholder='Ingrese el teléfono del cliente'
                            />
                        </FormGroup>
                    </FormGroup2>
                    <FormGroup2>
                        <FormGroup>
                            <Label htmlFor="marca">Marca:</Label>
                            <Input
                                type='text'
                                name='marca'
                                id='marca'
                                placeholder='Ingrese marca del vehiculo'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="modelo">Modelo:</Label>
                            <Input
                                type='text'
                                name='modelo'
                                id='modelo'
                                placeholder='Ingrese el modelo del cliente'
                            />
                        </FormGroup>
                    </FormGroup2>
                    <BtnEnviar
                        type='submit'
                    >
                        Agregar cliente
                    </BtnEnviar>
                </Formulario>
            </DivClientes>

        </Container>

    );
};

export default NuevoCliente;

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

const Formulario = styled.form`
    width:80%;
    display: flex;
    flex-direction:column;
    align-items:flex-start;
`;
const FormGroup = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin-bottom:40px;
`;

const FormGroup2 = styled.div`
    width:100%;
    display:flex;
`;

const Label = styled.label`
    font-size:20px;
    margin-bottom:10px;
`;

const Input = styled.input`
    width:500px;
    height:50px;
    border:none;
    border:1px solid rgba(0,0,0,.3);
    border-radius:5px;
    padding-left:10px;
    font-size:16px;
    
    :focus{
        outline:none;
        border:1px solid rgba(0,0,0,1);
    }
`;

const BtnEnviar = styled.button`
    width:200px;
    height:50px;
    background-color:cadetblue;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    font-size:20px;
    border:none;
    border-radius:5px;
    cursor: pointer;

    :hover{
        text-decoration:underline;
    }
`;