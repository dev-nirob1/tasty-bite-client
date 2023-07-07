import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900">
      <div className="container mx-auto px-4 py-8 sm:py-12 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-white mb-4 sm:mb-0">
          <h2 className="text-3xl text-[#FF5733] font-bold hover:underline hover:italic">Tasty Bite</h2>
        </div>
        <nav className="mb-4 text-white sm:mb-0">
          <ul className="flex flex-wrap justify-center sm:justify-start">
            <li className="mr-4"><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li className="mr-4"><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
            <li className="mr-4"><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li className="mr-4"><Link to="/login" className="hover:text-gray-300">Login</Link></li>
            <li className="mr-4"><Link to="/Register" className="hover:text-gray-300">Register</Link></li>
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