import React, { useReducer } from 'react';
import trabajoContext from './trabajoContext'
import trabajoReducer from './trabajoReducer'
import { v4 as uuidv4 } from 'uuid';

import {
    OBTENER_TRABAJOS,
    AGREGAR_TRABAJO,
    ELIMINAR_TRABAJO,
    TRABAJO_ACTUAL,
    EDITAR_TRABAJO
} from '../../types/index'

const TrabajoState = (props) => {

    const initialState = {
        trabajos: [
            { id: 100, descripcion: 'Este es un trabajo de prueba', kilometraje: '12095', fecha: '2021-04-02', idCliente: 1 },
            { id: 101, descripcion: 'Este es un trabajo de prueba', kilometraje: '12345', fecha: '2021-04-02', idCliente: 1 },
            { id: 102, descripcion: 'Este es un trabajo de prueba', kilometraje: '42363', fecha: '2021-04-02', idCliente: 2 },
            { id: 103, descripcion: 'Este es un trabajo de prueba', kilometraje: '2342', fecha: '2021-04-02', idCliente: 3 },
            { id: 104, descripcion: 'Este es un trabajo de prueba', kilometraje: '76534', fecha: '2021-04-02', idCliente: 4 }
        ],
        trabajoscliente: null,
        trabajoActual: null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(trabajoReducer, initialState);

    const obtenerTrabajos = (idCliente) => {
        dispatch({
            type: OBTENER_TRABAJOS,
            payload: idCliente
        })
    }

    const agregarTrabajo = trabajo => {
        trabajo.id = uuidv4();

        dispatch({
            type: AGREGAR_TRABAJO,
            payload: trabajo
        })
    }

    const eliminarTrabajo = idTrabajo => {
        dispatch({
            type: ELIMINAR_TRABAJO,
            payload: idTrabajo
        })
    }

    const obtenerTrabajoActual = idTrabajo => {
        dispatch({
            type: TRABAJO_ACTUAL,
            payload: idTrabajo
        })
    }

    const editarTrabajo = trabajo => {
        dispatch({
            type: EDITAR_TRABAJO,
            payload: trabajo
        })
    }

    return (
        <trabajoContext.Provider
            value={{
                trabajos: state.trabajos,
                trabajoscliente: state.trabajoscliente,
                trabajoActual: state.trabajoActual,
                obtenerTrabajos,
                agregarTrabajo,
                eliminarTrabajo,
                obtenerTrabajoActual,
                editarTrabajo
            }}
        >
            {props.children}
        </trabajoContext.Provider>
    );
};

export default TrabajoState;