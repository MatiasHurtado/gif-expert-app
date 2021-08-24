import React from 'react'
import PropTypes from 'prop-types';


export default function GifGridItem({title,url}) {
    
    return (
        <div className="card animate__animated animate__bounce animate__delay-1s">
            <p>{title}</p>
            <img src={url} alt={title}/>;
        </div>
    )
}

GifGridItem.propTypes ={
    title: PropTypes.string.isRequired,
    url:PropTypes.string.isRequired
}

