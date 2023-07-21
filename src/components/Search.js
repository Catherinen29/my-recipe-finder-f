import axios from "axios"

export default function SearchRecipes() {


// const apiAxios = axios.create({
//     baseURL: "www.themealdb.com/api/json/v1/1",
//     headers: {
//         "Content-Type": "application/json"
//     }
// })

const recipeCategories = () => {
    const response = axios.get("https://www.themealdb.com/api/json/v1/1/random.php", {
        headers: {
            "Content-Type": "application/json" 
        }})
    .then(res => console.log(res.data.meals[0]))
    .catch(e => console.log(`THIS IS THE ERROR: ${e}`))
}


    return (
        <>
        <h3>Get me a random recipe</h3>

        <button onClick={recipeCategories}>GIMME</button>

        </>
    )
}