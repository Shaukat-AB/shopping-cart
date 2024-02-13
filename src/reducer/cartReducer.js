export const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_TO_CART":
            return { total: payload.total, cartList: payload.cartList };

        case "REMOVE_FROM_CART":
            return { total: payload.total, cartList: payload.cartList };

        case "UPDATE_PRODUCT_COUNT":
            return { total: payload.total, cartList: payload.cartList };

        default:
            throw new Error(type + " is not valid case in cartReducer");
    }
};
