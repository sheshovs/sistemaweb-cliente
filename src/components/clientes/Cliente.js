import React, { Fragment } from 'react';
import styled from 'styled-components'

const Cliente = ({ cliente }) => {

    const { nombre, patente, tel } = cliente;

    return (
        <Fragment>
            <TD>{nombre}</TD>
            <TD>{patente}</TD>
            <TD>{tel}</TD>
            <TD>
                <BtnTrabajos>
                    Ver trabajos
                </BtnTrabajos>
            </TD>
        </Fragment>
    );
};

export default Cliente;

const TD = styled.td`
    text-align:center;
    padding:10px 0;
`;

const BtnTrabajos = styled.button`
    width:50%;
    height:40px;
    border-radius:5px;
    border:1px solid rgba(0,0,0,.5);
    background-color:cadetblue;
    color:white;
    text-transform:uppercase;
    cursor: pointer;

    :hover{
        background-color:rgba(95,158,160,.9);
    }
`;