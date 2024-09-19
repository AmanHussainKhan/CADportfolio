import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
// ham action call karte hain.... jahan use karna hota hai
export const { add, remove } = cartSlice.actions;

// ham reducer ko Store ke andar store kar dete hain...
export default cartSlice.reducer;
