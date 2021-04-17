import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ categories }) => {
    const { data:images, loading } = useFetchGifs( categories )
    return (
        <div>
            <h3>{ categories }</h3>
            <p>{ loading && 'cargando...' }</p>
            {
                images.map( (image) => (
                    <GifGridItem
                        key= { image.id }
                        { ...image } // las propiedades que estoy mandando son las de elem con el spread. En este caso: id, title, url.
                    />
                ))
                
            }
        </div>
        
    )
}
