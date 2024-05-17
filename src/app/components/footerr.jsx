"use client"
import { useState } from 'react';
import Link from 'next/link';

const FooterBar = () => {
 


  return (
    <footer className="bg-gray-900 text-white py-4 p-10">
            <div className="container mx-auto">
                <div className="justify-between items-center">
                    <div>
                        <p className="text-sm">&copy; {new Date().getFullYear()} Nyaya Kutira. All rights reserved.</p>
                        <p className="text-sm">Developed By TechnoSthala</p>
                    </div>
                   
                </div>
            </div>
        </footer>
  );
};

export default FooterBar;