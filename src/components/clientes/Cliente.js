import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import clienteContext from '../context/clientes/clienteContext'
import trabajoContext from '../context/trabajos/trabajoContext'

const Cliente = ({ cliente }) => {

    const clientesContext = useContext(clienteContext);
    const { obtenerClienteActual } = clientesContext;

    const { nombre, patente, tel, _id } = cliente;

    const trabajosContext = useContext(trabajoContext);
    const { obtenerTrabajos } = trabajosContext;


    return (
        <Fragment>
            <TD>{nombre}</TD>
            <TD>{patente}</TD>
            <TD>{tel}</TD>
            <TD>
                <BtnTrabajos
                    onClick={() => {
                        obtenerClienteActual(_id);
                        obtenerTrabajos(_id);
                    }}
                >
                    <Link to={'/cliente/trabajos'} className='btnTrabajos'>
                        {window.innerWidth < 992 ? <i className="fas fa-list"></i> : 'Ver trabajos'}
                    </Link>
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