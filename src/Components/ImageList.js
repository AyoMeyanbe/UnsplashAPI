import ImageShow from "./ImageShow";
import React from 'react'
import './imageList.css'


function ImageList({images}) {
    const renderImages = images.map((image) => {
       return (<ImageShow key={image.id} image={image} />) 
    });

  return <div className="container">{renderImages}</div>

}

export default ImageList
