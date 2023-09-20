import React from "react";
import { useState, useEffect } from 'react';
import Axios from "axios";
import GalleryItems from "../GalleryItem/GalleryItem";


function GalleryList({galleryList, setGalleryList}) {
    
    const axios = Axios;
    const fetchImages = () => {
        axios.get('/gallery')
        .then((response) => {
          console.log(response.data);
          setGalleryList(response.data);
        })
        .catch((err) => {
          console.log(`Error getting images ${err}`);
        });
    }

    useEffect(() => {
        fetchImages();
    }, []);

    return(
        <div className="galleryList">
            {galleryList.map((images) => (
                <GalleryItems images={images} fetchImages={fetchImages} />
                
            ))}
        </div>
    );
}

export default GalleryList;