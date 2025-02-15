import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as selectedItemsReducer } from './selectedItems/selectedItems.slice';
import { api } from './api/api';

const reducers = combineReducers({
  selectedItems: selectedItemsReducer,
  [api.reducerPath]: api.reducer,
});
export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  // posts: postsReducer,
  // comments: commentsReducer,
  // users: usersReducer,
});

export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;
