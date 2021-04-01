import React, { useState } from 'react';

import styled from 'styled-components'

const NuevoTrabajo = () => {


    const [trabajo, guardarTrabajo] = useState({
        descripcion: '',
        kilometraje: '',
        fecha: new Date().toISOString().slice(0, 10)
    });


    const { descripcion, kilometraje, fecha } = trabajo;

    const onChange = e => {
        guardarTrabajo({
            ...trabajo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

    }

    return (
        <FormTrabajos
            onSubmit={handleSubmit}
        >
            <Input
                type='text'
                placeholder='Ingrese trabajo'
                name='descripcion'
                id='descripcion'
                onChange={onChange}
                value={descripcion}
            />
            <Input
                type='text'
                placeholder='Ingrese kilometraje'
                name='kilometraje'
                id='kilometraje'
                onChange={onChange}
                value={kilometraje}
            />
            <Input
                type='date'
                name='fecha'
                id='fecha'
                onChange={onChange}
                value={fecha}
            />
            <BtnAgregar
                type='submit'
            >
                Agregar trabajo
            </BtnAgregar>
        </FormTrabajos>
    );
};

export default NuevoTrabajo;

const FormTrabajos = styled.form`
    width:100%;
    display:flex;
    justify-content: flex-start;
    align-items:center;
    margin-bottom:20px;
`;

const Input = styled.input`
    width:500px;
    height:50px;
    border:none;
    border:1px solid rgba(0,0,0,.3);
    border-radius:5px;
    padding-left:10px;
    font-size:16px;
    margin-right:20px;
    
    :focus{
        outline:none;
    }

    :nth-child(2){
        width:160px;
    }
    :nth-child(3){
        width:160px;
    }
`;

const BtnAgregar = styled.button`
    width:170px;
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
`;