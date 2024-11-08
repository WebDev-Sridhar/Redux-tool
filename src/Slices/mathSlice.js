import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const mathSlice = createSlice({
  name: "count",
  initialState, // renamed from initialCount to initialState
  reducers: {
    add: (state, action) => {
      state.count = state.count + action.payload;
    },
    sub: (state, action) => {
      if (state.count !== 0) {
        state.count = state.count - action.payload;
      }
    },
    clear: (state) => {
      state.count = 0;
    },
  },
});

export const { add, sub, clear } = mathSlice.actions;

export default mathSlice.reducer;
