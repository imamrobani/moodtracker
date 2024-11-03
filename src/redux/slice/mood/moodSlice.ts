import {createSlice} from '@reduxjs/toolkit';

export const moodSlice = createSlice({
  name: 'mood',
  initialState: {
    mood: '',
  },
  reducers: {
    setMood: (state, action) => {
      state.mood = action.payload;
    },
  },
});

export const {setMood} = moodSlice.actions;
export default moodSlice.reducer;
