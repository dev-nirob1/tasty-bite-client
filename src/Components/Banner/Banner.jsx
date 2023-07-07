import React from 'react';

const Banner = () => {
    return (
        <div className='bg-cover bg-center' style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://i.ibb.co/nLqy78r/Pngtree-food-overlooking-the-background-banner-1055258.jpg')" }}
        >
            <div className="hero min-h-screen text-white">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <h1 className="text-5xl font-bold">Welcome to TastyBite</h1>
                        <p className="py-6 text-lg">Discover a Culinary Journey of Exquisite Flavors and Impeccable Service. Indulge in the Finest Cuisine and Delight Your Taste Buds.
                        </p>
                        <a href='#chef' className=" px-9 font-medium text-lg py-3 rounded-full bg-orange-500 hover:bg-orange-600">Our Chef</a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;