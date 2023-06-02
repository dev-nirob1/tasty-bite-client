import React from 'react';

function TermsAndConditionsPage() {
    return (
        <div className="container mx-auto py-8 bg-gray-100">
            <h1 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h1>
            <div className="prose max-w-3xl mx-auto">
                <h2>Introduction</h2>
                <p>
                    Welcome to TastyBite! These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use TastyBite if you do not agree to all the terms and conditions stated on this page.
                </p>

                <h2>License</h2>
                <p>
                    Unless otherwise stated, TastyBite and/or its licensors own the intellectual property rights published on this website. Subject to the license below, all these intellectual property rights are reserved.
                </p>

                <h2>You must not:</h2>
                <ul>
                    <li>Republish material from TastyBite</li>
                    <li>Sell, rent or sub-license material from TastyBite</li>
                    <li>Reproduce, duplicate or copy material from TastyBite</li>
                </ul>

                <h2>Acceptable Use</h2>
                <p>
                    You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of TastyBite or in any way which is unlawful, illegal, fraudulent or harmful.
                </p>

                <h2>Changes</h2>
                <p>
                    We reserve the right to modify these terms and conditions at any time. By continuing to use TastyBite after any changes, you agree to be bound by the revised terms and conditions.
                </p>

                <h2>Contact Us</h2>
                <p>
                    If you have any questions about these terms and conditions, please contact us at support@tastybite.com.
                </p>
            </div>
        </div>
    );
}

export default TermsAndConditionsPage;
