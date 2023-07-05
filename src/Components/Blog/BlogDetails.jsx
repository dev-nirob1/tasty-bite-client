import React from 'react';

const BlogDetails = ({singleBlog}) => {
    const {question, answer} = singleBlog;
    return (
        <div className='border p-3 md:p-5 rounded-lg m-2 md:m-0'>
            <h2 className='text-xl md:text-2xl underline py-5 md:py-10 font-semibold text-center'>{question}</h2>
            <p>{answer}</p>
        </div>
    );
};

export default BlogDetails;