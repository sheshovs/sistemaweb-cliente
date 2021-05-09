import React from 'react';
import styled from 'styled-components'

const Trabajo = ({ trabajo, nombre }) => {

    const { descripcion, costo, fecha } = trabajo;

    return (
        <Container>
            <DivInfo>{descripcion}</DivInfo>
            <DivInfo>${costo ? costo.toLocaleString('de-DE') : null}</DivInfo>
            <DivInfo>{fecha.substr(8, 2) + '-' + fecha.substr(5, 2) + '-' + fecha.substr(0, 4)}</DivInfo>
            <DivInfo>{nombre}</DivInfo>
        </Container>
    );
};

export default Trabajo;

const Container = styled.tr`
    width: 100%;
    min-height:90px;
    border: 1px solid rgba(0,0,0,.1);
    border-top:none;
    display:flex;
    justify-content:center;
    align-items:center;
    
    :nth-child(2n){
        background-color:#eee;
    }
`;

const DivInfo = styled.td`
    width:30%;
    height:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    padding:20px;
    white-space:pre-wrap;

    :nth-child(2){
        justify-content:center;
        width:20%;
    }
    :nth-child(3){
        justify-content:center;
        text-align:center;
        width:20%;
    }
    :nth-child(4){
        justify-content:center;
        text-align:center;
        width:30%;
    }

    @media (max-width:675px){
        padding:10px;
    }
`;