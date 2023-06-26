import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900">
      <div className="container mx-auto px-4 py-8 sm:py-12 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-white mb-4 sm:mb-0">
          <img src="/path/to/logo.png" alt="Tasty Bite" className="h-8" />
          <h2 className="text-xl font-bold">Tasty Bite</h2>
        </div>
        <nav className="mb-4 text-white sm:mb-0">
          <ul className="flex flex-wrap justify-center sm:justify-start">
            <li className="mr-4"><a href="/" className="hover:text-gray-300">Home</a></li>
            <li className="mr-4"><a href="/menu" className="hover:text-gray-300">Menu</a></li>
            <li className="mr-4"><a href="/reservation" className="hover:text-gray-300">Reservation</a></li>
            <li className="mr-4"><a href="/about" className="hover:text-gray-300">About</a></li>
            <li className="mr-4"><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
        <div className="flex justify-center sm:justify-start">
          <a href="#" className="text-white mr-4 hover:text-gray-300"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-white mr-4 hover:text-gray-300"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
      <div className="bg-gray-800 py-4 text-center">
        <p className="text-gray-300 text-sm">&copy; {new Date().getFullYear()} Tasty Bite. All rights reserved.</p>
        <p className="text-gray-300 text-sm">Designed and developed by <span className='text-[#FF5733] font-semibold italic' >NIROB</span> </p>
      </div>
    </footer>
        </div>
    );
};

export default Footer;