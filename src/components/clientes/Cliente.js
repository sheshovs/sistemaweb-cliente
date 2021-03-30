import React, { Fragment } from 'react';
import styled from 'styled-components'

const Cliente = ({ cliente }) => {

    const { nombre, patente, tel } = cliente;

    return (
        <Fragment>
            <TD>{nombre}</TD>
            <TD>{patente}</TD>
            <TD>{tel}</TD>
            <TD>Ver trabajos</TD>
        </Fragment>
    );
};

export default Cliente;

const TD = styled.td`
    text-align:center;
    padding:20px 0;
`;