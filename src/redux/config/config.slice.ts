import { createSlice } from "@reduxjs/toolkit";
import { ConfigState } from "./type";

const initialState: ConfigState = {
  isVisited: false,
  theme: "light",
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    hydrate: (state, action) => action.payload,
    setVisited: (state, action) => {
      console.log(action);
      return state;
    },
    setTheme: (state, action) => ({ ...state, theme: action.payload }),
  },
});

export const { hydrate, setVisited } = configSlice.actions;
export default configSlice.reducer;
