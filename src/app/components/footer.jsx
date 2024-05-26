import { PhoneCall } from "lucide-react";
import React from "react";
import ContactForm from "../../components/contactform";

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
        <div className="container px-5 py-10 mx-auto ">
          <div className=" bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5653406816045!2d77.56806107484181!3d12.999629387318334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16257f41027d%3A0xe61cd92e4399faab!2sMallappa%20Towers!5e0!3m2!1sen!2sin!4v1712032160831!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-[1000px]"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md ">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-black  text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 text-black">
                  NYAYA KUTIRA
                  <br/> Cabin No. 8, No.104, Mallappa Tower, East Park
                  Road, Malleshwaram, 8th Cross Road,Bengaluru,
                  Karnataka-560003.{" "}
                  <h2>_____________</h2>
                  <p>
                    No.#13/1, SN Lane, Lal Bagh Upparahalli,Bengaluru-560004.
                  </p>
                </p>
              </div>
              <div className="lg:w-1 /2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-black text-xs">
                  EMAIL
                </h2>

                <a
                  href="mailto:nyayakutira@gmail.com"
                  className="text-yellow-500 leading-relaxed"
                >
                  nyayakutira@gmail.com
                </a>
                <div className="flex items-center mt-4 space-x-2">
                  <h2 className="title-font font-semibold text-black  text-xs">
                    <PhoneCall />
                  </h2>
                  <p className="text-black items-center">
                  
                    <a
                      href="tel:+918970435050"
                      className="text-blue-500 hover:underline ml-1"
                    >
                      +918970435050
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </section>
    </>
  );
};

export default Footer;
