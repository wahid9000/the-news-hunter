import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams;
    const categoryNews = useLoaderData();
    return (
        <div>
            <h4>Dragon News Home</h4>
            <h6><small>Number Of News In This Category: {categoryNews.length}</small></h6>
            <div className='mt-4'>
                {
                    categoryNews.map(news => <NewsCard
                        key={news._id}
                        news={news}
                        >
                    </NewsCard>)
                }
            </div>

        </div>
    );
};

export default Category;