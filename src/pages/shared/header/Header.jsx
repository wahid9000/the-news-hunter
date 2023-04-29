import React from 'react';
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import logo from '../../../assets/logo2.png';


const Header = () => {

    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex gap-2 bg-light p-2'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={100}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit ipsa explicabo hic error facilis dicta inventore nobis omnis, quibusd
                </Marquee>
            </div>

        </Container>
    );
};

export default Header;