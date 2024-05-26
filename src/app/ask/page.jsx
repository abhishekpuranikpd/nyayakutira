"use client";
import ContactForm from "@/components/contactform";
import Image from "next/image";
import { useState, useEffect } from "react";

const Talk = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isModalOpen]);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className=" fixed inset-0 bg-black flex flex-col justify-center items-center overflow-auto z-10">
        <button
          className="cursor-pointer mt-[150px] rounded-lg border p-2 font-semibold text-white hover:text-yellow-200 dark:text-white"
          onClick={handleButtonClick}
        >
         For Payment Click Here
        </button>
        <br/>
        <h2 className="text-2xl text-white font-bold mb-4">Ask A Question</h2>
        <p className="mb-4 text-white text-center">After the payment of Rs.250/- Ask Your Questions (Upto 3 Question)</p>
        <ContactForm/>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-lg w-full overflow-hidden">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={handleCloseModal}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">Ask A Questionr</h2>
            <p className="mb-4">After the payment of Rs.250/- Ask Your Questions (Upto 3 Question)</p>
            <div className="overflow-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
              {/* Add your image or other content here */}
              <div className="overflow-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
              <Image src="/payment.jpg" alt="" width={400} height={400} />

              <ContactForm/>
            </div>
            </div> 
          </div>
        </div>
      )}
    </>
  );
};

export default Talk;
