import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft, FaBackward } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import EditorsInsights from '../EditorsInsight/EditorsInsights';

const News = () => {
    const newsInfo = useLoaderData();
    const { image_url, title, details, category_id } = newsInfo;
    return (
        <>
            <h4 className='mb-4'>Dragon News</h4>
            <Card className='p-4' style={{ width: '100%' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant={"danger"}><FaArrowLeft></FaArrowLeft> All News In This Category</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInsights></EditorsInsights>
        </>
    );
};

export default News;