import React, { useState, useContext, useEffect } from 'react';
import trabajoContext from '../context/trabajos/trabajoContext'
import clienteContext from '../context/clientes/clienteContext'

import styled from 'styled-components'

const NuevoTrabajo = () => {

    const clientesContext = useContext(clienteContext);
    const { clienteActual } = clientesContext;

    const [clienteA] = clienteActual;

    const trabajosContext = useContext(trabajoContext);
    const { trabajoActual, agregarTrabajo, editarTrabajo, obtenerTrabajos } = trabajosContext;


    const [trabajo, guardarTrabajo] = useState({
        descripcion: '',
        kilometraje: '',
        fecha: new Date().toISOString().slice(0, 10),
        cliente: clienteA._id
    });


    const { descripcion, kilometraje, fecha } = trabajo;

    useEffect(() => {

        if (trabajoActual) {
            const [trabajoA] = trabajoActual;

            guardarTrabajo({
                _id: trabajoA._id,
                descripcion: trabajoA.descripcion,
                kilometraje: trabajoA.kilometraje,
                fecha: trabajoA.fecha.slice(0, 10),
                cliente: trabajoA.cliente
            });
        }

    }, [trabajoActual]);


    const onChange = e => {
        guardarTrabajo({
            ...trabajo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (descripcion.trim() === '' || kilometraje.trim() === '') {
            return;
        }

        if (trabajoActual === null) {
            agregarTrabajo(trabajo);

        } else {
            editarTrabajo(trabajo);
        }


        guardarTrabajo({
            descripcion: '',
            kilometraje: '',
            fecha: new Date().toISOString().slice(0, 10),
            cliente: clienteA._id
        });
        setTimeout(() => {
            obtenerTrabajos(clienteA._id);
        }, 500);
    }

    return (
        <FormTrabajos
            onSubmit={handleSubmit}
        >
            <TextArea
                placeholder='Ingrese trabajo'
                name='descripcion'
                id='descripcion'
                onChange={onChange}
                value={descripcion}
            ></TextArea>
            <Input
                type='text'
                placeholder='Kilometraje'
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
                {trabajoActual
                    ? (window.innerWidth < 1300
                        ? <i className="fas fa-edit"></i>
                        : ('Editar trabajo'))

                    : (window.innerWidth < 1300
                        ? <i className="fas fa-plus"></i>
                        : ('Agregar trabajo'))}

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
    margin-bottom:30px;

    @media (max-width:675px){
        flex-wrap:wrap;
        justify-content:space-around;
    }

    @media (max-width:500px){
        justify-content:space-between;
    }
`;

const TextArea = styled.textarea`
    width:45%;
    height:50px;
    border:none;
    border:1px solid rgba(0,0,0,.3);
    border-radius:5px;
    padding:10px;
    font-size:16px;
    margin-right:20px;
    resize:none;

    @media (max-width:1080px){
        width:55%;
    }
    @media (max-width:675px){
        width:100%;
        margin-right:0;
        margin-bottom:10px;
    }
`;


const Input = styled.input`
    width:20%;
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
        width:200px;
    }

    @media (max-width:675px){
        margin-right:0;
        margin-bottom:10px;
        width:40%;
        
    }

    @media (max-width:500px){
        width:48%;
        
    }
`;

const BtnAgregar = styled.button`
    width:20%;
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

    @media (max-width:1080px){
        width:10%;
    }

    @media (max-width:675px){
        width:90%;
    }

    @media (max-width:500px){
        width:100%;
    }
`;