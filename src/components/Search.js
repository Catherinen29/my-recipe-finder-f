import { axiosAPI } from "../apis/AxiosInstance"

export default function SearchRecipes() {


const recipeCategories = () => {
    const response = axiosAPI.get("/random.php")
    .then(res => console.log(res.data.meals[0]))
    .catch(e => console.log(`THIS IS THE ERROR: ${e}`))
}


    return (
        <>
        <h3>Get me a random recipe</h3>

        <button onClick={recipeCategories}>GIMME</button>

        <div>{}</div>

        <div></div>
        </>
    )
}