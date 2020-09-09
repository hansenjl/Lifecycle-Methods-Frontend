import React from 'react';
import Header from './Header'
import ItemsContainer from './ItemsContainer'
import CartContainer from './CartContainer'
import './App.css';

class App extends React.Component{

  state = {
    page: "Items",
    items: [],
    cart: [],
    term: ""
  }

  componentDidMount(){
    // fetch all your initial data here
    fetch('http://localhost:3000/items')
    .then(res => res.json())
    .then(response => {
      this.setState({
        items: response
      })
    })
  }

  changePage = (e) => {
    this.setState((prevState)=>{
      let newPage = prevState.page === "Items" ? "Cart" : "Items"
      return({
        page: newPage
      })
    })
  }

  addToCart = (id) => {
    // button should disappear
    // add the item to the cart array
    let item = this.state.items.find((item) => item.id === id )
    this.setState((prevState) => {
      return {
        cart: [...prevState.cart, item]
      }
    }, () => console.log(this.state))
  }

  render(){
    return (
      <div className="App">
        <Header page={this.state.page} changePage={this.changePage}/>
        {this.state.page === "Items" ? <ItemsContainer cart={this.state.cart} items={this.state.items} addToCart={this.addToCart}/> : <CartContainer cart={this.state.cart}/>}
      </div>
    );
  }
}


export default App;
