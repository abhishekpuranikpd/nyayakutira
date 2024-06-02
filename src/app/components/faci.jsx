"use client";
import { useState } from "react";
import Image from "next/image";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const facilities = [
    {
      name: "Criminal LAW",
      imageUrl: "/1.jpg",
      description:
        "Our team deals in all all type of criminal cases like Murder, Theft, Abuse, Trespassing, Assult, Cheating,Cheque bounce, Domestic  Violence , Cyber Crime etc and also helps to file Anticipatory bail to regular bail, quash the case and also helps to file Appeal against the order of lower Court. Our team also help with the registration of an FIR when the Police refuse to do so.Our team will also help to set Client’s trial strategy  by finding out the mistakes done by the authority concerned.",
    },
    {
      name: "Cyber Law",
      imageUrl: "/2.jpg",
      description:
        "Now a days incidents of Cyber Crimes are increasing rapidly due to the fast development of technologies. That, online monetary frauds will be taking place within a fraction of second and finding the culprits in these  type of cases will be more challenging. That, our dedicated team will help the Clients to come out of such fraud and also assist them before the Police Authorities in this regard.",
    },
    {
      name: "Family Law",
      imageUrl: "/3.jpg",
      description:
        "In India family disputes are considered as personal by the clients  and some of the clients are not comfort with sharing their family problems with any one sometime with  their Advocates. We have vast experience representing clients in and out of  Bengaluru in a broad range of family law matters. Our team will help you make smart decisions and guide you every step of the way by using our experience.",
    },
    {
      name: "Legal Opinion",
      imageUrl: "/4.jpg",
      description:
        "Our team will resolve your legal  queries by providing suitable legal advice and also we will share our legal  opinion on the matter futforth by you.",
    },
    {
      name: "Notary/ Affidavit Services",
      imageUrl: "/5.jpg",
      description:
        "We undertake efficient and trusted Notary services ensuring fast, smooth and reliable authentication for all your legal documents as per your requirements.",
    },
    {
      name: "Providing of Surety",
      imageUrl: "/6.jpg",
      description:
        "Now a days finding and providing of genuine Sureties before the Court or any Police Stations or any  other Authority concerned is very big challenge. Our team ensure that we will make reduce of your stress in finding genuine sureties and we can take care of the same on your behalf.",
    },
    {
      name: "Assistance in Registration of Court Marriage",
      imageUrl: "/m1.jpg",
      description:
        "We also help in marriage registration and have well-specialized lawyers who deal with it. We help our client to register their marriage under Hindu Marriage Act, Special Marriage Act, Muslim Law , Christian Law and also under other provisions of Marriage Laws.We also helps our client to get their Marriage registration Certificate within shorter time.",
    },
    {
      name: "Assistance in Police Station, ACP/DCP/ Commissioner Office",
      imageUrl: "/9.jpg",
      description:
        "Our team will also provide assistance to the Clients before various Police Authorities from filing of the Complaint, registration of the F.I.R.’s , Providing of the Sureties and in Negotiation talks. ",
    },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="body-font text-gray-600">
      <div className="flex flex-col text-center w-full ">
        <hr className="w-48 h-1 mx-auto my-4 border-0 rounded dark:bg-yellow-200" />
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-200">
          Services
        </h1>
        <hr className="w-48 h-1 mx-auto my-4 border-0 rounded dark:bg-yellow-200" />
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-10 md:p-20 gap-4">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:bg-yellow-300"
          >
            <div className="relative">
              <Image
                src={facility.imageUrl}
                alt={facility.name}
                layout="responsive"
                width={800}
                height={600}
                className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-48 xl:h-56"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold mb-2">{facility.name.toUpperCase()}</h2>
              <button
                className="mt-2 px-4 py-2 bg-yellow-200 text-black rounded hover:bg-yellow-300"
                onClick={() => handleServiceClick(facility)}
              >
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
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
            <h2 className="text-2xl font-bold mb-4">{selectedService.name}</h2>
            <p>{selectedService.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
