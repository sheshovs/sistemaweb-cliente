import React, { Fragment, useState, useContext } from 'react';
import clienteContext from '../context/clientes/clienteContext'
import styled from 'styled-components'

const NuevoCliente = () => {


    // Extraer clientes de state inicial
    const clientesContext = useContext(clienteContext);
    const { agregarCliente, handleNuevoCliente } = clientesContext;

    const [cliente, guardarCliente] = useState({
        nombre: '',
        patente: '',
        tel: '',
        marca: '',
        modelo: '',
    });

    const { nombre, patente, tel, marca, modelo } = cliente;

    const onChange = (e) => {
        guardarCliente({
            ...cliente,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitForm = e => {
        e.preventDefault();

        //validar campos vacios
        if (nombre.trim() === '' || patente.trim() === '' || tel.trim() === '' ||
            marca.trim() === '' || modelo.trim() === '') {
            return;
        }

        //enviar los datos al action
        agregarCliente(cliente);
        guardarCliente({
            nombre: '',
            patente: '',
            tel: '',
            marca: '',
            modelo: '',
        });
    }

    const cerrarPopup = () => {
        handleNuevoCliente(false);
    }

    return (
        <Fragment>
            <Fondo onClick={cerrarPopup}></Fondo>
            <Container>
                <DivClientes>
                    <Titulo>Agregar nuevo cliente</Titulo>
                    <Formulario
                        onSubmit={onSubmitForm}
                    >
                        <FormGroup>
                            <Label htmlFor="nombre">Nombre:</Label>
                            <Input
                                type='text'
                                name='nombre'
                                id='nombre'
                                placeholder='Ingrese nombre del cliente'
                                onChange={onChange}
                                value={nombre}
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
                                    onChange={onChange}
                                    value={patente}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="tel">Teléfono:</Label>
                                <Input
                                    type='text'
                                    name='tel'
                                    id='tel'
                                    placeholder='Ingrese el teléfono del cliente'
                                    onChange={onChange}
                                    value={tel}
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
                                    onChange={onChange}
                                    value={marca}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="modelo">Modelo:</Label>
                                <Input
                                    type='text'
                                    name='modelo'
                                    id='modelo'
                                    placeholder='Ingrese el modelo del cliente'
                                    onChange={onChange}
                                    value={modelo}
                                />
                            </FormGroup>
                        </FormGroup2>
                        <FormGroup2>
                            <BtnEnviar
                                type='submit'
                            >
                                Agregar cliente
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

export default NuevoCliente;

const Fondo = styled.div`
    position:absolute;
    width: 100%;
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:rgba(0,0,0,.5);
`;

const Container = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
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
`;

const Titulo = styled.h1`
    margin-bottom:50px;
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
    align-items:flex-start;
    margin-bottom:40px;
`;

const FormGroup2 = styled.div`
    width:100%;
    display:flex;
    justify-content:space-evenly;
    margin:0 20px;
`;

const Label = styled.label`
    font-size:20px;
    margin-bottom:10px;
`;

const Input = styled.input`
    width:450px;
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

const BtnCancelar = styled.button`
    width:200px;
    height:50px;
    background-color:#D34949;
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