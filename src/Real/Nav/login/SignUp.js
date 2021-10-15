import React, { useRef, useState } from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import { NavLink,useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext';




const SignUp = () => {
    const emailRef=useRef();
    const passwordRef=useRef();
    const passwordConfirmRef=useRef();

    const {signup,currentUSer}=useAuth()
    const [error,setError]=useState('')
    const [loading,setLoading]=useState()
    const history=useHistory()


    async function handleSubmit(e){
        console.log(error);
        e.preventDefault()

        if(passwordRef.current.value!==passwordConfirmRef.current.value){
            return setError("password do not match")
        }

        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value,passwordRef.current.value)
            history.push('/home')


        }
        catch{
            setError('Failed to create an acconunt')
        }
        setLoading(false)
        console.log(error);
    }
    

    return (

    

        <div>
            <Card>
                <Card.Body>
                    {/* {currentUSer.email} */}
                    <h2 className="text-center mb-4">Sign Up</h2>
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
                    <Form.Group id="password-confirm">
                    <Form.Label>Confrim Password</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} required />
                    </Form.Group>


                    <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                    </Form>

                    <div className="w-100 text-center mt2">
                        Already have an account? <NavLink to="/login">Login</NavLink>
                    </div>
                </Card.Body>

            </Card>
            
        </div>
    )
}

export default SignUp
