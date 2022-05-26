import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    payload: 0
}
export const depositMoney = createSlice({
    name: 'transact',
    initialState,
    reducers: {
        deposit: (state, amount) => {
            state.payload += amount.payload
        },
        withdraw: (state, amount) => {
            state.payload -= amount.payload
        },
    }
})


export const { deposit, withdraw } = depositMoney.actions
export default depositMoney.reducer