import React from 'react'

function Button(props) {
    return (
        <div>
            <button className={props.className}
            type={props.type|| 'button'} 
            onClick={props.onClick}
            >
                {props.children}

            </button>
        </div>
    )
}

export default Button
