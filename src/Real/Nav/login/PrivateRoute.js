import { Restaurant, Router } from '@material-ui/icons'
import React from 'react'
import {Route, Redirect } from 'react-router-dom'
import { useAuth } from './AuthContext'

function PrivateRoute ({component:Component,...rest})  {
    const {currentUSer}=useAuth()
    return (
        <Route {...rest} render={props => 
            currentUSer ? ( 
              <Component {...props} />                 
            ) : ( 
              <Redirect to='/signup' />                 
            )} />
    )
}

export default PrivateRoute
