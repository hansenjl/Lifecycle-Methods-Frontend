import React from "react";
import Item from "./Item";
import ItemForm from "./ItemForm";
import ItemShow from "./ItemShow";
import { Switch, Route } from "react-router-dom";

class ItemsContainer extends React.Component {
  state = {
    admin: true,
  };
  isInCart = (id) => {
    return !!this.props.cart.find((item) => item.id === id);
  };

  displayForm() {
    if (this.state.admin) {
      return <ItemForm addToItems={this.props.addToItems} />;
    } else {
      return <h1>You do not have access to this form</h1>;
    }
  }

  renderItems() {
    return this.props.items.map((item) => (
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
    ));
  }

  render() {
    return (
      <div id="ItemsContainer">
        <Switch>
          <Route exact path="/items/new">
            {this.displayForm()}
          </Route>
          <Route
            exact
            path="/items/:id"
            component={({ match }) => {
              return (
                <ItemShow
                  id={match.params.id}
                  items={this.props.items}
                  addToCart={this.props.addToCart}
                  isInCart={this.isInCart}
                />
              );
            }}
          />

          <Route exact path="/items">
            {this.renderItems()}
          </Route>
        </Switch>
      </div>
    );
  }
}

export default ItemsContainer;
