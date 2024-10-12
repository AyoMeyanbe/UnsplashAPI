import React from "react";
import './imageShow.css'

function ImageShow({ image }) {
  return (
    <div>
      <img
        className="image"
        src={image.urls.full}
        alt={image.alt_description}
        width="300"
        height="250"
      />
    </div>
  );
}

export default ImageShow;
