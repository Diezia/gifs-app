import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one punch'])
   
    return (
        <div>
            <h1 className="text-4xl mb-3 ml-3">GifExpertApp</h1>
            <AddCategory setCategories={ setCategories } categories={ categories } />
            <>
                {
                    categories.map( (elem) => (
                        <GifGrid
                            key={ elem }
                            categories={ elem } 
                        />
                    ))
                }
            </>
            
        </div>
    )
}
