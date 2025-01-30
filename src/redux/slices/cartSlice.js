import { createSlice } from '@reduxjs/toolkit'

const recalcTotal = (state) => {
  state.totalPrice = state.items.reduce(
    (sum, obj) => obj.count * obj.price + sum,
    0
  )
  state.totalCount = state.items.reduce((sum, obj) => obj.count + sum, 0)
}

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(
        (obj) => obj.newId === action.payload.newId
      )

      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }

      recalcTotal(state)
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.newId === action.payload)
      findItem.count--

      recalcTotal(state)
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.newId !== action.payload)

      recalcTotal(state)
    },
    clearItems(state) {
      state.items = []

      state.totalPrice = 0

      state.totalCount = 0
    },
  },
})

export const selectCart = (state) => state.cart
export const selectCartItemById = (newId) => (state) =>
  state.cart.items.find((obj) => obj.newId === newId)

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions

export default cartSlice.reducer
