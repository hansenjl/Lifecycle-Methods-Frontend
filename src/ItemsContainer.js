import React from 'react'
import Item from './Item'
import FilterBar from './FilterBar'
import ItemForm  from "./ItemForm";

class ItemsContainer extends React.Component {

    isInCart(id){
        return !!this.props.cart.find((item) => item.id === id)
    }

    render(){
        return(
            <div id="ItemsContainer">
              <FilterBar />
              {this.props.items.map(item => <Item  key={item.id} addToCart={this.props.addToCart} isInCart={this.isInCart(item.id)} name={item.name} price={item.price} id={item.id} image1={item.image1} image2={item.image2} />) }
              <ItemForm addToItems={this.props.addToItems} />
            </div>
        )
    }
}

export default ItemsContainer