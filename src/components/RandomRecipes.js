import { useState } from "react";
// import uuid from 'react-uuid';


export default function RandomRecipes(props){

    const { recipe } = props;

        return (

            <div>{recipe.strMeal}</div>
    
        )
    }