import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Login = () => {

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

    }

    return (
        <Contenedor>
            <DivIzquierdo>
            </DivIzquierdo>
            <DivDerecho>
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
                        <BtnEnviar
                            type='submit'
                        >Ingresar</BtnEnviar>

                        <Link to={'/nueva-cuenta'}>
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
`;
const DivDerecho = styled.div`
    width:55%;
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const BoxForm = styled.div`
    width:50%;
    min-height:450px;
    border: 1px solid rgba(0,0,0,.3);
    border-radius:15px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Titulo = styled.h1`
    font-size:40px;
    margin-bottom:30px;
`;

const Formulario = styled.form`
    width:80%;
    min-height:250px;
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
`;

const Label = styled.label`
    font-size:16px;
`;
const Input = styled.input`
    width:280px;
    height:100%;
    border:none;
    border:1px solid rgba(0,0,0,.3);
    border-radius:5px;
    padding-left:10px;
    font-size:16px;

    :focus{
        outline:none;
    }
`;

const BtnEnviar = styled.button`
    width:100%;
    height:40px;
    border:none;
    border:1px solid rgba(0,0,0,.3);
    border-radius:5px;
    cursor:pointer;
    transition: all .2s ease;

    :hover{
        background-color:cadetblue;
        color:white;
    }
`;