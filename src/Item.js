import React, {Component} from 'react'

class Item extends Component {

    state={
        imageFront: false
    }


    componentDidUpdate(){
        console.log("UPDATED ", this.props.id)
    }

    shouldComponentUpdate(nextProps){
        // was there a change between the new props and what we currently have?
        return !!(this.props.isInCart !== nextProps.isInCart)
    }

    toggleImageSrc = () => {
        this.setState((prevState)=>{
            return {imageFront: !prevState.imageFront}
        }, ()=>console.log(this.state))
    }

    displayImage(){
        console.log(this.props.image1)
        console.log(this.props.image2)
        return this.state.imageFront ? this.props.image1 : this.props.image2
    }

    render(){
        return (
            <div className="item" id={this.props.id + "-item"}>
                <h3>{this.props.name}</h3>
                <img alt={this.props.name + " image"} src={this.displayImage()} onClick={this.toggleImageSrc}/>
                <br/>
                Price: {this.props.price}
                <br/>
                {!this.props.isInCart && <button onClick={(e) => this.props.addToCart(this.props.id)}>Add To Cart</button> }

            </div>
        )
    }
}

export default Item