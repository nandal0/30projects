import React from 'react'
import Card from './Card'
import Button from './Button'
import './ErrorModal.css'

function ErrorModal(props) {
    return (
        <div>
        <div className="backdrop"/>

       <Card className="modal">
            <header className="header">
                <h2>{props.title}</h2>

            </header>

            <div className="content">
                <p>{props.message}</p>
            </div>
            <fotter className="actions"><Button>
                
        
                Ok ay</Button></fotter>
        </Card>
        </div>
    )
}

export default ErrorModal
