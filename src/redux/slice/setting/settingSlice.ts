import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getDataStorage, storeDataStorage} from '@libraries';

export const getTypeChart = createAsyncThunk(
  'setting/typeChart',
  async (_, {rejectWithValue}) => {
    const typeChart = getDataStorage('typeChart');
    if (typeChart) {
      return typeChart;
    } else {
      return rejectWithValue('Error get typechart');
    }
  },
);

type InitStateProps = {
  typeChart: string;
  error: any;
};

const initialState: InitStateProps = {
  typeChart: 'pie',
  error: {},
};

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    resetTypeChart: () => initialState,
    setTypeChart: (state, action: PayloadAction<string>) => {
      state.typeChart = action.payload;

      // save to storage
      storeDataStorage('typeChart', action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(getTypeChart.fulfilled, (state, action) => {
      state.typeChart = action.payload;
    });
    builder.addCase(getTypeChart.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const {setTypeChart, resetTypeChart} = settingSlice.actions;
export default settingSlice.reducer;
