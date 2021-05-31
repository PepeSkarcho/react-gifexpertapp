import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Ellie']);

    /*
    const handleAdd = () =>{
        setCategories([...categories, 'Tommy']);
    }
    */



    return (
        <>
        <h1>GifExpertApp</h1>
        <hr/>
        <AddCategory setCategories = {setCategories}/>
        <ol>
            {
                categories.map(category =>                  
                        <GifGrid 
                        key ={category}
                        category = {category}/>
                )
            }
        </ol>
        </>
    )
}

export default GifExpertApp;