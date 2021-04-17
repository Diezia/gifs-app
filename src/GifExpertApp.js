import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one punch'])
   
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } categories={ categories } />
            <hr />
            <ol>
                {
                    categories.map( (elem) => (
                        <GifGrid
                            key={ elem }
                            categories={ elem } 
                        />
                    ))
                }
            </ol>
            
        </div>
    )
}
