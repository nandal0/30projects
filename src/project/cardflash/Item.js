import React from 'react'

const Item = ({ flashcard }) => {
    return (
        <div className="g">
            <div className="c">
                Question {flashcard.question}
                <div className="options">
                    {flashcard.options.map(item => {
                        return <div key={item}> {item} </div>
                    })}
                </div>

            </div>
        </div>
    )
}

export default Item
