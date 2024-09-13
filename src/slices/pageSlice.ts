import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PageState {
  text: string;
}

const initialState: PageState = {
  text: '',
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPageText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  },
});

export const { setPageText } = pageSlice.actions;
export default pageSlice.reducer;
