import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ChefDetails from '../ChefSection/ChefDetails';

const Home = () => {
    const [chefsDetails, setChefsDetails] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/chefs")
            .then((res) => res.json())
            .then((data) => setChefsDetails(data))
    }, []);

    return (

        <div>
            <Banner></Banner>

            <div className='container mx-auto py-16' id="chef">
                <h2 className='text-gray-900 text-center text-4xl font-semibold underline mb-16'>Our Best Chefs</h2>
                <div className='grid grid-cols-3 gap-8'>
                    {
                        chefsDetails.map(singleChef => (
                            <ChefDetails key={singleChef.id} singleChef={singleChef}></ChefDetails>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;