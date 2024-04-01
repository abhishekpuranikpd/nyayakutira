import Link from "next/link";

export default function Services() {
  const facilities = [
    "Criminal LAW",
    "Cyber Law",
    "Family Law",
    "Legal Opinion",
    "Notary/ Affidavit Services",
    "Providing of Surety",
    "Assistance in Registration of Court Marriage",
    "Legal advice/Opinion",
    "Assistance in Police Station, ACP/DCP/ Commissioner Office",
  ];

  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto ">
          <div className="mb-10 text-center">
            <h1 className="title-font mb-4 text-center text-5xl font-medium text-yellow-200 sm:text-3xl">
              Our Services
            </h1>
            <hr className="w-48 h-1 mx-auto my-4  border-0 rounded md:my-10 dark:bg-yellow-200" />
            <p className="mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4"></p>
          </div>
          <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
            {facilities.map((facility, index) => (
              <div key={index} className="w-full p-2 sm:w-1/2">
                <div className="flex h-full items-center rounded bg-white p-4 shadow-md">
                  <div className="rounded-full bg-indigo-500 p-3 mr-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="h-6 w-6 shrink-0 text-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <span className="title-font font-medium">{facility}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
