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

  render(){
    return (
      <div className="App">
        <Header />
        {this.state.page === "Items" ? <ItemsContainer items={this.state.items}/> : <CartContainer cart={this.state.cart}/>}
      </div>
    );
  }
}


export default App;
