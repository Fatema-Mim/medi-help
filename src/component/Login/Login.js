import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {logIn} = useAuth();


    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogIn = () =>{
        signInWithGoogle()
        .then((result) => {
            history.push(redirect_uri)
        }).finally(()=> setIsLoading(false))
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleLogin = e =>{
        e.preventDefault();
        history.push(redirect_uri);
        logIn(email , password);

    }
    return (
        <>
            <Container className="mt-5 mb-5">
                <h2 className="text-center">Please <span className="supports-Name">LogIn</span></h2>
                <Form onSubmit={handleLogin} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Login
                    </Button>
                </Form>
                <h1 className="supports-Name"> Or</h1>
                <p>New User ? <Link to="/registration">Registration</Link></p>
                <div>
                    <button type="button" className="btn btn-success" onClick={handleGoogleLogIn}>Sign In With Google</button>
                </div>
            </Container>
        </>
    );
};

export default Login ;
