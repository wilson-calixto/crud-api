import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Product {
  id: string;
  name: string;
  quantity: number;
}
interface ProductsState {
  items: Product[];
}

const initialState: ProductsState = {
  items: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
    updateProductName: (
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      const product = state.items.find((p) => p.id === action.payload.id);
      if (product) {
        product.name = action.payload.name;
      }
    },
  },
});

export const { addProduct, removeProduct, updateProductName } =
  productsSlice.actions;
export default productsSlice.reducer;
