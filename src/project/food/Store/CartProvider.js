import React, { useReducer } from 'react';


export const CartContext=React.createContext({
    items:[],
    totalAmount: 0,
    addItem:(itme)=>{},
    removeItem:(id)=>{},
})

const defaultState = {
    items: [],
    totalAmount: 0,
}

const cartReducer =(state,action) =>{
    if(action.type==='ADD'){
            // const updatedItems = state.items.concat(action.item)
            console.log('helo');
            const updatedAmount = state.totalAmount + action.item.price*action.item.amount

            const existingCartItemIndex = state.items.findIndex(item => item.id===action.item.id);
// console.log(existingCartItemIndex);


            const existingCartItem = state.items[existingCartItemIndex]
            console.log(existingCartItem);

            let updatedItems

            if(existingCartItem){
                console.log(action.item.amount);

               const updatedItem={
                   ...existingCartItem,
                   amount: existingCartItem.amount+action.item.amount
               }
                updatedItems =[...state.items];
                updatedItems[existingCartItemIndex]=updatedItem;
            }
            else{
                updatedItems =state.items.concat(action.item)
            }

            return {
                items: updatedItems,
                totalAmount: updatedAmount,
            }
    }
    if(action.type ==='REMOVE'){
        const existingCartItemIndex = state.items.findIndex(item => item.id===action.id);

        const existingCartItem = state.items[existingCartItemIndex];
        const updatedAmount=state.totalAmount-existingCartItem.amount;
        let updatedItems
        if(existingCartItem.amount===1){
            updatedItems=state.items.filter(item=>item.id!==action.id)
        }
                else{
            const updatedItem={...existingCartItem,amount:existingCartItem.amount-1}
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]= updatedItem;

        }
        return{
            items: updatedItems,
            totalAmount:updatedAmount
        }

    }
    return defaultState
}

const CartProvider=(props)=>{

    const [cartState,dispatch]=useReducer(cartReducer,defaultState)

    const addItem=(item)=>{
        dispatch({type: 'ADD', item:item})
    }

    const removeItem=(id)=>{
        dispatch({type: 'REMOVE', id:id})
    }

    const cartConttect={
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItem,
        removeItem: removeItem,

    }

    return (
        <CartContext.Provider value={cartConttect}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider