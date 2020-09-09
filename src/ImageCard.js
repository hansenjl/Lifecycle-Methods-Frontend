import React from 'react'

function ImageCard({name, image}){

    return(
        <img alt={name + " image"} src={image}/>
    )

}

export default ImageCard