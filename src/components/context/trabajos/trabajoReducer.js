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

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case OBTENER_TRABAJOS:
            return {
                ...state,
                trabajoscliente: action.payload
            }
        case AGREGAR_TRABAJO:
            return {
                ...state,
                trabajoscliente: [action.payload, ...state.trabajoscliente]
            }
        case MOSTRAR_CONFIRMACION_T:
            return {
                ...state,
                confirmacionT: action.payload
            }
        case ELIMINAR_TRABAJO:
            return {
                ...state,
                trabajoscliente: state.trabajoscliente.filter(trabajo => (trabajo._id !== action.payload)),
                trabajoActual: null,
                confirmacionT: false
            }
        case TRABAJO_ACTUAL:
            return {
                ...state,
                trabajoActual: state.trabajoscliente.filter(trabajo => (trabajo._id === action.payload))
            }
        case EDITAR_TRABAJO:
            return {
                ...state,
                trabajoscliente: state.trabajoscliente.map(trabajo => (trabajo._id === action.payload._id) ? action.payload : trabajo),
                trabajoActual: null
            }
        case ESTADO_EDITAR:
            return {
                ...state,
                estado: action.payload
            }
        case OBTENER_TODOS_LOS_TRABAJOS:
            return {
                ...state,
                allTrabajos: action.payload
            }

        default:
            return state;
    }
}