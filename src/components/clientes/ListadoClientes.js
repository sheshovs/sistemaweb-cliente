import React, { useContext, useEffect } from 'react';
import Cliente from './Cliente'
import clienteContext from '../context/clientes/clienteContext'
import styled from 'styled-components'


const ListadoClientes = () => {

    // Extraer clientes de state inicial
    const clientesContext = useContext(clienteContext);
    const { clientes, obtenerClientes } = clientesContext;

    useEffect(() => {

        obtenerClientes();
    }, []);


    return (
        <TablaClientes>
            <tr>
                <THead>Nombre</THead>
                <THead>Patente</THead>
                <THead>Teléfono</THead>
                <THead>Acción</THead>
            </tr>

            {clientes.map(cliente => (
                <TRbody>
                    <Cliente
                        key={cliente.patente}
                        cliente={cliente}
                    />
                </TRbody>
            ))}

        </TablaClientes>
    );
};

export default ListadoClientes;

const TablaClientes = styled.table`
    width:80%;
    border-collapse: collapse;
`;

const THead = styled.th`
    background-color: cadetblue;
    color:white;
    padding:20px 0;
`;

const TRbody = styled.tr`
    background-color:#eee;
    border-bottom:1px solid rgba(0,0,0,.3);

    :nth-child(2n){
        background-color:#fff;
    }
`;
