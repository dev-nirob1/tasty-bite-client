import React from 'react';

const BlogDetails = ({singleBlog}) => {
    const {question, answer} = singleBlog;
    return (
        <div className='border p-5 rounded-lg'>
            <h2 className='text-2xl underline py-10 font-semibold text-center'>{question}</h2>
            <p>{answer}</p>
        </div>
    );
};

export default BlogDetails;