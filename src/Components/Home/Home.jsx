import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ChefDetails from '../ChefSection/ChefDetails';
import Love from '../LoveSection/Love';
import Information from '../InfoSection/Information';

const Home = () => {
    const [chefsDetails, setChefsDetails] = useState([])
    const [isloading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:5000/chefs")
            .then((res) => res.json())
            .then((data) => setChefsDetails(data))
        setLoading(false)
    }, []);
    if (isloading) {
        return <div className='h-screen w-full flex items-center justify-center'><span className="loading loading-spinner text-warning loading-lg"></span></div>
    }
    return (

        <div>
            <Banner></Banner>

            <Love></Love>

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

            <Information></Information>

        </div>
    );
};

export default Home;