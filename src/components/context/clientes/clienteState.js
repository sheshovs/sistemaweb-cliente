import React, { useReducer } from 'react';

import clienteContext from './clienteContext';
import clienteReducer from './clienteReducer';
import {
    AGREGAR_CLIENTE,
    OBTENER_CLIENTES
} from '../../types/index';

const ClienteState = (props) => {

    const initialState = {
        clientes: [
            { nombre: 'Santos Hermoso', patente: 'DH3487', tel: '9876 5434' },
            { nombre: 'Latifa Cabello', patente: 'KU2948', tel: '8642 7568' },
            { nombre: 'Adan Vera', patente: 'KOFT34', tel: '9362 3610' },
            { nombre: 'Yoel Conesa', patente: 'NA2843', tel: '8315 3697' },
            { nombre: 'Alexandre Ramon', patente: 'MYFO09', tel: '9845 4835' },
        ]
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(clienteReducer, initialState);

    const agregarCliente = (cliente) => {

        dispatch({
            type: AGREGAR_CLIENTE,
            payload: cliente
        })
    }

    const obtenerClientes = () => {
        dispatch({
            type: OBTENER_CLIENTES
        })
    }

    return (
        <clienteContext.Provider
            value={{
                clientes: state.clientes,
                agregarCliente,
                obtenerClientes
            }}
        >
            {props.children}
        </clienteContext.Provider>
    )
};

export default ClienteState;