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

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case OBTENER_CLIENTES:
            return {
                ...state,
                clientes: action.payload,
                filtrados: action.payload
            }
        case AGREGAR_CLIENTE:
            return {
                ...state,
                filtrados: [...state.clientes, action.payload],
                popup: false
            }
        case FILTRAR_CLIENTES:
            return {
                ...state,
                filtrados: state.clientes.filter(cliente => cliente.patente.toLowerCase().includes(action.payload.toLowerCase()))
            }
        case MOSTRAR_AGREGAR_CLIENTE:
            return {
                ...state,
                popup: action.payload
            }
        case CLIENTE_ACTUAL:
            return {
                ...state,
                clienteActual: state.filtrados.filter(cliente => cliente._id === action.payload)
            }
        case ACTUALIZAR_CLIENTE:
            return {
                ...state,
                filtrados: state.clientes.map(cliente => (cliente._id === action.payload._id) ? action.payload : cliente),
                popup: false
            }
        case ELIMINAR_CLIENTE:
            return {
                ...state,
                filtrados: state.clientes.filter(cliente => (cliente._id !== action.payload))
            }
        case CLIENTE_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        default:
            return state;
    }
}