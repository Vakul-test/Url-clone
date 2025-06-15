import { configureStore } from '@reduxjs/toolkit'
import urlReducer from './slice/urlSlice'
import authReducer from './slice/authSlice'

const store = configureStore({
  reducer: {
    url: urlReducer,
    auth: authReducer,
  },
})

export default store 