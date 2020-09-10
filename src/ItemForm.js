import React from "react";

class ItemForm extends React.Component {
  state = {
    name: "",
    price: "",
    image1: "",
    image2: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const requestObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item: this.state }),
    };

    fetch("http://localhost:3000/items", requestObj)
      .then((res) => res.json())
      .then((item) => {
        this.props.addToItems(item);
      });
  };

  render() {
    return (
      <div id="ItemForm">
        <h1>Add a New Item:</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type="text" name="name" onChange={this.handleInputChange} />
          <br />
          <label>Price: </label>
          <input
            type="number"
            step=".01"
            name="price"
            onChange={this.handleInputChange}
          />
          <br />
          <label>Image 1 Url: </label>
          <input type="text" name="image1" onChange={this.handleInputChange} />
          <br />
          <label>Image 2 Url: </label>
          <input type="text" name="image2" onChange={this.handleInputChange} />
          <br />
          <input type="submit" value="Create Item" />
        </form>
      </div>
    );
  }
}

export default ItemForm;
