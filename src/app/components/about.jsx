import Image from "next/image";
import React from "react";
import Talk from "./talkto";

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
          <p className="mt-6 text-lg leading-8 items-start text-gray-300 font-semibold">
            Nyaya Kutira is started by Advocate Ramachandra Shenoy, who is
            basically from Udupi District, Karnataka State. Who have vast
            experience in Criminal Law along with other fields of Law for more
            than decades. Nyaya Kutira is founded with intention to serve the
            litigants with highest level pf professionalism and integrity and it
            literally aims to help the litigants on priority basis by providing
            reliable and highly effective legal service with cost cutting
            method. “Nyaya- Justice & Kutira- House” it simply means, it is a
            “HOUSE” for those who are facing legal battles, can find a solution
            under one roof without any second thought.
            <br />
            <hr className="h-1 w-48 mx-auto border rounded dark:bg-yellow-200 md:my-4"/>
            <span className="font-semibold">
            ನ್ಯಾಯ ಕುಟೀರವನ್ನು ಅಡ್ವೋಕೇಟ್ ರಾಮಚಂದ್ರ ಶೆಣೈ ರವರು ಸ್ಥಾಪಿಸಿದ್ದು ಅವರು
            ಮೂಲತಃ ಕರ್ನಾಟಕ ರಾಜ್ಯದ ಉಡುಪಿ ಜಿಲ್ಲೆಯವರಾಗಿದ್ದು ಅವರಿಗೆ ಕ್ರಿಮಿನಲ್ ಹಾಗು
            ಇತರ ಕಾನೂನಿನಲ್ಲಿ ದಶಕಗಳಿಗಿಂತ ಹೆಚ್ಚಿನ ಅನುಭವ ಇರುತ್ತದೆ. ಕಕ್ಸಿದಾರರಿಗೆ
            ನಿಷ್ಪಕ್ಷಪಾತ ಹಾಗು ತ್ವರಿತ ನ್ಯಾಯವನ್ನು ಕಡಿಮೆ ಖರ್ಚಿನಲ್ಲಿ ಒದಿಗಿಸುವುದೇ
            ನ್ಯಾಯಕುಟೀರದ ಮುಖ್ಯ ಉದ್ದೇಶವಾಗಿದೆ . ನ್ಯಾಯ ಕುಟೀರವನ್ನು ಒಂದೇ ಶಬ್ದದಲ್ಲಿ
            ವಿವರಿಸುವುದಾದರೆ ,ಕಕ್ಷಿದಾರರು ತಮ್ಮ ಎಲ್ಲ ಕಾನೂನಾತ್ಮಕ ಸಮಸ್ಯೆಗಳಿಗೆ ಒಂದೇ
            ಸ್ಥಳದಲ್ಲಿ ಪರಿಹಾರವನ್ನು ಕಂಡುಕೊಳ್ಳುವ ನೆಲೆಯಾಗಿದೆ
            </span>
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href={`/talk`}
              className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
             Talk to a lawyer <br/> ( ವಕೀಲರೊಂದಿಗೆ ಮಾತನಾಡಿ)
            </a>
         
            <a
              href="/ask"
              className="text-sm font-semibold leading-6 text-white"
            >
              Ask a question (ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ) <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto items-center max-w-md mt-30 flex sm:mt-40 lg:ml-20 lg:mr-0 md:ml-82 xl:ml-32">
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
