import React from "react"
import Axios from "axios"
import { useState } from "react";

function GalleryItems({images, fetchImages}){

    const axios = Axios;
    const [toggle, setToggle] = useState(false);

    const showImages = () => {
        axios.put(`/gallery/like/${images.id}`)
        .then((response) => {
            console.log(response);
            fetchImages();
        })
        .catch((err) => {
            console.log(`error updating ${err}`);
        })
    }

    const description = () => {
        if (toggle === false) {
            return (
                <div className="galleryItem">
                    {<img key={images.id} src={images.path} onClick={() => setToggle(!toggle)} />}
                </div>
            )
        } else if (toggle === true) {
            return (
                <div className="description" style={{width: 100, height: 100,}} onClick={() => setToggle(!toggle)}>
                    {images.description}
                </div>
            )
        }
    }
    
    return(
        <div className="galleryItem">
            {description()}
            <button onClick={(e) => showImages(e)}>Likes: {images.likes}</button>
        </div>
    )
}

export default GalleryItems