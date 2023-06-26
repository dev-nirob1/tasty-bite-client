import React, { useState } from 'react';

function Blog() {
    const content =
      'Uncontrolled components in React are form elements that manage their own state internally, while controlled components are form elements whose state is controlled by React. Uncontrolled components allow for simpler form implementation but provide less control and validation. Controlled components offer more control and validation, but require additional code to handle the state management. PropTypes is a library used to define the types of expected props in a React component. By defining prop types, you can validate the incoming props against the specified types, ensuring that the correct data is passed to the component. This helps catch bugs and provides better documentation for component usage. Node.js is a runtime environment that allows JavaScript to run on the server-side, while Express.js is a web application framework built on top of Node.js. Node.js provides the runtime environment and core functionalities, while Express.js simplifies the process of building web applications by providing a set of features and abstractions, such as routing, middleware, and HTTP utilities. A custom hook in React is a JavaScript function that utilizes React\'s built-in hooks or other custom hooks to encapsulate reusable logic. Custom hooks allow you to extract and share stateful logic across different components, promoting code reusability and reducing code duplication. They can be used for tasks such as data fetching, form handling, authentication, and more.';
  
    const [showFullContent, setShowFullContent] = useState(false);
    const slicedContent = content.slice(0, 200);
  
    const handleReadMore = () => {
      setShowFullContent(true);
    };
  
    const handleSeeLess = () => {
      setShowFullContent(false);
    };
  
    return (
        <div className="container mx-auto py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">1. Tell us the differences between uncontrolled and controlled components.</h3>
          {showFullContent ? (
            <p>
              Uncontrolled components in React are form elements that manage their own state internally, while controlled components are form elements whose state is controlled by React.
            </p>
          ) : (
            <p>
              Uncontrolled components in React are form elements that manage their own state internally, while controlled components are form elements whose state is controlled by React.{' '}
              <span className="text-blue-500 cursor-pointer" onClick={handleReadMore}>See More</span>
            </p>
          )}
          {showFullContent && (
            <div className="flex justify-end mt-4">
              <button
                className="text-blue-500 hover:text-blue-700 focus:outline-none"
                onClick={handleSeeLess}
              >
                See Less
              </button>
            </div>
          )}
          <div className="flex justify-end mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              onClick={() => {

              }}
            >
              Download
            </button>
          </div>
        </div>
  
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">2. How to validate React props using PropTypes?</h3>
          {showFullContent ? (
            <p>
              PropTypes is a library used to define the types of expected props in a React component. By defining prop types, you can validate the incoming props against the specified types, ensuring that the correct data is passed to the component.
            </p>
          ) : (
            <p>
              PropTypes is a library used to define the types of expected props in a React component. By defining prop types, you can validate the incoming props against the specified types, ensuring that the correct data is passed to the component.{' '}
              <span className="text-blue-500 cursor-pointer" onClick={handleReadMore}>See More</span>
            </p>
          )}
          {showFullContent && (
            <div className="flex justify-end mt-4">
              <button
                className="text-blue-500 hover:text-blue-700 focus:outline-none"
                onClick={handleSeeLess}
              >
                See Less
              </button>
            </div>
          )}
          <div className="flex justify-end mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              onClick={() => {
                
              }}
            >
              Download
            </button>
          </div>
        </div>      
      </div>
    );
  }
  
  export default Blog;