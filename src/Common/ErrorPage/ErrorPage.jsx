import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error } = useRouteError();

    const goBack = () => {
        window.history.back();
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">

            <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops!</h1>
            <p className="text-lg text-gray-600 mb-4">
                {error ? error.message : 'Something went wrong.'}
            </p>
            <div>
                <button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                    onClick={goBack}
                >
                    Go Back
                </button>
                <button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => window.location.reload()}
                >
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;