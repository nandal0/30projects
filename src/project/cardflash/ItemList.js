import React from 'react'
import Item from './Item'
const ItemList = ({flashcards}) => {
    return (
        <div>
            {flashcards.map(flashcard=>{
                return <Item flashcard={flashcard} key={flashcard.id} />
            })}

        </div>
    )
}

export default ItemList
