import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartBonsais: localStorage.getItem("cartBonsais") ? JSON.parse(localStorage.getItem("cartBonsais")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartBonsais.findIndex(item => item._id === action.payload._id);
            if (itemIndex >= 0) {
                state.cartBonsais[itemIndex].cartQuantity += 1;
                toast.info("Bonsai đã có trong giỏ hàng")
            } else {
                const tempBonsai = { ...action.payload, cartQuantity: 1 };
                state.cartBonsais.push(tempBonsai);
                toast.success("Thêm bonsai vào giỏ hàng")
            }
            localStorage.setItem("cartBonsais", JSON.stringify(state.cartBonsais))
        },
        removeBonsaiFromCart: (state, action) => {
            const nextCartBonsais = state.cartBonsais.filter(cartItem => cartItem._id !== action.payload._id)

            state.cartBonsais = nextCartBonsais;
            toast.error("Bonsai đã được xóa")
            localStorage.setItem("cartBonsais", JSON.stringify(state.cartBonsais))
        },
        increaseCart: (state, action) => {
            const itemIndex = state.cartBonsais.findIndex(item => item._id === action.payload._id);
            if (itemIndex >= 0) {
                state.cartBonsais[itemIndex].cartQuantity += 1;
            } else {
                const tempBonsai = { ...action.payload, cartQuantity: 1 };
                state.cartBonsais.push(tempBonsai);
            }
            localStorage.setItem("cartBonsais", JSON.stringify(state.cartBonsais))
        },
        decreaseCart: (state, action) => {
            const itemIndex = state.cartBonsais.findIndex(item => item._id === action.payload._id);

            if (state.cartBonsais[itemIndex].cartQuantity > 1) {
                state.cartBonsais[itemIndex].cartQuantity -= 1;

            } else if (state.cartBonsais[itemIndex].cartQuantity === 1) {
                toast.error("Không thể giảm được nữa")
            }
        },
        clearCartBonsais: (state) => {
            state.cartBonsais = [];
            localStorage.setItem("cartBonsais", JSON.stringify(state.cartBonsais))
        },
        getTotals: (state) => {
           let { total, quantity } = state.cartBonsais.reduce((cartTotal, cartBonsai) => {
                const { price, cartQuantity } = cartBonsai;
                const itemTotal = parseInt(price) * cartQuantity;
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
                return cartTotal;
            }, {
                total: 0,
                quantity: 0
            })

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }
    }
})

export const { addToCart, removeBonsaiFromCart, increaseCart, decreaseCart, clearCartBonsais, getTotals } = cartSlice.actions;

export default cartSlice.reducer;