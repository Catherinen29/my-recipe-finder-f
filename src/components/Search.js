import { axiosAPI } from "../apis/AxiosInstance"
import { useEffect, useState } from "react"
import RandomRecipes from "./RandomRecipes"

export default function SearchRecipes() {

    useEffect(() => {
        recipeCategories()
    }, [])

const [randomRecipe, setRandomRecipe] = useState([])

const recipeCategories = async () => {
    
//     let arr1 = [...Array(5).keys()]

    const response = (

            axiosAPI.get("/random.php")
                .then(res => {
                    // console.log(`recipe: `, res.data.meals)
                    setRandomRecipe([...randomRecipe, res.data.meals])
                    console.log(`randomRecipes: `, randomRecipe)
            })
                .catch(e => console.log(`THIS IS THE ERROR: ${e}`))
    )

                // for (let i = 0; i <= arr1.length; i++){
                //     axiosAPI.get("/random.php")
                //     .then(res => {
                //         // console.log(`recipe: `, res.data.meals)
                //         setRandomRecipe([...randomRecipe, res.data.meals])
                //         // console.log(`randomRecipes: `, randomRecipe)
                //     })
                //     .catch(e => console.log(`THIS IS THE ERROR: ${e}`))

                // }
                // console.log(randomRecipe)
                // const [randomRecipe, setRandomRecipe] = useState([])

                // const [counter, setCounter] = useState(0)
                
                // const recipeCategories = async () => {
                    
                //     let arr1 = [...Array(5).keys()]
                
                //     if (counter <=5){
                
                //             axiosAPI.get("/random.php")
                //             .then(res => {
                //                 console.log(`recipe: `, res.data.meals)
                //                 setRandomRecipe([...randomRecipe, res.data.meals])
                                
                //         })
                //             .catch(e => console.log(`THIS IS THE ERROR: ${e}`))
                
                //             setCounter(counter + 1)     
                //     } 
                
                //  console.log(`randomRecipes: `, randomRecipe)
                
                // }

}


    return (
        <>
        <h3>Get me a random recipe</h3>

        <button onClick={recipeCategories}>GIMME</button>

        <div>This is the result: 
            <ul>
                {randomRecipe.map((recipe, index) => (
                    <li key={index}><p>{randomRecipe[0][0].strMeal}</p></li>
                    // <RandomRecipes recipe={recipe} />
                ))}
                    {/* {randomMeals.map((meal) => (
          <li key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strMeal}</p>
          </li> */}
        {/* ))} */}

            </ul>
        </div>

        <div></div>
        </>
    )
}