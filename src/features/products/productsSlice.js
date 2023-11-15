import { createSlice } from "@reduxjs/toolkit";

// Initial state for the productsSlice
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
    // Add a product to the initial state with data from ProductsForm
    addProduct: (state, action) => {
      state.push(action.payload);
    },

    // Delete data from the state with a button in ProductsList (using the provided id)
    deleteProduct: (state, action) => {
      // Find the product in the state with the given id
      const productFound = state.find(
        (product) => product.id === action.payload
      );

      // If the product is found, remove it from the state
      if (productFound) {
        state.splice(state.indexOf(productFound), 1);
      }
    },

    // Edit data in the state
    editProduct: (state, action) => {
      // Destructure data from the action.payload
      const { id, productName, productDescript, price } = action.payload;

      // Find the product in the state with the given id
      const productFound = state.find((state) => state.id == id);

      // If the product is found, update its data with new data from ProductsEdit
      if (productFound) {
        productFound.productName = productName;
        productFound.productDescript = productDescript;
        productFound.price = price;
      }
    },
  },
});

export const { addProduct, deleteProduct, editProduct } = productsSlice.actions;
export default productsSlice.reducer;
