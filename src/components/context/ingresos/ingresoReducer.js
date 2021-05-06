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

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case MOSTRAR_AGREGAR_INGRESO:
            return {
                ...state,
                ingresoPopup: action.payload
            }
        case MOSTRAR_CONFIRMACION_I:
            return {
                ...state,
                confirmacionI: action.payload
            }
        case OBTENER_INGRESOS:
            return {
                ...state,
                ingresosUsuario: action.payload
            }
        case AGREGAR_INGRESO:
            return {
                ...state,
                ingresosUsuario: [action.payload, ...state.ingresosUsuario]
            }
        case ELIMINAR_INGRESO:
            return {
                ...state,
                ingresosUsuario: state.ingresosUsuario.filter(ingreso => (ingreso._id !== action.payload)),
                confirmacionI: false
            }
        case INGRESO_ACTUAL:
            return {
                ...state,
                ingresoActual: state.ingresosUsuario.filter(ingreso => (ingreso._id === action.payload))
            }
        case EDITAR_INGRESO:
            return {
                ...state,
                editarIngreso: action.payload
            }
        case ACTUALIZAR_INGRESO:
            return {
                ...state,
                ingresosUsuario: state.ingresosUsuario.map(ingreso => (ingreso._id === action.payload._id) ? action.payload : ingreso),
                editarIngreso: false
            }
        case FILTRAR_INGRESO:
            return {
                ...state,
                ingresosFiltrados: state.ingresosUsuario.filter(ingreso => ingreso.fecha.slice(0, 7) === action.payload)
            }
        default:
            return state;
    }
}