import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import first from '../../../assets/1.png';
import second from '../../../assets/2.png';
import third from '../../../assets/3.png';
import { FaCalendar, FaRegCalendar } from 'react-icons/fa';
import moment from 'moment';

const EditorsInsights = () => {
    return (
        <div className='mt-5 mb-5'>
            <h4 className='mb-4'>Editors Insight</h4>
            <CardGroup className='gap-3'>
                <Card className='p-4 rounded'>
                    <Card.Img variant="top" src={first} />
                    <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                    </Card.Body>
                    <Card.Footer className='d-flex align-items-center gap-1'>
                        <FaRegCalendar></FaRegCalendar> 
                        {moment().format("MMM D, YYYY")}
                    </Card.Footer>
                </Card>
                <Card className='p-4 border rounded'>
                    <Card.Img variant="top" src={second} />
                    <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                    </Card.Body>
                    <Card.Footer className='d-flex align-items-center gap-1'>
                        <FaRegCalendar></FaRegCalendar> 
                        {moment().format("MMM D, YYYY")}
                    </Card.Footer>
                </Card>
                <Card className='p-4 border rounded'>
                    <Card.Img variant="top" src={third} />
                    <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                    </Card.Body>
                    <Card.Footer className='d-flex align-items-center gap-1'>
                        <FaRegCalendar></FaRegCalendar> 
                        {moment().format("MMM D, YYYY")}
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default EditorsInsights;