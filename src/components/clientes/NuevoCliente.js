import React from 'react';
import Sidebar from '../layout/Sidebar'
import styled from 'styled-components'

const NuevoCliente = () => {
    return (
        <Container>
            <Sidebar />
            <h1>Desde NuevoCliente</h1>
        </Container>

    );
};

export default NuevoCliente;

const Container = styled.div`
    width: 100%;
    min-height:100vh;
    display:flex;
    justify-content:flex-start;
`;