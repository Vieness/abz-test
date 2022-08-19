import {configureStore} from "@reduxjs/toolkit";
import {rootApi} from "./rootApi";
import authReducer from '../features/singUp/slice/singUpSlice'
const store = configureStore({
  reducer: {
   [rootApi.reducerPath]: rootApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rootApi.middleware)
})

export default store