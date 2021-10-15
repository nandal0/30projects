import React, { useRef, useState } from 'react'
import { Alert, Button, Card, Form, Nav } from 'react-bootstrap'
import { NavLink,useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext';





const Forgot = () => {
    const emailRef=useRef();

    const {resetPassword}=useAuth()
    const [error,setError]=useState('')
    const [message,setMessage]=useState('')
    const [loading,setLoading]=useState()
    const history=useHistory()

    async function handleSubmit(e){
        console.log(error);
        e.preventDefault()

        
        try{
            setError('')
            setLoading(true)
           
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for futher instructions')

        }
        catch{
            setError('Failed to reset password')
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
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>

                
                   


                    <Button disabled={loading} className="w-100" type="submit">Reset Password</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <NavLink to="/login">Login</NavLink>
                    </div>

                    <div className="w-100 text-center mt2">
                        Need to create a new account? <NavLink to="/signUp">Sign up</NavLink>
                    </div>
                </Card.Body>

            </Card>
            
        </div>
    )
}

export default Forgot
