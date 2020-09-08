import React, {Component} from 'react'

class Item extends Component {


    componentDidUpdate(){
        console.log("UPDATED ", this.props.id)
    }

    shouldComponentUpdate(nextProps){
        // was there a change between the new props and what we currently have?
        return !!(this.props.isInCart !== nextProps.isInCart)
    }


    render(){
        return (
            <div className="item" id={this.props.id + "-item"}>
                <h3>{this.props.name}</h3>
                <img alt={this.props.name + " image"} src={this.props.image1}/>
                <br/>
                Price: {this.props.price}
                <br/>
                {!this.props.isInCart && <button onClick={(e) => this.props.addToCart(this.props.id)}>Add To Cart</button> }

            </div>
        )
    }
}

export default Item