import React, { useReducer } from 'react';
import trabajoContext from './trabajoContext'
import trabajoReducer from './trabajoReducer'

import {
    OBTENER_TRABAJOS,
    AGREGAR_TRABAJO,
    ELIMINAR_TRABAJO,
    TRABAJO_ACTUAL,
    EDITAR_TRABAJO,
    MOSTRAR_CONFIRMACION_T,
    ESTADO_EDITAR,
    OBTENER_TODOS_LOS_TRABAJOS
} from '../../types/index'

import clienteAxios from '../../../config/axios';

const TrabajoState = (props) => {

    const initialState = {
        trabajoscliente: [],
        trabajoActual: null,
        confirmacionT: false,
        estado: false,
        allTrabajos: []
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(trabajoReducer, initialState);

    const obtenerTrabajos = async (cliente) => {
        try {
            const resultado = await clienteAxios.get('/api/trabajos', { params: { cliente } });
            // console.log(resultado.data.trabajos);

            dispatch({
                type: OBTENER_TRABAJOS,
                payload: resultado.data.trabajos
            })
        } catch (error) {
            console.log(error);
        }
    }

    const obtenerTodosLosTrabajos = async (usuario) => {
        try {
            const resultado = await clienteAxios.get(`/api/trabajos/${usuario._id}`, { params: { creador: usuario._id } });
            // console.log(resultado.data.trabajos);

            dispatch({
                type: OBTENER_TODOS_LOS_TRABAJOS,
                payload: resultado.data.trabajos
            });

        } catch (error) {
            console.log(error);
        }
    }

    const agregarTrabajo = async trabajo => {
        try {
            const resultado = await clienteAxios.post('/api/trabajos', trabajo);
            // console.log(resultado.data.trabajo);

            dispatch({
                type: AGREGAR_TRABAJO,
                payload: resultado.data.trabajo
            })
        } catch (error) {
            console.log(error.response);
        }
    }

    const eliminarTrabajo = async (id, cliente) => {
        try {
            await clienteAxios.delete(`/api/trabajos/${id}`, { params: { cliente } });

            dispatch({
                type: ELIMINAR_TRABAJO,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }

    const obtenerTrabajoActual = idTrabajo => {
        dispatch({
            type: TRABAJO_ACTUAL,
            payload: idTrabajo
        })
    }

    const estadoEditar = estado => {
        dispatch({
            type: ESTADO_EDITAR,
            payload: estado
        })
    }

    const editarTrabajo = async trabajo => {
        try {
            const resultado = await clienteAxios.put(`/api/trabajos/${trabajo._id}`, trabajo);
            // console.log(resultado.data.nuevoTrabajo);

            dispatch({
                type: EDITAR_TRABAJO,
                payload: resultado.data.nuevoTrabajo
            })
        } catch (error) {
            console.log(error.response);
        }
    }

    const handleConfirmacionT = (estado) => {
        dispatch({
            type: MOSTRAR_CONFIRMACION_T,
            payload: estado
        })
    }

    return (
        <trabajoContext.Provider
            value={{
                confirmacionT: state.confirmacionT,
                trabajoscliente: state.trabajoscliente,
                trabajoActual: state.trabajoActual,
                estado: state.estado,
                allTrabajos: state.allTrabajos,
                obtenerTrabajos,
                agregarTrabajo,
                eliminarTrabajo,
                obtenerTrabajoActual,
                editarTrabajo,
                handleConfirmacionT,
                estadoEditar,
                obtenerTodosLosTrabajos
            }}
        >
            {props.children}
        </trabajoContext.Provider>
    );
};

export default TrabajoState;