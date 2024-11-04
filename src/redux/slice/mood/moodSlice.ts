import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Colors} from '@constants';
import {getDataStorage, storeDataStorage} from '@libraries';

export const getMoods = createAsyncThunk(
  'mood/fetch-mood',
  async (_, {rejectWithValue}) => {
    const mood = getDataStorage('mood');
    if (mood) {
      return mood;
    } else {
      return rejectWithValue('Error get moods');
    }
  },
);

type Mood = {
  type: MoodType;
  value: number;
  color: string;
  frontColor: string;
  percentage: number;
  timestamp?: string;
  topLabelComponent?: () => JSX.Element;
};

type MoodState = {
  moods: Mood[];
  error: any;
};

const initialState: MoodState = {
  moods: [
    {
      type: 'happy',
      value: 0,
      color: Colors.TEXT_HAPPY,
      frontColor: Colors.TEXT_HAPPY,
      percentage: 0,
      timestamp: '',
    },
    {
      type: 'neutral',
      value: 0,
      color: Colors.TEXT_NEUTRAL,
      frontColor: Colors.TEXT_NEUTRAL,
      percentage: 0,
      timestamp: '',
    },
    {
      type: 'sad',
      value: 0,
      color: Colors.TEXT_SAD,
      frontColor: Colors.TEXT_SAD,
      percentage: 0,
      timestamp: '',
    },
    {
      type: 'stress',
      value: 0,
      color: Colors.TEXT_STRESSED,
      frontColor: Colors.TEXT_STRESSED,
      percentage: 0,
      timestamp: '',
    },
  ],
  error: {},
};

export const moodSlice = createSlice({
  name: 'mood',
  initialState,
  reducers: {
    resetMood: () => initialState,
    setUpdateMood: (state, action: PayloadAction<MoodType>) => {
      const index = state.moods.findIndex(mood => mood.type === action.payload);
      if (index !== -1) {
        state.moods[index].value += 1;
        state.moods[index].timestamp = new Date().toISOString();

        // calculate total
        const totalValue = state.moods.reduce(
          (sum, mood) => sum + mood.value,
          0,
        );

        // update percentage
        state.moods.forEach(mood => {
          mood.percentage = Math.round((mood.value / totalValue) * 100);
        });
      }

      // save to storage
      storeDataStorage('mood', state.moods);
    },
  },
  extraReducers: builder => {
    builder.addCase(getMoods.fulfilled, (state, action) => {
      state.moods = action.payload;
    });
    builder.addCase(getMoods.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const {setUpdateMood, resetMood} = moodSlice.actions;
export default moodSlice.reducer;
