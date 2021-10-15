import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import ItemList from './ItemList'
import './App.css'

const App = () => {
    const [flashcards, setFlashcards] = useState([])
    const [categories, setCategories] = useState([])

    const categoryE1 = useRef()
    const amountE1 = useRef()

    useEffect(() => {
        axios
            .get('https://opentdb.com/api_category.php')
            .then(res => {
                console.log(res);
                setCategories(res.data.trivia_categories)
            })
        console.log(categories);
    }, [])

    function decode(str) {
        const textArea = document.createElement('textarea')
        textArea.innerHTML = str
        return textArea.value
    }
    function handelSubmit(e) {
        e.preventDefault()
        axios.get('https://opentdb.com/api.php', {
            params: {
              amount: amountE1.current.value,
              category: categoryE1.current.value
            }
          })
          .then(res => {
              console.log(res);
            setFlashcards(res.data.results.map((result, index) => {
                const answer = decode(result.correct_answer);
                const options = [
                    ...result.incorrect_answers.map(a => decode(a)),
                    answer
                ]
                return {
                    id: `${index}-${Date.now()}`,
                    question: decode(result.question),
                    answer,
                    options: options.sort(() => Math.random() - .5)

                }
            }))
        })
    }
    console.log(flashcards);
    return (
        <div>
            <form onSubmit={handelSubmit} className="headerr">
                <div className="form-group">
                    <label>Category</label>
                        <select class="s" ref={categoryE1}>
                            {categories.map(category => {
                                return <option value={category.id} key={category.id}>{category.name}</option>
                            })}
                        </select>



                </div>
                <div className="form-group">
                    <label htmlFor="amount">No. of question</label>
                    <input type="number" id="amount" ref={amountE1} step="1" defaultValue="10" />
                </div>
                <div className="from-group">
                    <button className="btn ">Generate</button>
                </div>
            </form>
            <div className="container">
                <ItemList flashcards={flashcards} />
            </div>
        </div>
    )
}

export default App
