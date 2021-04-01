import React, { useReducer } from 'react';
import trabajoContext from './trabajoContext'
import trabajoReducer from './trabajoReducer'

import { } from '../../types/index'

const TrabajoState = (props) => {

    const initialState = {

    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(trabajoReducer, initialState);

    return (
        <trabajoContext.Provider
            value={{

            }}
        >
            {props.children}
        </trabajoContext.Provider>
    );
};

export default TrabajoState;