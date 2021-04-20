import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import alertaContext from '../context/alertas/alertaContext'
import AuthContext from '../context/autenticacion/authContext'
import Spinner from '../Spinner.js'

const Login = props => {

    //extraer los valores del context
    const alertasContext = useContext(alertaContext);
    const { alerta, mostrarAlerta } = alertasContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, iniciarSesion } = authContext;

    const [cargando, guardarCargando] = useState(false);

    useEffect(() => {
        if (autenticado) {
            props.history.push('/clientes');
        }

        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
            guardarCargando(false);
        }
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history]);

    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        //validar que no haya campos vacios
        if (email.trim() === '' || password.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        guardarCargando(true);

        //pasarlo al action
        iniciarSesion({ email, password });

        setTimeout(() => {
            guardarCargando(false);
        }, 10000);
    }

    return (
        <Contenedor>
            <DivIzquierdo>
            </DivIzquierdo>
            <DivDerecho>
                {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
                <BoxForm>
                    <Titulo>Iniciar Sesión</Titulo>
                    <Formulario
                        onSubmit={handleSubmit}
                    >
                        <GroupForm>
                            <Label
                                htmlFor='email'
                            >Email</Label>
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
                            >Contraseña</Label>
                            <Input
                                type='password'
                                id='password'
                                name='password'
                                placeholder='******'
                                onChange={onChange}
                                value={password}
                            />
                        </GroupForm>

                        {cargando ? <Spinner /> : null}

                        <BtnEnviar
                            type='submit'
                        >Ingresar</BtnEnviar>

                        <Link to={'/nueva-cuenta'} className='azul'>
                            Registrarse
                        </Link>
                    </Formulario>
                </BoxForm>
            </DivDerecho>
        </Contenedor>
    );
};

export default Login;

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
    width:60%;
    border: 1px solid rgba(0,0,0,.3);
    border-radius:15px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:#fff;
    padding:50px 30px;

    @media (max-width:1080px){
        width:80%;
    }

    @media (max-width:768px){
        width:60%;
    }

    @media (max-width:575px){
        width:90%;
        padding:50px 0px;
    }
`;
const Titulo = styled.h1`
    font-size:40px;
    margin-bottom:30px;
    font-family: 'Raleway', sans-serif;

    @media (max-width:768px){
        font-size:32px;
        margin-bottom:15px;
        text-align:center;
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
    margin-bottom:20px;

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
        margin-bottom:10px;
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
    background-color:cadetblue;
    color:white;
    transition: all .2s ease;
    outline:none;
    margin-bottom:20px;

    :hover{
        background-color:rgb(122, 201, 204);
    }

`;