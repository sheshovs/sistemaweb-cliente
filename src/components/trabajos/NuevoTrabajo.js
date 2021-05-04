import React, { useState, useContext, useEffect } from 'react';
import trabajoContext from '../context/trabajos/trabajoContext'
import clienteContext from '../context/clientes/clienteContext'
import styled from 'styled-components'

const NuevoTrabajo = () => {

    const clientesContext = useContext(clienteContext);
    const { clienteActual } = clientesContext;

    const [clienteA] = clienteActual;

    const trabajosContext = useContext(trabajoContext);
    const { estado, trabajoActual, agregarTrabajo, editarTrabajo, obtenerTrabajos, estadoEditar } = trabajosContext;

    const fechaHoy = new Date();
    const Dia = (fechaHoy.getDate() < 10) ? '0' + fechaHoy.getDate() : fechaHoy.getDate().toString();
    const Mes = (fechaHoy.getMonth() + 1 < 10) ? '0' + (fechaHoy.getMonth() + 1) : (fechaHoy.getDate() + 1).toString();
    const Anio = fechaHoy.getFullYear().toString();


    const [trabajo, guardarTrabajo] = useState({
        descripcion: '',
        kilometraje: 0,
        fecha: Anio + '-' + Mes + '-' + Dia,
        costo: 0,
        cliente: clienteA._id,
        creador: clienteA.creador
    });


    const { descripcion, kilometraje, fecha, costo } = trabajo;


    useEffect(() => {

        if (trabajoActual && estado) {
            const [trabajoA] = trabajoActual;

            guardarTrabajo({
                _id: trabajoA._id,
                descripcion: trabajoA.descripcion,
                kilometraje: trabajoA.kilometraje,
                fecha: trabajoA.fecha.slice(0, 10),
                costo: trabajoA.costo,
                cliente: trabajoA.cliente,
                creador: clienteA.creador
            });
        } else {
            guardarTrabajo({
                descripcion: '',
                kilometraje: 0,
                fecha: Anio + '-' + Mes + '-' + Dia,
                costo: 0,
                cliente: clienteA._id,
                creador: clienteA.creador
            })
        }
        // eslint-disable-next-line
    }, [trabajoActual, estado]);


    const onChange = e => {
        guardarTrabajo({
            ...trabajo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (descripcion.trim() === '') {
            return;
        }

        if (!estado) {
            agregarTrabajo(trabajo);

        } else {
            editarTrabajo(trabajo);
            estadoEditar(false);
        }


        guardarTrabajo({
            descripcion: '',
            kilometraje: 0,
            fecha: Anio + '-' + Mes + '-' + Dia,
            costo: 0,
            cliente: clienteA._id,
            creador: clienteA.creador
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
                type='number'
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
            <Input
                type='number'
                placeholder='Costo'
                name='costo'
                id='costo'
                onChange={onChange}
                value={costo}
            />
            <BtnAgregar
                type='submit'
            >
                {trabajoActual && estado
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
    padding:15px 10px;
    font-size:16px;
    margin-right:20px;
    resize:none;
    font-family:'Arial';

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

    @media (max-width:675px){
        margin-right:0;
        margin-bottom:10px;
        width:40%;
    }

    @media (max-width:500px){
        width:48%;
        
        :nth-child(4){
            width:100%;
        }
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