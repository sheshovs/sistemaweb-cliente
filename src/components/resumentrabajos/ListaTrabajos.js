import React, { useContext } from 'react';
import styled from 'styled-components'
import clienteContext from '../context/clientes/clienteContext';
import Trabajo from '../resumentrabajos/Trabajo'

const ListaTrabajos = ({ filtrados }) => {

    const clientesContext = useContext(clienteContext);
    const { clientes } = clientesContext;

    /*! Ordenar elementos de arreglo */
    // eslint-disable-next-line no-extend-native
    Array.prototype.orderByDate = function (p, so) {
        if (so !== -1 && so !== 1) so = 1;
        this.sort(function (a, b) {
            var da = new Date(a[p]), db = new Date(b[p]);
            return (da - db) * so;
        })
    }
    filtrados.orderByDate('fecha', -1);

    return (
        <Container id='tabla-todos-trabajos'>
            <thead>
                <DivHead>
                    <DivInfo><strong>Descripción</strong></DivInfo>
                    <DivInfo><strong>Precio</strong></DivInfo>
                    <DivInfo><strong>Fecha</strong></DivInfo>
                    <DivInfo><strong>Cliente</strong></DivInfo>
                </DivHead>
            </thead>
            <tbody>
                {filtrados.map(trabajo => {

                    var cliente;
                    var nombre;

                    for (cliente in clientes) {
                        if (clientes[cliente]._id === trabajo.cliente) {
                            nombre = clientes[cliente].nombre;
                        }
                    }

                    return <Trabajo
                        key={trabajo._id}
                        trabajo={trabajo}
                        nombre={nombre}
                    />
                })}
            </tbody>
        </Container>
    );
};

export default ListaTrabajos;

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
    width:30%;
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
    :nth-child(4){
        width:30%;
    }

    @media (max-width:675px){
        padding:20px;
    }
`;
