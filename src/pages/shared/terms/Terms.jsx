import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container className='mx-auto mt-5'>
            <h2 className='text-center mb-5'>Terms & Conditions</h2>
            <p className='px-5 mx-5'>Our terms & conditions Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores provident omnis consectetur, earum sit deserunt distinctio, dolorem sequi sunt, harum error quibusdam. Est esse nemo, recusandae et culpa unde natus.</p>
            <p className='px-5 mx-5'>Go Back To <Link to="/register">Register</Link></p>
        </Container>
    );
};

export default Terms;