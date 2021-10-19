import React, { useState } from 'react';
import { Form ,Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router';


const Registration = () => {
    const[name , setName] = useState('');
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error ,setError] = useState('');
    const { signInWithEmailPassword } = useAuth();

    const redirect_uri =  '/home';


    const handleName = e =>{
        setName(e?.target?.value);
    }
    const handleEmail = e =>{
        setEmail(e?.target?.value);
    }
    const handlePassword = e =>{
        setPassword(e?.target?.value);
    }


    const handleRegistration = e =>{
        e.preventDefault();
        if(password.length <6){
            setError('Password must be in 6 character or more then ')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError("Password Must be contain 2 upper case")
        }
        signInWithEmailPassword(email ,password);
        history.push(redirect_uri);


    }
    return (
        <div>
           <Container className="mt-5 mb-5">
                <h2 className="text-center">Please <span className="supports-Name">Register</span></h2>
                <Form onSubmit={handleRegistration}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={handleName} type="text" placeholder="Enter your name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p className="text-danger">{error}</p>
                    <Button variant="success" type="submit">
                        Registration
                    </Button>
                </Form>
                <p className="mt-2">Already have an account ? Or Gimail Login <Link to="/login">Login</Link></p>
           </Container>
            
        </div>
    );
};

export default Registration;