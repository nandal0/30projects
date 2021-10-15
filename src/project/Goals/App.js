import React, { useEffect, useState } from 'react'
import Airtable from 'airtable'
import Goal from './Goal'

const App = () => {
    const [goals,setGoals]=useState([])
    const [updates,setUpdates]=useState([])

    const base=new Airtable({apiKey:"key6sDcm8Pw2mT2tB"}).base('appawjQi2AjpeZvXa')

    useEffect(()=>{
        base('goals')
        .select({view:'Grid view'})
        .eachPage((records,fetchNextPage)=>{
            setGoals(records)
            console.log(records);
            fetchNextPage();
        })
        base('updates')
        .select({view:'Grid view'})
        .eachPage((records,fetchNextPage)=>{
            console.log(records);
           setUpdates(records)
            fetchNextPage();
        })
    },[])
    return (
        <div>
            <h1>My goals</h1>

           {goals.map(goal =>(
               
                <Goal
                key={goal.id}
                goal={goal}
                updates={updates.filter(update=>update.fields.goalid===goal.id)}
                />
    
           ))}

        </div>
    )
}

export default App
