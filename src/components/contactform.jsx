"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ContactForm = () => {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify({ title, description, category }),
        });
        const data = await res.json();
        alert('Your Question Posted!! Will reach you soon');
  
        router.push('/');
      } catch (error) {
        alert('Something Went Wrong');
      }
    };
  
    return (
      <div className="flex justify-center  items-center">
        <div className="w-full max-w-md  rounded-lg shadow-md ">
          <h1 className="text-3xl font-medium text-yellow mb-6">Ask Us</h1>
          <form
            noValidate
            action=""
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="title" className="block mb-2 text-sm font-bold">
               Name
              </label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Your Name"
                className="w-full px-3 py-2 border text-black rounded-md"
              />
            </div>
            <div>
              <label htmlFor="description" className="block mb-2 text-sm font-bold">
                Ask anything
              </label>
              <textarea
                id="description"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2.5 border text-black rounded-lg"
                placeholder="Write your Question here..."
              ></textarea>
            </div>
            <div>
              <label htmlFor="category" className="block mb-2 text-sm font-bold">
                Phone Number
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                name="category"
                placeholder="Type your Mobile Number"
                className="w-full px-3 py-2 border text-black rounded-md"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2.5 rounded-lg text-sm"
              >
                Post Your Question | Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default ContactForm;