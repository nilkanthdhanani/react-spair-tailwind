import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 px-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left">
                    <h5 className="font-bold text-lg">Your Company</h5>
                    <p className="text-sm">© 2024 All Rights Reserved</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <a href="/Privacy" className="text-white hover:text-gray-400 mx-2">Privacy Policy</a>
                    <a href="/Terms" className="text-white hover:text-gray-400 mx-2">Terms of Service</a>
                    <a href="/Contact" className="text-white hover:text-gray-400 mx-2">Contact</a>
                </div>
            </div>
        </footer>
    )
}
