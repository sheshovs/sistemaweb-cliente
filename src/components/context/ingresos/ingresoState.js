import React, { useReducer } from 'react';

import ingresoContext from './ingresoContext';
import ingresoReducer from './ingresoReducer';

import {
    MOSTRAR_AGREGAR_INGRESO,
    MOSTRAR_CONFIRMACION_I,
    OBTENER_INGRESOS,
    AGREGAR_INGRESO,
    ACTUALIZAR_INGRESO,
    ELIMINAR_INGRESO,
    INGRESO_ACTUAL,
    // INGRESO_ERROR,
    EDITAR_INGRESO,
    FILTRAR_INGRESO
} from '../../types/index';

import clienteAxios from '../../../config/axios';

const IngresoState = (props) => {

    const initialState = {
        ingresoPopup: false,
        ingresosUsuario: [],
        ingresosFiltrados: [],
        ingresoActual: null,
        confirmacionI: false,
        editarIngreso: false
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(ingresoReducer, initialState);

    const handleNuevoIngreso = (estado) => {
        dispatch({
            type: MOSTRAR_AGREGAR_INGRESO,
            payload: estado
        })
    }

    const handleConfirmacionI = (estado) => {
        dispatch({
            type: MOSTRAR_CONFIRMACION_I,
            payload: estado
        })
    }

    const obtenerIngresos = async (creador) => {
        try {
            const resultado = await clienteAxios.get('/api/ingresos', { params: { creador } });
            // console.log(resultado.data.ingresos);

            dispatch({
                type: OBTENER_INGRESOS,
                payload: resultado.data.ingresos
            })
        } catch (error) {
            console.log(error);
        }
    }

    const agregarIngreso = async ingreso => {
        try {
            const resultado = await clienteAxios.post('/api/ingresos', ingreso);
            // console.log(resultado.data.ingreso);

            dispatch({
                type: AGREGAR_INGRESO,
                payload: resultado.data.ingreso
            })
        } catch (error) {
            console.log(error.response);
        }
    }

    const eliminarIngreso = async (id) => {
        try {
            await clienteAxios.delete(`/api/ingresos/${id}`);

            dispatch({
                type: ELIMINAR_INGRESO,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }

    const obtenerIngresoActual = idIngreso => {
        dispatch({
            type: INGRESO_ACTUAL,
            payload: idIngreso
        })
    }

    const actualizarIngreso = async (ingreso) => {
        try {
            const resultado = await clienteAxios.put(`/api/ingresos/${ingreso._id}`, ingreso);
            // console.log(resultado.data.nuevoIngreso);

            dispatch({
                type: ACTUALIZAR_INGRESO,
                payload: resultado.data.nuevoIngreso
            })
        } catch (error) {
            // const alerta = {
            //     msg: 'Hubo un error al actualizar el ingreso',
            //     categoria: 'alerta-error'
            // }

            // dispatch({
            //     type: INGRESO_ERROR,
            //     payload: alerta
            // })
            console.log(error);
        }
    }

    const handleEditarIngreso = (estado) => {
        dispatch({
            type: EDITAR_INGRESO,
            payload: estado
        })
    }

    const filtrarIngresos = (fecha) => {
        dispatch({
            type: FILTRAR_INGRESO,
            payload: fecha
        })
    }

    return (
        <ingresoContext.Provider
            value={{
                ingresoPopup: state.ingresoPopup,
                ingresosUsuario: state.ingresosUsuario,
                ingresosFiltrados: state.ingresosFiltrados,
                ingresoActual: state.ingresoActual,
                confirmacionI: state.confirmacionI,
                editarIngreso: state.editarIngreso,
                handleNuevoIngreso,
                handleConfirmacionI,
                obtenerIngresos,
                agregarIngreso,
                eliminarIngreso,
                obtenerIngresoActual,
                actualizarIngreso,
                handleEditarIngreso,
                filtrarIngresos
            }}
        >
            {props.children}
        </ingresoContext.Provider>
    )
}

export default IngresoState;