import {
    OBTENER_TRABAJOS,
    AGREGAR_TRABAJO,
    ELIMINAR_TRABAJO,
    TRABAJO_ACTUAL,
    EDITAR_TRABAJO
} from '../../types/index'

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case OBTENER_TRABAJOS:
            return {
                ...state,
                trabajoscliente: state.trabajos.filter(trabajo => trabajo.idCliente === action.payload)
            }
        case AGREGAR_TRABAJO:
            return {
                ...state,
                trabajoscliente: [action.payload, ...state.trabajoscliente]
            }
        case ELIMINAR_TRABAJO:
            return {
                ...state,
                trabajoscliente: state.trabajoscliente.filter(trabajo => (trabajo.id !== action.payload)),
                trabajoActual: null
            }
        case TRABAJO_ACTUAL:
            return {
                ...state,
                trabajoActual: state.trabajoscliente.filter(trabajo => (trabajo.id === action.payload))
            }
        case EDITAR_TRABAJO:
            return {
                ...state,
                trabajoscliente: state.trabajoscliente.map(trabajo => (trabajo.id === action.payload.id) ? action.payload : trabajo),
                trabajoActual: null
            }

        default:
            return state;
    }
}