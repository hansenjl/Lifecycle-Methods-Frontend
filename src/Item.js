import React from 'react'

function Item({name, image1, image2, price, id}){
    return (
        <div className="item" id={id + "-item"}>
            <h3>{name}</h3>
            <img alt={name + " image"} src={image1}/>
            <br/>
            Price: {price}
            <br/>
            <button>Add To Cart</button>
        </div>
    )
}

export default Item