import React, { useReducer } from 'react';

import clienteContext from './clienteContext';
import clienteReducer from './clienteReducer';
import {
    NUEVO_CLIENTE
} from '../../types/index';

const ClienteState = (props) => {

    const initialState = {
        clientes: []
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(clienteReducer, initialState);

    return (
        <clienteContext.Provider
            value={{

            }}
        >
            {props.children}
        </clienteContext.Provider>
    )
};

export default ClienteState;