import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import './RightNav.css';
import QZone from '../qZone/QZone';

const RightNav = () => {
    return (
        <div>
            <h4 className='mb-3'>Login With</h4>
            <div className='mb-5'>
                <Button variant="outline-primary" className='mb-2'><FaGoogle className='me-1'></FaGoogle>Login with Google</Button>
                <Button variant="outline-secondary"><FaGithub className='me-1'></FaGithub>Login with Github</Button>
            </div>
            <div>
                <h4 className='mb-3'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook className='me-1'></FaFacebook>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='me-1'></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='me-1'></FaInstagram>Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-5'>
                <QZone></QZone>
            </div>

            <div className='text-center p-3 bg-img mt-5 text-white py-5 rounded'>

                <h2>Create an Amazing Newspaper</h2>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button variant="danger">Learn More</Button>

            </div>

        </div>
    );
};

export default RightNav;