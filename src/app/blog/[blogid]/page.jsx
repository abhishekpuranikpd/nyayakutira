import React from 'react';
import { db } from '../../../lib/db';
// import Navbar from '../../../components/navbar';

const BlogView = async ({ params }) => {
  const blogid = params.blogid;
  const data = await db.post.findFirst({
    where: {
      id: blogid,
     },
     include : {
      user :true,
    },
  });

  return (
    
    <div className="bg-gray-700 min-h-screen">
      {/* <Navbar/> */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
              <h2 className="text-indigo-500 text-xs font-medium tracking-widest mb-4">
                {data.category}
              </h2>
              <h1 className="text-2xl font-bold text-black mb-6">
                {data.title}
              </h1>
              <div
                className="text-black justify-between items-center font-thin leading-relaxed mb-8"
                dangerouslySetInnerHTML={{ __html: data.description }}
              ></div>
            
              <div className="text-gray-900">
                Author: {data.user.name}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogView;
