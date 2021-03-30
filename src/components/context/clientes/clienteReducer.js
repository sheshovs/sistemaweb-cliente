import {
    AGREGAR_CLIENTE,
    OBTENER_CLIENTES
} from '../../types/index';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case AGREGAR_CLIENTE:
            return {
                ...state,
                clientes: [...state.clientes, action.payload]
            }

        case OBTENER_CLIENTES:
            return {
                ...state,
                clientes: [...state.clientes]
            }

        default:
            return state;
    }
}