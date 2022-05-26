import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { actionCreators } from '../state/index'
import { deposit, withdraw } from '../state/action-creators/index'
const Shop = () => {

    const balance = useSelector((state) => state.transact.payload)
    const dispatch = useDispatch();
    // const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);
    return (
        <div>
            <h2>Deposit/Withdraw Money</h2>
            <button className="btn btn-primary mx-2" onClick={() => { dispatch(withdraw(100)) }}>-</button>
            Update Balance ({balance})
            <button className="btn btn-primary mx-2" onClick={() => { dispatch(deposit(100)) }}>+</button>
            {/* <button className="btn btn-primary mx-2" onClick={() => { withdrawMoney(100) }}>-</button>
            Update Balance
            <button className="btn btn-primary mx-2" onClick={() => { depositMoney(100) }}>+</button> */}
        </div>
    )
}

export default Shop
