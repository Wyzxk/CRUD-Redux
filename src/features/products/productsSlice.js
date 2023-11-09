import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    productName: "Oculus Quest 2",
    productDescript: `The Oculus Quest 2 is an all-in-one virtual reality (VR) headset, 
        providing high-quality immersive experiences without the need for a PC.`,
    price: 200,
  },
  {
    id: "1",
    productName: "DJI Mavic 3",
    productDescript: `The DJI Mavic 3 is a high-end drone offering excellent aerial video and photography,
        advanced stability, and intelligent autonomous flight capabilities.`,
    price: 300,
  },
];
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
      console.log(action);
    },
    deleteProduct: (state, action) => {
      const productFound = state.find(
        (product) => product.id === action.payload
      );
      if (productFound) {
        state.splice(state.indexOf(productFound), 1);
      }
    },
  },
});

export const { addProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
