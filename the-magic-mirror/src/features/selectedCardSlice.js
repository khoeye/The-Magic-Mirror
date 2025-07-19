import { createSlice } from '@reduxjs/toolkit'

export const selectedCardSlice = createSlice({
  name: 'selectedCardData',
  initialState: {
    entities: []
  },
  reducers: {
    clearCardSlice: (state) => {
      state.entities = []
    },
    updateCardSlice: (state, action) => {
     
      state = action.payload
  },
}})

// Action creators are generated for each case reducer function
export const { clearCardSlice, updateCardSlice } = selectedCardSlice.actions;


export default selectedCardSlice.reducer;