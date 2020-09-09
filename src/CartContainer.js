import React from 'react'
import Countdown from './Countdown'

function CartContainer({cart}){

    function showItems(){
        return cart.map(item => {
            return (
                <div key={item.id}>
                    <h4>{item.name} - ${item.price}</h4>
                </div>
            )
        })
    }
    return(
        <div id="CartContainer">
            <Countdown />
            {cart.length === 0 ? <h3>Cart is empty</h3> :showItems()}
        </div>
    )
}

export default CartContainer