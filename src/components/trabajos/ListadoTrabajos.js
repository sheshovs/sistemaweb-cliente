import React, { useContext } from 'react';
import Trabajo from './Trabajo'
import styled from 'styled-components'
import trabajoContext from '../context/trabajos/trabajoContext'

const ListadoTrabajos = () => {

    const trabajosContext = useContext(trabajoContext);
    const { trabajoscliente } = trabajosContext;

    return (
        <Container>
            <DivHead>
                <DivInfo><strong>Descripción</strong></DivInfo>
                <DivInfo><strong>Km</strong></DivInfo>
                <DivInfo><strong>Fecha</strong></DivInfo>
                <DivAcciones></DivAcciones>
            </DivHead>
            {trabajoscliente.map(trabajo => (

                <Trabajo
                    key={trabajo._id}
                    trabajo={trabajo}
                />
            ))}

        </Container>
    );
};

export default ListadoTrabajos;

const Container = styled.div`
    width:100%;
`;
const DivHead = styled.div`
    width: 100%;
    border: 1px solid rgba(0,0,0,.1);
    border-radius:5px 5px 0 0;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    color:white;
    background-color:cadetblue;
`;
const DivInfo = styled.p`
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
        padding:10px 5px;
    }
`;

const DivAcciones = styled.div`
    width:20%;
    height:100%;
`;