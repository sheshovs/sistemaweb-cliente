import React, { Fragment, useState } from 'react';
import Cliente from './Cliente'
import styled from 'styled-components'

const ListadoClientes = () => {

    const [clientes, guardarClientes] = useState([
        { nombre: 'Santos Hermoso', patente: 'DH3487', tel: '9876 5434' },
        { nombre: 'Latifa Cabello', patente: 'KU2948', tel: '8642 7568' },
        { nombre: 'Adan Vera', patente: 'KOFT34', tel: '9362 3610' },
        { nombre: 'Yoel Conesa', patente: 'NA2843', tel: '8315 3697' },
        { nombre: 'Alexandre Ramon', patente: 'MYFO09', tel: '9845 4835' },
    ]);

    console.log(clientes[0]);
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
    width:70%;
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
