import {
    MOSTRAR_AGREGAR_INGRESO
} from '../../types/index';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case MOSTRAR_AGREGAR_INGRESO:
            return {
                ...state,
                ingresoPopup: action.payload
            }
        default:
            return state;
    }
}