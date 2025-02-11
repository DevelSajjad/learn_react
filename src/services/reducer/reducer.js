import { Add_To_Cart } from "../Constants";

const initialState = {
    cartData: []
}

export default function CartItems(state = initialState, action) {
    switch (action.type) {
        case Add_To_Cart:
            return {
                ...state,
                cartData: action.data,
            }
            break;
        default:
            return state
    }
}