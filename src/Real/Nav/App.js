import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router'
import About from './componets/About'
import Category from './componets/blog/Category'
import { Home } from './componets/Home'
import Links from './componets/Links'
import { Menu } from './componets/Menu'
import SearchBar from './componets/SearchBar'
import { Tags } from './componets/Tags'
import SignUp from './login/SignUp'
import Login from './login/Login'
import './App.css'
import PrivateRoute from './login/PrivateRoute'
import Blog from './componets/blog/Blog'

import { AuthProvider } from './login/AuthContext'
import Forgot from './login/Forgot'
import Search from './componets/search/Search'


function App() {
    return (
        <div className="app">
            {/* <SearchBar/> */}


            <div className="menu">

                <Menu />

            </div>
            <AuthProvider>
                
           




            <Switch>

                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/links"
                    component={Links} />
                <PrivateRoute exact path="/category"
                    component={Category} />
                <PrivateRoute exact path="/about"
                    component={About}
                />            </Switch>

            <PrivateRoute exact path="/tags"
                component={Tags} />   
            <PrivateRoute exact path="/blogs"
                component={Blog} />
            <PrivateRoute exact path="/search"
                component={Search} />


<Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="w-100" style={{ maxWidth: '400px' }}>
                         <Route exact path="/signup"
                component={SignUp} />
                         <Route exact path="/login"
                component={Login} />
                         <Route exact path="/forgot-password"
                component={Forgot} />

                    </div>
                </Container>
                </AuthProvider>
           


        </div>
    )
}

export default App
