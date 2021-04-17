import React from 'react'

export const GifGridItem = ({ url, title, id }) => {
    // console.log(props)
    return (
        <div>
            <p>{title}</p>
            <img src={url} alt={title} />
        </div>
    )
}
