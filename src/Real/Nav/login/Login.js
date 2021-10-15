import React, { useRef, useState } from 'react'
import { Alert, Button, Card, Form, Nav } from 'react-bootstrap'
import { NavLink,useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext';





const Login = () => {
    const emailRef=useRef();
    const passwordRef=useRef();

    const {login}=useAuth()
    const [error,setError]=useState('')
    const [loading,setLoading]=useState()
    const history=useHistory()

    async function handleSubmit(e){
        console.log(error);
        e.preventDefault()

        
        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value,passwordRef.current.value)
            history.push('/')

        }
        catch{
            setError('Failed to login')
        }
        setLoading(false)
        console.log(error);
    }
    

    return (

    

        <div>
            <Card>
                <Card.Body>
                    {/* {currentUSer.email} */}
                    <h2 className="text-center mb-4"> Login</h2>
                    {error &&
                     <Alert variant="danger">{error}</Alert>
                    }
                    <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                
                   


                    <Button disabled={loading} className="w-100" type="submit">Login</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <NavLink to="/forgot-password">Forgot Password</NavLink>
                    </div>

                    <div className="w-100 text-center mt2">
                        Need to create a new account? <NavLink to="/signUp">Sign up</NavLink>
                    </div>
                </Card.Body>

            </Card>
            
        </div>
    )
}

export default Login
