import React, { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [accepted, setAccepted] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const photo = event.target.photo.value;
        
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate('/login');
            })
            .catch(error => {
                console.log(error);
            })

    }

    const handleAccepted= (event) => {
        setAccepted(event.target.checked);
    }

    return (
        <div>
            <Container className="mx-auto w-50 mt-4 px-5 py-4 border rounded shadow">
                <h3 className='pb-3 text-center'>Register Here!</h3>
                <Form onSubmit={handleRegister}>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className='fw-bold'>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-bold'>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhoto">
                        <Form.Label className='fw-bold'>Photo URL</Form.Label>
                        <Form.Control type="text" name="photo" placeholder="Photo URL" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check 
                        onClick={handleAccepted}
                        type="checkbox" 
                        name="accept"
                        label={<>Accept <Link to="/terms">Terms & Conditions</Link></>} />
                    </Form.Group>

                    <div className='text-center'>
                        <Button disabled={!accepted} variant="primary" type="submit" >
                            Register
                        </Button>
                    </div>
                    <p className='text-center mt-3'>Already have an account? <Link to="/login">Login Now!</Link></p>

                </Form>
            </Container>
        </div>
    );
};

export default Register;