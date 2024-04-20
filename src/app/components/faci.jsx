import Image from "next/image";

export default function Services() {
  const facilities = [
    { name: "Criminal LAW", imageUrl: "/1.jpg" },
    { name: "Cyber Law", imageUrl: "/2.jpg" },
    { name: "Family Law", imageUrl: "/3.jpg" },
    { name: "Legal Opinion", imageUrl: "/4.jpg" },
    { name: "Notary/ Affidavit Services", imageUrl: "/5.jpg" },
    { name: "Providing of Surety", imageUrl: "/6.jpg" },
    { name: "Assistance in Registration of Court Marriage", imageUrl: "/1.jpg" },
    { name: "Legal advice/Opinion", imageUrl: "/8.jpg" },
    { name: "Assistance in Police Station, ACP/DCP/ Commissioner Office", imageUrl: "/9.jpg" }
  ];

  return (
    <section className="body-font text-gray-600">
      <div className="flex flex-col text-center w-full ">
       <hr className="w-48 h-1 mx-auto my-4  border-0 rounded  dark:bg-yellow-200" />
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-200">
         Services
          </h1>
          <hr className="w-48 h-1 mx-auto my-4  border-0 rounded dark:bg-yellow-200" />
          </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-10 md:p-20 gap-4">
        {facilities.map((facility, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
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
            <div className="p-4">
              <h2 className="text-lg font-medium mb-2">{facility.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
