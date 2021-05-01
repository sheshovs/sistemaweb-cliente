import React from 'react';
import Ingreso from './Ingreso'
import styled from 'styled-components'

const ListadoIngresos = () => {

    const ingresos = [
        { id: 1, descripcion: 'texto', monto: 15000, fecha: '20-04-2021' },
        { id: 2, descripcion: 'texto2', monto: 12345, fecha: '22-04-2021' },
        { id: 3, descripcion: 'texto3', monto: 4123, fecha: '24-04-2021' },
        { id: 4, descripcion: 'texto4', monto: 5321, fecha: '28-04-2021' },
    ]


    return (
        <Container id='tabla-ingresos'>
            <thead>
                <DivHead>
                    <DivInfo><strong>Descripción</strong></DivInfo>
                    <DivInfo><strong>Monto</strong></DivInfo>
                    <DivInfo><strong>Fecha</strong></DivInfo>
                    <DivAcciones></DivAcciones>
                </DivHead>
            </thead>
            <tbody>
                {ingresos.map(ingreso => (

                    <Ingreso
                        key={ingreso.id}
                        ingreso={ingreso}
                    />
                ))}
            </tbody>
        </Container>
    );
};

export default ListadoIngresos;

const Container = styled.table`
    width:100%;
    border-collapse:collapse;

    @media (max-width:675px){
        width:730px;
    }
`;
const DivHead = styled.tr`
    width: 100%;
    border: 1px solid rgba(0,0,0,.1);
    border-radius:5px 5px 0 0;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    color:white;
    background-color:cadetblue;
`;
const DivInfo = styled.th`
    width:40%;
    height:100%;
    border-right: 1px solid rgba(0,0,0,.1);
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px;

    :nth-child(2){
        width:20%;
    }
    :nth-child(3){
        width:20%;
    }

    @media (max-width:675px){
        padding:20px;
    }
`;

const DivAcciones = styled.th`
    width:20%;
    height:100%;
`;