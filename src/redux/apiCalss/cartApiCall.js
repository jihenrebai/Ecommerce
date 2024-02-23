import { cartActions } from "../slices/carSlice";

//Add Item TO Cart

export function addToCart(newItem) {
    return (dispatch) => {
        dispatch(cartActions.addItemToCart(newItem))
      
    }
}
//Remove Item From Cart
export function removeFromCart(id) {
    return (dispatch) => {
        dispatch(cartActions.removeItemFromCart(id))
    }
}