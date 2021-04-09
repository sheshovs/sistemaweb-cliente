import React, { useReducer } from 'react';

import clienteContext from './clienteContext';
import clienteReducer from './clienteReducer';
import {
    AGREGAR_CLIENTE,
    OBTENER_CLIENTES,
    FILTRAR_CLIENTES,
    MOSTRAR_AGREGAR_CLIENTE,
    CLIENTE_ACTUAL,
    ACTUALIZAR_CLIENTE,
    ELIMINAR_CLIENTE,
    CLIENTE_ERROR
} from '../../types/index';

import clienteAxios from '../../../config/axios';


const ClienteState = (props) => {

    const initialState = {
        clientes: [],
        filtrados: [],
        popup: false,
        clienteActual: null,
        mensaje: null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(clienteReducer, initialState);

    const obtenerClientes = async () => {

        try {
            const resultado = await clienteAxios.get('/api/clientes');

            dispatch({
                type: OBTENER_CLIENTES,
                payload: resultado.data.clientes
            })

        } catch (error) {
            const alerta = {
                msg: 'Hubo un error al obtener clientes',
                categoria: 'alerta-error'
            }

            dispatch({
                type: CLIENTE_ERROR,
                payload: alerta
            })
        }
    }

    const agregarCliente = async cliente => {
        try {
            const resultado = await clienteAxios.post('/api/clientes', cliente);
            // console.log(resultado);

            dispatch({
                type: AGREGAR_CLIENTE,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error al agregar el cliente',
                categoria: 'alerta-error'
            }

            dispatch({
                type: CLIENTE_ERROR,
                payload: alerta
            })

        }

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

    const actualizarCliente = async (cliente) => {
        try {
            const resultado = await clienteAxios.put(`/api/clientes/${cliente._id}`, cliente);
            // console.log(resultado.data.cliente);

            dispatch({
                type: ACTUALIZAR_CLIENTE,
                payload: resultado.data.cliente
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error al actualizar el cliente',
                categoria: 'alerta-error'
            }

            dispatch({
                type: CLIENTE_ERROR,
                payload: alerta
            })
        }
    }

    const eliminarCliente = async id => {
        try {
            await clienteAxios.delete(`/api/clientes/${id}`);

            dispatch({
                type: ELIMINAR_CLIENTE,
                payload: id
            })

        } catch (error) {
            const alerta = {
                msg: 'Hubo un error al eliminar el cliente',
                categoria: 'alerta-error'
            }

            dispatch({
                type: CLIENTE_ERROR,
                payload: alerta
            })
        }
    }

    return (
        <clienteContext.Provider
            value={{
                clientes: state.clientes,
                filtrados: state.filtrados,
                popup: state.popup,
                clienteActual: state.clienteActual,
                mensaje: state.mensaje,
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