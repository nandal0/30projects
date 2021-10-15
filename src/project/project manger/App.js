import React from 'react'
import Appp from './Appp'
import { Provider } from './componets/context/context'
const App = () => {
    return (
        <div>
            <Provider>
            <Appp/>
            </Provider>
            
        </div>
    )
}

export default App
