// import {} from "react"
import React from "react";
import PropTypes from 'prop-types';
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
// import { getGifs } from "../helpers/getGift"

export default function GifGrid({ category }) {
  //Cuando le ponemos : es por que le estamos cambiando el valor al arreglo
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {loading && <p>Loading....</p>}
      <div className ="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
}


GifGrid.propTypes ={
  category: PropTypes.string.isRequired
}