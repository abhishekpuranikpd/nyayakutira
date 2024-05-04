import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-7xl px-6 pb-24  sm:pb-32 lg:flex lg:px-8">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl">
          <h1 className="mt-10 text-2xl font-bold text-center text-white sm:text-4xl">
            About us
          </h1>
          <hr className="w-48 h-1 mx-auto my-4  border-0 rounded md:my-10 dark:bg-yellow-200" />
          <p className="mt-6 text-lg leading-8 items-start text-gray-300">
            Nyaya Kutira is started by Advocate Ramachandra Shenoy, who
            basically hails from Udupi District, Karnataka State. Who have vast
            experience in Criminal Law along with other fields of Law for more
            than decades. Nyaya Kutira is founded with intention to serve the
            litigants with highest level of professionalism and integrity and it
            literally aims to help the litigants on priority basis by providing
            reliable and highly effective legal service with cost cutting
            method. “Nyaya- Justice & Kutira- House” it simply means, it is a
            “HOUSE” for those who are facing legal battles, can find a solution
            under one roof without any second thought.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href={`tel:${+917676175601}`}
              className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Talk to a Lawyer
            </a>
            <a
              href="/contact"
              className="text-sm font-semibold leading-6 text-white"
            >
              Ask a Question <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-md mt-30 flex sm:mt-40 lg:ml-20 lg:mr-0 md:ml-82 xl:ml-32">
          <div className="max-w-md flex-none sm:max-w-2xl  lg:max-w-none">
            <Image
              src="/i2.jpg"
              alt="App screenshot"
              width="900"
              height="900"
              className="w-[30rem] rounded-md"
            />
          </div>
          {/* bg-white/5 shadow-2xl ring-1 ring-white/10 */}
        </div>
      </div>
    </div>
  );
};

export default About;
