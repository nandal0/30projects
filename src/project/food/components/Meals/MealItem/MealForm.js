import React, { useRef, useState } from 'react'
import Input from '../../UI/Input'


import './MealForm.css'

function MealForm(props) {
    const amountInputRef=useRef()

    const[ amountIsValide,setAmountIsValid]=useState(true)


    const submitHandler=(e)=>{
        e.preventDefault();

        const enterAmount = amountInputRef.current.value;
        const enterAmountNumber=+enterAmount

        if(enterAmount.trim().length===0||
        enterAmountNumber<1||
        enterAmountNumber>5
        ){
            setAmountIsValid(false)
            return;
        }

        props.onAddToCart(enterAmountNumber)
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <Input
            ref={amountInputRef}
            label="Amount" input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max:'5',
                step: '1',
                defaultValue: '1'
            }}/>

            <button>+ Add</button>
            {!amountIsValide && <p>Please enter a valid amount</p>} 
        </form>
    )
}

export default MealForm
