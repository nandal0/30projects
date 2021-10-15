import React from 'react'
import Cart from '../Cart/Cart'
import AvaliableMeal from './AvaliableMeal'
import MealSummary from './MealSummary'

function Meals() {
    return (
        <div>
            {/* <Cart/> */}
            
            <MealSummary/>
            <AvaliableMeal/>
        </div>
    )
}

export default Meals
