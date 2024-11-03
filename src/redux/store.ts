import {configureStore} from '@reduxjs/toolkit';
import Reactotron from 'reactotron-react-native';

// slice reducer
import moodReducer from './slice/mood/moodSlice';
import settingReducer from './slice/setting/settingSlice';

export const store = configureStore({
  reducer: {
    moodReducer,
    settingReducer,
  },
  enhancers: getDefaultEnhancers =>
    getDefaultEnhancers().concat((Reactotron as any).createEnhancer!()),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
