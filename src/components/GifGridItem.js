import React from 'react'

export const GifGridItem = ({ url, title, id }) => {
    // console.log(props)
    return (
        <div className="m-3 rounded-md border">
            <p className="text-center py-3 bg-gray-700">{title}</p>
            <img className="h-40 w-40 sm:h-96 sm:w-96" src={url} alt={title} />
        </div>
    )
}
