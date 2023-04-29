import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        

        loginUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate('/category/0');
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <>
            <Container className="mx-auto w-50 mt-5 px-5 py-5 border rounded shadow">
                <h3 className='pb-3 text-center'>Login Now!</h3>
                <Form onSubmit = {handleLogin}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-bold'>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>

                    <div className='text-center'>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                    <p className='text-center mt-3'>Don't have an account? <Link to="/register">Register Now!</Link></p>

                    <div className='text-center'>
                        <Button variant="danger" type="submit">
                            Forgot Password?
                        </Button>
                    </div>

                </Form>
            </Container>

        </>
    );
};

export default Login;