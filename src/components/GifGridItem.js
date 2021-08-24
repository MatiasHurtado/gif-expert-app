import React from 'react'

export default function GifGridItem({title,url}) {
    
    return (
        <div className="card animate__animated animate__bounce animate__delay-1s">
            <p>{title}</p>
            <img src={url} alt={title}/>;
           
        </div>
    )
}
