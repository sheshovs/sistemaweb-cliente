import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import alertaContext from '../context/alertas/alertaContext'
import AuthContext from '../context/autenticacion/authContext'

const NuevaCuenta = (props) => {

    //extraer los valores del context
    const alertasContext = useContext(alertaContext);
    const { alerta, mostrarAlerta } = alertasContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, registrarUsuario } = authContext;

    // en caso de que el usuario se haya autenticado o registrado o sea un registro duplicado
    useEffect(() => {
        if (autenticado) {
            props.history.push('/clientes');
        }
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history]);

    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    const { nombre, email, password, confirmar } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        // validar que no haya campos vacios
        if (nombre.trim() === '' || email.trim() === '' || password.trim() === '' ||
            confirmar.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        // password minimo de 6 caracteres
        if (password.length < 6) {
            mostrarAlerta('La contraseña debe ser de al menos 6 caracteres', 'alerta-error');
            return;
        }

        // los 2 passwords son iguales
        if (password !== confirmar) {
            mostrarAlerta('Las contraseñas no coinciden', 'alerta-error');
            return;
        }

        // pasarlo al action
        registrarUsuario({
            nombre,
            email,
            password
        });
    }


    return (
        <Contenedor>
            <DivIzquierdo>
            </DivIzquierdo>
            <DivDerecho>
                {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
                <BoxForm>
                    <Titulo>Obtener una cuenta</Titulo>
                    <Formulario
                        onSubmit={handleSubmit}
                    >
                        <GroupForm>
                            <Label
                                htmlFor='nombre'
                            >
                                Nombre
                            </Label>
                            <Input
                                type='text'
                                id='nombre'
                                name='nombre'
                                placeholder='Juanito Pérez'
                                onChange={onChange}
                                value={nombre}
                            />
                        </GroupForm>
                        <GroupForm>
                            <Label
                                htmlFor='email'
                            >
                                Email
                            </Label>
                            <Input
                                type='text'
                                id='email'
                                name='email'
                                placeholder='correo@correo.com'
                                onChange={onChange}
                                value={email}
                            />
                        </GroupForm>
                        <GroupForm>
                            <Label
                                htmlFor='password'
                            >
                                Contraseña
                            </Label>
                            <Input
                                type='password'
                                id='password'
                                name='password'
                                placeholder='******'
                                onChange={onChange}
                                value={password}
                            />
                        </GroupForm>
                        <GroupForm>
                            <Label
                                htmlFor='confirmar'
                            >
                                Confirmar Contraseña
                            </Label>
                            <Input
                                type='password'
                                id='confirmar'
                                name='confirmar'
                                placeholder='******'
                                onChange={onChange}
                                value={confirmar}
                            />
                        </GroupForm>
                        <BtnEnviar
                            type='submit'
                            disabled
                        >Crear usuario</BtnEnviar>

                        <Link to={'/'} className='azul'>
                            Iniciar Sesión
                        </Link>
                    </Formulario>
                </BoxForm>
            </DivDerecho>
        </Contenedor>
    );
};

export default NuevaCuenta;

const Contenedor = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
`;

const DivIzquierdo = styled.div`
    width:45%;
    min-height:100vh;
    background-color: cadetblue;

    @media (max-width:768px){
        width:0;
    }
`;
const DivDerecho = styled.div`
    width:55%;
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#f0f0f0;

    @media (max-width:768px){
        width:100%;
    }
`;

const BoxForm = styled.div`
    width:50%;
    border: 1px solid rgba(0,0,0,.3);
    border-radius:15px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:#fff;
    padding:40px 20px;

    @media (max-width:1600px){
        width:80%;
    }

    @media (max-width:768px){
        width:60%;
    }

    @media (max-width:575px){
        width:90%;
        padding:40px 0px;
    }
`;
const Titulo = styled.h1`
    font-size:40px;
    margin-bottom:20px;
    font-family: 'Raleway', sans-serif;
    text-align:center;

    @media (max-width:500px){
        font-size:32px;
    }
`;

const Formulario = styled.form`
    width:80%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
`;

const GroupForm = styled.div`
    width:100%;
    height:40px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom:10px;

    @media (max-width:1080px){
        height:70px;
        flex-direction:column;
        align-items:flex-start;
        justify-content:space-around;
    }
`;

const Label = styled.label`
    font-size:16px;
    width:30%;

    @media (max-width:1080px){
        width:100%;
    }
`;
const Input = styled.input`
    width:70%;
    height:100%;
    border:none;
    border:1px solid rgba(0,0,0,.3);
    border-radius:5px;
    padding-left:10px;
    font-size:16px;

    :focus{
        outline:none;
    }

    @media (max-width:1080px){
        width:100%;
    }
`;

const BtnEnviar = styled.button`
    width:100%;
    height:50px;
    border:none;
    border:1px solid rgba(0,0,0,.3);
    border-radius:5px;
    cursor:pointer;
    text-transform:uppercase;
    letter-spacing:1px;
    font-size:16px;
    font-weight:bold;
    font-family:'Roboto', sans-serif;
    /* background-color:cadetblue; */
    background-color:#cfcfcf;
    color:white;
    margin:20px 0;
    transition: all .2s ease;

    :hover{
        /* background-color:rgb(122, 201, 204); */
    }
`;