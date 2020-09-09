import React, {Component} from 'react'
import ImageCard from './ImageCard'

class Item extends Component {

    state = {
        front: true
    }

    componentDidUpdate(){
        console.log("UPDATED ", this.props.id)
    }

    shouldComponentUpdate(nextProps, nextState){
        // was there a change between the new props and what we currently have?

        return this.props.isInCart !== nextProps.isInCart || nextState !== this.state
    }

    toggleImage = (e) =>{
        this.setState((prevState)=>{
            return {front: !prevState.front}
        }, console.log(this.state))
    }

    showImage(){
        return !!this.state.front ? this.props.image1 : this.props.image2
    }


    render(){
        return (
            <div className="item" id={this.props.id + "-item"}>
                <h3>{this.props.name}</h3>
                <div onClick={this.toggleImage}>
                    <ImageCard name={this.props.name} image={this.showImage()}/>
                </div>
                <br/>
                Price: {this.props.price}
                <br/>
                {!this.props.isInCart && <button onClick={(e) => this.props.addToCart(this.props.id)}>Add To Cart</button> }

            </div>
        )
    }
}

export default Item