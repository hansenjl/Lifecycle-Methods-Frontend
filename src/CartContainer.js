import React from "react";
import { Link } from "react-router-dom";

class CartContainer extends React.Component {
  state = {
    timeLeft: 60,
    timerId: null,
  };

  componentDidMount() {
    // start timer
    // update state to keep track of our timer id
    const timer = setInterval(() => {
      console.log(this.state);
      this.setState((prevState) => {
        return { timeLeft: prevState.timeLeft - 1 };
      });
    }, 1000);

    this.setState({ timerId: timer });
  }

  componentWillUnmount() {
    // do any cleanup
    clearInterval(this.state.timerId);
  }

  showItems() {
    return this.props.cart.map((item) => {
      return (
        <div key={item.id}>
          <Link to={`/items/${item.id}`}>
            {item.name} - ${item.price}{" "}
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div id="CartContainer">
        <h3>You have {this.state.timeLeft} seconds to check out</h3>
        {this.showItems()}
      </div>
    );
  }
}

export default CartContainer;
