// src/components/Contact.js
import React from 'react';

const Contact = () => {
    return (
        <section className="py-12 bg-white" id="contact">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-8">Have any questions or need more information? Get in touch with us!</p>
                
                {/* Flex container for company info and map */}
                <div className="flex flex-col md:flex-row justify-between items-start">
                    {/* Company Information Display */}
                    <div className="company-info-container mb-8 md:mr-8 md:w-1/2 p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Company Information</h3>
                        <div className="company-info-content text-center space-y-6">
                            <p className="text-lg text-gray-600">
                                <span className="font-semibold">Company Name:</span> Greenpeak Farms Producer Company Limited
                            </p>
                            <p className="text-lg text-gray-600">
                                <span className="font-semibold">Address:</span> Greenpeak Farms, Madha, Solapur, Maharashtra, India, 413211
                            </p>
                            <p className="text-lg text-gray-600">
                                <span className="font-semibold">Certifications:</span> FSSAI
                            </p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    );
};

export default Contact;