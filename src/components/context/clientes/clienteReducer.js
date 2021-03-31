import {
    AGREGAR_CLIENTE,
    OBTENER_CLIENTES,
    FILTRAR_CLIENTES,
    MOSTRAR_AGREGAR_CLIENTE
} from '../../types/index';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case OBTENER_CLIENTES:
            return {
                ...state,
                clientes: action.payload
            }
        case AGREGAR_CLIENTE:
            return {
                ...state,
                clientes: [...state.clientes, action.payload],
                popup: false
            }
        case FILTRAR_CLIENTES:
            return {
                ...state,
                clientes: state.clientes.filter(cliente => cliente.patente.toLowerCase().includes(action.payload.toLowerCase()))
            }
        case MOSTRAR_AGREGAR_CLIENTE:
            return {
                ...state,
                popup: action.payload
            }

        default:
            return state;
    }
}