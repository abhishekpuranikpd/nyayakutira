import { PhoneCall } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="text-white body-font relative">
        <div className="flex flex-col text-center w-full mb-8">
          <hr className="w-48 h-1 mx-auto my-4  border-0 rounded  dark:bg-yellow-200" />
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-200">
            Contact Us
          </h1>
          <hr className="w-48 h-1 mx-auto my-4  border-0 rounded dark:bg-yellow-200" />
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
            We make a difference in the lives of people during a very traumatic
            time in their life.
          </p>
        </div>
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-2/3 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15176.399791094775!2d77.2586324!3d18.0205646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcee1b59d1b79b1%3A0xba053adf0c20ed93!2sShri%20Channabasaveshwar%20Gurukul!5e0!3m2!1sen!2sin!4v1708102235543!5m2!1sen!2sin"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md ">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 text-black">
                  Bengaluru #13/1, SN Lane, Lal Bagh Upparahalli,
                  <br />
                  Bengaluru-560004. #18/1, 1st Floor, 8th Main Road, 8th Cross,
                  <br />
                  Sampangirama Nagar, Bengaluru-560027
                </p>
              </div>
              <div className="lg:w-1 /2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  href="mailto:gurukul.educampus@gmail.com"
                  className="text-yellow-500 leading-relaxed"
                >
                  gurukul.educampus@gmail.com
                </a>
                <br />
                <a
                  href="mailto:cbgpuc@gmail.com"
                  className="text-yellow-500 leading-relaxed"
                >
                  nyayakutira@gmail.com
                </a>
                <h2 className="title-font font-semibold text-black tracking-widest text-xs mt-4">
                 <span> <PhoneCall/></span>
                </h2>
                <p className="leading-relaxed text-black">
                  +918970435050  +917676175601 
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-white text-lg mb-1 font-medium title-font">
              Contact US
            </h2>
            <p className="leading-relaxed mb-5 text-white">Ask us :</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Submit
            </button>
            <p className="text-xs text-gray-500 mt-3"></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
