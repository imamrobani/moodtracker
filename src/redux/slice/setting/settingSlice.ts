import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  typeChart: 'pie',
};

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setTypeChart: (state, action: PayloadAction<string>) => {
      state.typeChart = action.payload;
    },
  },
});

export const {setTypeChart} = settingSlice.actions;
export default settingSlice.reducer;
