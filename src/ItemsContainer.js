import React from "react";
import Item from "./Item";
import ItemForm from "./ItemForm";
import ItemShow from "./ItemShow";
import { Switch, Route } from "react-router-dom";

class ItemsContainer extends React.Component {
  isInCart(id) {
    return !!this.props.cart.find((item) => item.id === id);
  }

  render() {
    return (
      <div id="ItemsContainer">
        <Switch>
          <Route exact path="/items/new">
            <ItemForm addToItems={this.props.addToItems} />
          </Route>
          <Route
            exact
            path="/items/:id"
            component={({ match }) => (
              <ItemShow
                items={this.props.items}
                addToCart={this.props.addToCart}
                isInCart={this.isInCart(match.params.id)}
                match={match}
                id={match.params.id}
              />
            )}
          />
          <Route exact path="/items">
            {this.props.items.map((item) => (
              <Item
                key={item.id}
                addToCart={this.props.addToCart}
                isInCart={this.isInCart(item.id)}
                name={item.name}
                price={item.price}
                id={item.id}
                image1={item.image1}
                image2={item.image2}
              />
            ))}
          </Route>
        </Switch>
      </div>
    );
  }
}

export default ItemsContainer;
