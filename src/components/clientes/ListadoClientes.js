import React, { useContext, useEffect } from 'react';
import Cliente from './Cliente'
import clienteContext from '../context/clientes/clienteContext'
import styled from 'styled-components'
import AlertaContext from '../context/alertas/alertaContext';


const ListadoClientes = () => {

    // Extraer clientes de state inicial
    const clientesContext = useContext(clienteContext);
    const { mensaje, filtrados, clientes, obtenerClientes } = clientesContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    useEffect(() => {

        // si hay un error
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        obtenerClientes();

        // eslint-disable-next-line
    }, [mensaje]);

    return (
        <>
            { alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            {filtrados.length === 0
                ? (clientes.length === 0)
                    ? (<Mensaje>No hay clientes, comienza agregando uno!</Mensaje>)
                    : (<TablaClientes>
                        <thead>
                            <tr>
                                <THead>Nombre</THead>
                                <THead>Patente</THead>
                                <THead>Teléfono</THead>
                                <THead>Acción</THead>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                (clientes.map(cliente => (
                                    <TRbody
                                        key={cliente._id}
                                    >
                                        <Cliente
                                            cliente={cliente}
                                        />
                                    </TRbody>
                                )))
                            }

                        </tbody>
                    </TablaClientes>)
                : <TablaClientes>
                    <thead>
                        <tr>
                            <THead>Nombre</THead>
                            <THead>Patente</THead>
                            <THead>Teléfono</THead>
                            <THead>Acción</THead>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            (filtrados.map(cliente => (
                                <TRbody
                                    key={cliente._id}
                                >
                                    <Cliente
                                        cliente={cliente}
                                    />
                                </TRbody>
                            )))
                        }

                    </tbody>
                </TablaClientes>
            }
        </>

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
    width:25%;
`;

const TRbody = styled.tr`
    background-color:#eee;
    border-bottom:1px solid rgba(0,0,0,.3);

    :nth-child(2n){
        background-color:#fff;
    }
`;

const Mensaje = styled.p`
    font-size:32px;
    font-weight:bold;
`;