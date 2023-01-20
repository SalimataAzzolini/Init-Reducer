import { createSlice } from "@reduxjs/toolkit";
const walletSlice = createSlice({
  name: "user",
  initialState: {
    nom: "john",
    email: "john@lebocal.academy",
  },
  reducers: {
    add: (state, action) => {
       return { ...state, [action.property] : action.value} 
    },

  },
});
