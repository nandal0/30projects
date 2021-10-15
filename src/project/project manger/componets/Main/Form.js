import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { TrackerContext } from '../context/context'
import { v4 as uuidv4 } from 'uuid'
import { incomeCategories, expenseCategories } from './Category'
const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: new Date(),
}
const Form = () => {

    const [formData, setFormData] = useState(initialState)
    // console.log(formData);

    const category = formData.type === 'Income' ? incomeCategories : expenseCategories
    const { addData } = useContext(TrackerContext)
    const createTranscation = (e) => {
        e.preventDefault()
        const transcation = { ...formData, amount: Number(formData.amount), id: uuidv4() }
        addData(transcation)
        // console.log(addData);
        setFormData(initialState)
    }
    return (
        <div>
            <Grid container spacing={2}>
                <Grid itme xs={12}>
                    <Typography align="center" variant="subtitle2" gutterBottom>
                        ...
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Type</InputLabel>
                        <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                            <MenuItem value='Income'>Income</MenuItem>
                            <MenuItem value='Expense'>Expenses</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                            {category.map((cat)=>
                            <MenuItem key={cat.type} value={cat.type}>{cat.type}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                        type='number' label='Amount' fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        type='date' label='Date' fullWidth />
                </Grid>
                <Button
                    onClick={createTranscation}
                    style={{ marginTop: '20px', }} variant='outlined' color='primary' fullWidth>Create</Button>
            </Grid>
        </div>
    )
}

export default Form
