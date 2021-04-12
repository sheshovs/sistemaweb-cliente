import React, { Fragment, useState, useContext } from 'react';
import clienteContext from '../context/clientes/clienteContext'
import styled from 'styled-components'

const NuevoCliente = () => {


    // Extraer clientes de state inicial
    const clientesContext = useContext(clienteContext);
    const { agregarCliente, handleNuevoCliente, obtenerClientes } = clientesContext;

    const [cliente, guardarCliente] = useState({
        nombre: '',
        patente: '',
        tel: '',
        marca: '',
        modelo: '',
        anio: ''
    });

    const { nombre, patente, tel, marca, modelo, anio } = cliente;

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
            marca.trim() === '' || modelo.trim() === '' || anio.trim() === '') {
            return;
        }

        //enviar los datos al action
        agregarCliente(cliente);
        obtenerClientes();
        guardarCliente({
            nombre: '',
            patente: '',
            tel: '',
            marca: '',
            modelo: '',
            anio: ''
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
                        <FormGroup2>
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
                                    placeholder='Ingrese el modelo del vehiculo'
                                    onChange={onChange}
                                    value={modelo}
                                />
                            </FormGroup>
                        </FormGroup2>
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
                                <Label htmlFor="anio">Año:</Label>
                                <Input
                                    type='number'
                                    name='anio'
                                    id='anio'
                                    placeholder='Ingrese el año del vehiculo'
                                    onChange={onChange}
                                    value={anio}
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
        overflow-y:scroll;
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

    @media (max-width:768px){
        align-items:center;
    }
`;
const FormGroup = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin-bottom:40px;

    @media (max-width:768px){
        margin-bottom:5px;
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

const Label = styled.label`
    font-size:20px;
    margin-bottom:10px;

    @media (max-width:768px){
        font-size:16px;
        margin-bottom:5px;
    }
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

    @media (max-width:1300px){
        width:350px;
    }
    @media (max-width:992px){
        width:250px;
    }
    @media (max-width:768px){
        width:350px;
        height:35px;
        font-size:14px;
    }
    @media (max-width:485px){
        width:250px;
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
        height:40px;
        font-size:16px;
        width:45%;
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