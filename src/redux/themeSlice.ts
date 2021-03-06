import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isDark: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setToggle(state) {
      state.isDark = !state.isDark;
    },
    setInit(state, action) {
      state.isDark = action.payload;
    },
  },
});

export default themeSlice;
