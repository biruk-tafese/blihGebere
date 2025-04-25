import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">BlihGebere</h2>
            <p className="text-sm text-gray-300 mt-2">
              Your one-stop solution for crop prediction and agricultural resources.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-3">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link to="/resources" className="text-gray-300 hover:text-white">
              Resources
            </Link>
            <Link to="/support" className="text-gray-300 hover:text-white">
              Support
            </Link>
            <Link to="/faqs" className="text-gray-300 hover:text-white">
              FAQs
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} BlihGebere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;