import {useState} from 'react'

const Meals = () => {
    const [meals, setMeals] = useState([])

    fetch('http://localhost:3001/meals')
    .then((response)=>{
        return response.json()
    })
    .then((responseData) => {
        setMeals(responseData)
    })
    
    

    return (
        <ul id="meals">
            { 
               console.log(meals)
            }
        </ul>
    )
    
}

export default Meals