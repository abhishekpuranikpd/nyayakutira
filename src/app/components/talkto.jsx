"use client";
import { useState } from "react";

const Talk = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className="cursor-pointer rounded-lg border p-2 font-semibold text-white hover:text-yellow-200 dark:text-white"
        onClick={handleButtonClick}
      >
        Talk to a lawyer <br />
        (ವಕೀಲರೊಂದಿಗೆ ಮಾತನಾಡಿ)
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
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
            <h2 className="text-2xl font-bold mb-4">Talk to a Lawyer</h2>
            <p>Please call us at +917676175601 to speak with a lawyer.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Talk;
