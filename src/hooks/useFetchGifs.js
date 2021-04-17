import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( categories ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs( categories )
            .then( res => {
                setState({
                    data: res,
                    loading: false
                })
            }) // "setImages" es lo mismo que "gifs => setImages(gifs)"
    }, [ categories ])

    return state;
}
