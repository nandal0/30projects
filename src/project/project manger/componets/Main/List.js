import { List as MUIList, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Slide } from '@material-ui/core'
import { Delete, MoneyOff, } from '@material-ui/icons'
import React, { useContext } from 'react'
import { TrackerContext } from '../context/context'
import listStyle from './listStyle'

const List = () => {
    // const trans=useContext(TrackerContext)
    // console.log(trans);
    // const state=[]
    const classes = listStyle()
    const {deleteData,state}=useContext(TrackerContext)
    // console.log(state);
return (
    <div>
        <MUIList dense={false} className={classes.list}
        >

            {state.map((trans) => (
                <Slide direction='down' in mountOnEnter unmountOnExit key={trans.id}>
                    <ListItem>
                        <ListItemAvatar className={trans.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                            <MoneyOff />
                        </ListItemAvatar>
                        <ListItemText primary={trans.category} secondary={`$${trans.amount} - ${trans.date}`}  />
                        <ListItemSecondaryAction >
                            <IconButton edge='end' aria-label='delete' onClick={()=>deleteData(trans.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>


    </div>
)
}

export default List
