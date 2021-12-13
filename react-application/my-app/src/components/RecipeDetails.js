import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const RecipeDetails = ({ ingredients }) => {
    return ingredients.map(ingredient => {
        return (
            < ul key={uuidv4()} className='ingredient-list' >
                <li className='imgredient-text'>
                    {ingredient.text}
                </li>
                <li className='imgredient-weight'>
                    {ingredient.weigth}
                </li>
            </ ul>
        )
    })
}

export default RecipeDetails
