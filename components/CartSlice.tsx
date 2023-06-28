import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './Store';

interface CartItem {
  id: string;
  name: string;
  price: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;