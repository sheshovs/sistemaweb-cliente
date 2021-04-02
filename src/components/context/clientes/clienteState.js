import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import clienteContext from './clienteContext';
import clienteReducer from './clienteReducer';
import {
    AGREGAR_CLIENTE,
    OBTENER_CLIENTES,
    FILTRAR_CLIENTES,
    MOSTRAR_AGREGAR_CLIENTE,
    CLIENTE_ACTUAL,
    ACTUALIZAR_CLIENTE,
    ELIMINAR_CLIENTE
} from '../../types/index';


const ClienteState = (props) => {

    const initialState = {
        allClientes: [
            { id: 1, nombre: 'Santos Hermoso', patente: 'DH3487', tel: '9876 5434', marca: 'Audi', modelo: 'R8' },
            { id: 2, nombre: 'Latifa Cabello', patente: 'KU2948', tel: '8642 7568' },
            { id: 3, nombre: 'Adan Vera', patente: 'KOFT34', tel: '9362 3610' },
            { id: 4, nombre: 'Yoel Conesa', patente: 'NA2843', tel: '8315 3697' },
            { id: 5, nombre: 'Alexandre Ramon', patente: 'MYFO09', tel: '9845 4835' },
        ],
        clientes: [],
        popup: false,
        clienteActual: null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(clienteReducer, initialState);

    const obtenerClientes = () => {
        dispatch({
            type: OBTENER_CLIENTES,
        })
    }

    const agregarCliente = cliente => {
        cliente.id = uuidv4();

        dispatch({
            type: AGREGAR_CLIENTE,
            payload: cliente
        })
    }

    const filtrarClientes = patente => {

        dispatch({
            type: FILTRAR_CLIENTES,
            payload: patente
        })
    }

    const handleNuevoCliente = (estado) => {
        dispatch({
            type: MOSTRAR_AGREGAR_CLIENTE,
            payload: estado
        })
    }

    const obtenerClienteActual = (clienteId) => {
        dispatch({
            type: CLIENTE_ACTUAL,
            payload: clienteId
        })
    }

    const actualizarCliente = (cliente) => {
        dispatch({
            type: ACTUALIZAR_CLIENTE,
            payload: cliente
        })
    }

    const eliminarCliente = id => {
        dispatch({
            type: ELIMINAR_CLIENTE,
            payload: id
        })
    }

    return (
        <clienteContext.Provider
            value={{
                clientes: state.clientes,
                popup: state.popup,
                clienteActual: state.clienteActual,
                clientesfiltrados: state.clientesfiltrados,
                agregarCliente,
                obtenerClientes,
                filtrarClientes,
                handleNuevoCliente,
                obtenerClienteActual,
                actualizarCliente,
                eliminarCliente
            }}
        >
            {props.children}
        </clienteContext.Provider>
    )
};

export default ClienteState;