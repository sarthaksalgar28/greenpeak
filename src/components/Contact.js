// src/components/Contact.js
import React from 'react';

const Contact = () => {
    return (
        <section className="py-12 bg-white" id="contact">
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <p className="text-gray-700 mb-8">Have any questions or need more information? Get in touch with us!</p>
                
                {/* Flex container for company info and additional symbols */}
                <div className="flex flex-col md:flex-row justify-center items-start md:justify-between md:space-x-12">
                    {/* Company Information Display */}
                    <div className="company-info-container mb-8 md:mb-0 md:w-1/2 p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Company Information</h3>
                        <div className="company-info-content text-center space-y-6">
                            <p className="text-lg text-gray-600">
                                <span className="font-semibold">Company Name:</span> Greenpeak Farms Producer Company Limited
                            </p>
                            <p className="text-lg text-gray-600">
                                <span className="font-semibold">Address:</span> Greenpeak Farms, Madha, Solapur, Maharashtra, India, 413211
                            </p>
                            <p className="text-lg text-gray-600">
                                <span className="font-semibold">Email:</span> greenpeakfarms1619@gmail.com
                            </p>
                            <p className="text-lg text-gray-600">
                                <span className="font-semibold">Mobile No : </span> 9322021556/9022983100
                            </p>
                            <p className="text-lg text-gray-600">
                                <span className="font-semibold">Certifications:</span> FSSAI
                            </p>
                        </div>
                    </div>

                    {/* Symbols Container with Links */}
                    <div className="symbols-container mb-8 md:mb-0 md:w-1/2 p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Social Media</h3>
                        <div className="flex justify-center space-x-6">
                            {/* Facebook Icon with Link */}
                            <a href="https://www.facebook.com/share/18q36DhyDS/" target="_blank" rel="noopener noreferrer" className="icon text-blue-600">
                                <i className="fab fa-facebook-f text-3xl"></i>
                            </a>
                            {/* Instagram Icon with Link */}
                            <a href="https://www.instagram.com/greenpeak_farms_ltd?igsh=NmQ5ZGc0dGoycDV3" target="_blank" rel="noopener noreferrer" className="icon text-pink-600">
                                <i className="fab fa-instagram text-3xl"></i>
                            </a>
                            
                        </div>
                        <p className="text-lg text-gray-600 mt-6">Follow us for the latest updates!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
