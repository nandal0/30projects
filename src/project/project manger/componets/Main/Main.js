import { Card, CardContent, CardHeader, Divider, Grid,  Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import Form from './Form'
import mainstyel from './mainstyel'
import List from './List'
import { TrackerContext } from '../context/context'

const Main = () => {
    const classes =mainstyel()
    const {state}=useContext(TrackerContext)
    // console.log(state);
    return (
        <div>
            <Card className={classes.root}>
                <CardHeader title='Expense Tracker' subheader='Powerd by Specchly'/>
                <CardContent>
                    <Typography align='center' variant='h5'>
                        Total balance $100
                    </Typography>
                    <Typography variant='subtitle1' style={{lineHeight:'1.5rem',marginTop:'20px'}}>
                        Try sating Add income for $100 in Categroy sating
                    </Typography>
                    <Divider/>
                    <Form/>
                </CardContent>
                <CardContent className={classes.cardContent}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <List/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default Main
