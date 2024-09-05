import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    favourites: localStorage.getItem("favourites") ? JSON.parse(localStorage.getItem("favourites")) : [],
    favouriteQuantity: 0
};

const favouriteBonsaiSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {
        addFavouriteBonsai: (state, action) => {
            const itemIndex = state.favourites.findIndex(item => item._id === action.payload._id);
            if (itemIndex >= 0) {
                state.favourites[itemIndex].favouriteQuantity += 1;
                toast.info("Bonsai đã được thích")
            } else {
                const tempFavourite = { ...action.payload, favouriteQuantity: 1}
                state.favourites.push(tempFavourite);
                toast.success("Thêm bonsai yêu thích")
            }
            localStorage.setItem("favourites", JSON.stringify(state.favourites))
        }
    }
})

export const { addFavouriteBonsai } = favouriteBonsaiSlice.actions;

export default favouriteBonsaiSlice.reducer;