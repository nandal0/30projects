import React from 'react'
// import handwritten from 'handwritten.js'
import handwritten from 'handwritten'
const App = () => {
    console.log(handwritten);
    const handwritten = handwritten()
const fs = require('fs')
const rawtext = "Hello, world!"
handwritten(rawtext).then((converted) => {
    converted.pipe(fs.createWriteStream('output.pdf'))
})
    return (
        <div>
            handwritten
        </div>
    )
}

export default App
