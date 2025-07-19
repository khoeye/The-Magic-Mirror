import { configureStore } from '@reduxjs/toolkit'
import selectedCardDataReducer from "../features/selectedCardSlice";


export default configureStore({
  reducer: {
    selectedCardData: selectedCardDataReducer,
  },
});
