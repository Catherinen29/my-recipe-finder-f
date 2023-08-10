import { axiosAPI } from "../apis/AxiosInstance"
import { useEffect, useState } from "react"

export default function SearchRecipes() {

const [randomRecipe, setRandomRecipe] = useState([])

const recipeCategories = () => {
    const numOfMeals = 5

    const response = axiosAPI.get("/random.php")
    .then(res => {
        console.log(res.data.meals)
        setRandomRecipe(res.data.meals.slice(0, numOfMeals))
    })
    .catch(e => console.log(`THIS IS THE ERROR: ${e}`))
}


    // const [randomMeals, setRandomMeals] = useState([]);

    // useEffect(() => {
    //   fetchRandomMeals();
    // }, []);
  
    // const fetchRandomMeals = async () => {
    //   try {
    //     const numberOfMeals = 5; // Change this number to the desired number of random meals
    //     const response = await axiosAPI.get(
    //       `https://www.themealdb.com/api/json/v1/1/random.php`
    //     );
    //     setRandomMeals(response.data.meals.slice(0, numberOfMeals));
    //   } catch (error) {
    //     console.error('Error fetching random meals:', error);
    //   }
    // }


    return (
        <>
        <h3>Get me a random recipe</h3>

        <button onClick={recipeCategories}>GIMME</button>

        <div>This is the result: 
            <ul>
                {randomRecipe.map((recipe, index) => (
                    <li key={index}><p>{recipe.strMeal}</p></li>
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