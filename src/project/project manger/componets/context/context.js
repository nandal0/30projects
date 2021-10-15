import React, { useReducer, createContext } from 'react';

const intialState=[]

export const TrackerContext=createContext(intialState);

const contextReducer=(state,action)=>{
    let transaction;
    switch(action.type){
        case 'delete':
            transaction=state.filter((t)=>t.id!==action.playload)
            return transaction;
        case 'add':
            transaction=[action.playload,...state]
            return transaction;
        default:
            return state; 
    }
}

export const Provider=({children})=>{
    const [state,dispatch] = useReducer(contextReducer,intialState)

    const deleteData=(id)=>{dispatch({type: 'delete',playload:id})}
    const addData=(data)=>{dispatch({type: 'add',playload:data})}
    console.log(state);
    return(
    <TrackerContext.Provider value={{
        deleteData,
        addData,
        state
    }}>
        {children}

        </TrackerContext.Provider>)
}