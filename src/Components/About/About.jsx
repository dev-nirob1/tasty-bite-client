import React from 'react';
import { useLoaderData } from 'react-router-dom';

const About = () => {
    const about = useLoaderData()
    const {title, image, description} = about
    return (
        <div className="min-h-screen py-10 bg-gray-100 flex items-center justify-center">
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <div className="mb-6">
            <img
              src={image}
              alt="Restaurant"
              className="rounded-lg w-full"
            />
          </div>
          <h1 className="text-3xl font-semibold mb-6">{title}</h1>
          <p className="text-gray-700 mb-4">
            {description[0]}
          </p>
          <p className="text-gray-700">
            {description[1]}
          </p>
          <p className="text-gray-700 mt-4">
            {description[2]}
          </p>
        </div>
      </div>
    );
};

export default About;
