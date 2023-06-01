import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='container mx-auto bg-cover bg-center' style={{ backgroundImage: "https://ibb.co/2k0rvYq" }}
        >
            <div className="hero min-h-screen ">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <h1 className="text-5xl font-bold">Welcome to TastyBite</h1>
                        <p className="py-6 text-lg">Discover a Culinary Journey of Exquisite Flavors and Impeccable Service. Indulge in the Finest Cuisine and Delight Your Taste Buds.
                        </p>
                        <Link to='/' className=" px-6 font-medium text-lg py-3 rounded-lg bg-orange-500 hover:bg-orange-600">Our Chef</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;