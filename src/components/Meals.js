import {useEffect, useState} from 'react'
import MealItem from './MealItem.js'

const Meals = () => {
    const [meals, setMeals] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3001/meals')
    .then((response)=>{
        return response.json()
    })
    .then((responseData) => {
        setMeals(responseData)
    })
    
    },[])

    
    
    
    

    return (
        <ul id="meals">
            { 
            console.log(meals)
            }
        </ul>
    )
    
}

export default Meals