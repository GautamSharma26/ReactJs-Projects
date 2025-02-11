import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from '../Slice/CounterSlice'

export const store = configureStore({
    reducer:{counter: counterReducer}
})