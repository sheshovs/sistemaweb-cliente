import React, { useReducer } from 'react';

import ingresoContext from './ingresoContext';
import ingresoReducer from './ingresoReducer';

import {
    MOSTRAR_AGREGAR_INGRESO
} from '../../types/index';

const IngresoState = (props) => {

    const initialState = {
        ingresoPopup: false
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(ingresoReducer, initialState);

    const handleNuevoIngreso = (estado) => {
        dispatch({
            type: MOSTRAR_AGREGAR_INGRESO,
            payload: estado
        })
    }

    return (
        <ingresoContext.Provider
            value={{
                ingresoPopup: state.ingresoPopup,
                handleNuevoIngreso
            }}
        >
            {props.children}
        </ingresoContext.Provider>
    )
}

export default IngresoState;