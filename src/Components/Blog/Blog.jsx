import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogDetails from './BlogDetails';

function Blog() {
  const blog = useLoaderData()
  return (
    <div className="container mx-auto py-8">
      <h2 className='text-4xl underline py-10 font-semibold text-center'>Blogs</h2>
      <div className='grid grid-cols-2 gap-5'>
        {
          blog.map(singleBlog => <BlogDetails singleBlog={singleBlog} key={singleBlog.id}></BlogDetails>)
        }
      </div>
    </div>
  );
}

export default Blog;