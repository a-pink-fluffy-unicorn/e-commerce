import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0

}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart (state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProduct)
      }
    },
    calculateTotalAmount (state) {
      let total = 0
      state.cartItems.forEach(item => {
        total += item.price * (item.cartQuantity || 1)
      })
      state.cartTotalAmount = total
    },
    calculateTotalQuantity (state) {
      let total = 0
      state.cartItems.forEach(item => {
        total += item.cartQuantity
      })
      state.cartTotalQuantity = total
    }
  }
})

export const { addToCart, calculateTotalAmount, calculateTotalQuantity } = cartSlice.actions
export default cartSlice.reducer
