import { configureStore } from '@reduxjs/toolkit'

import moneyReducer from './action-creators/index'
export const store = configureStore({ reducer: { transact: moneyReducer } })