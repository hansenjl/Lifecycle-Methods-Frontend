import React from "react";
import Header from "./Header";
import ItemsContainer from "./ItemsContainer";
import CartContainer from "./CartContainer";
import "./App.css";
import {
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  state = {
    page: "Items",
    items: [],
    cart: [],
    term: "",
  };

  componentDidMount() {
    // fetch all your initial data here
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          items: response,
        });
      });
  }

  addToCart = (id) => {
    // button should disappear
    // add the item to the cart array
    let item = this.state.items.find((item) => item.id === id);
    this.setState(
      (prevState) => {
        return {
          cart: [...prevState.cart, item],
        };
      },
      () => console.log(this.state)
    );
  };

  toggleView = (e) => {
    // change the view
    this.setState((prevState) => {
      let newPage = prevState.page === "Items" ? "Cart" : "Items";
      return { page: newPage };
    });
  };

  addToItems = (item) => {
    this.setState((prevState) => {
      return { items: [...prevState.items, item] };
    });
  };

  render() {
    return (

      <div className="App">
        <Header toggleView={this.toggleView} currentPage={this.state.page} />
        <Switch>
          <Route path="/items">
            <ItemsContainer
                addToItems={this.addToItems}
                cart={this.state.cart}
                items={this.state.items}
                addToCart={this.addToCart}
              />
          </Route>
          <Route exact path="/cart">
            <CartContainer cart={this.state.cart} />
          </Route>
          <Route exact path="/" render={()=><h1>Welcome!</h1>} />
        </Switch>
      </div>

    );
  }
}

export default App;
