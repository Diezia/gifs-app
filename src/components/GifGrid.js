import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ categories }) => {
    const { data:images, loading } = useFetchGifs( categories )
    return (
        <>
            <h3 className="text-3xl ml-3">{ categories }</h3>
            <p>{ loading && 'cargando...' }</p>
            <div className="flex flex-row flex-wrap">
                {
                    images.map( (image) => (
                        <GifGridItem
                            key= { image.id }
                            { ...image } // las propiedades que estoy mandando son las de elem con el spread. En este caso: id, title, url.
                        />
                    ))
                    
                }
            </div>
        </>
        
    )
}
