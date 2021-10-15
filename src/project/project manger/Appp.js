import { Grid } from '@material-ui/core'
import React from 'react'
import appstyle from './appstyle'
import Details from './componets/Details'
import Main from './componets/Main/Main'

const App = () => {
    const classes=appstyle();
    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height: '100vh'}}>
               <Grid item xs={12} sm={4}>
               <Details title="Income"/>
               </Grid>
               <Grid item xs={12} sm={3}>
               <Main/>
               </Grid>
               <Grid item xs={12} sm={4}>
               <Details title='Expense'/>
               </Grid>
            </Grid>
        </div>
    )
}

export default App
