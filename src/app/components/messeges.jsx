"use client"
import React from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

const Messages = ({posts}) => {
 

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="w-ful  bg-gray-900 pt-16 ">
        <ul>
          <a href="/profile">
            <li className="text-center text-white hover:bg-blue-500 border border-yellow-200 p-3">
              {" "}
              GO TO Profile{" "}
            </li>
          </a>
        </ul>
      </div>
      <div className="min-h-screen overflow-x-auto">
        <div className="container mx-auto p-4">
          <table className="w-full border-collapse border border-gray-800">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider border border-gray-800">
                  Name
                </th>
                <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider border border-gray-800">
                  Message
                </th>
                <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider border border-gray-800">
                  Phone Number
                </th>
                <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider border border-gray-800">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
            {posts.slice().reverse().map((post) => (
    <tr key={post.id} className="border-t border-gray-800">
        <td className="px-6 py-4 whitespace-no-wrap border border-gray-800">
            {post.title}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border border-gray-800">
            {post.description}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border border-gray-800">
            <a
                href={`tel:${post.category}`}
                className="text-blue-500 hover:underline"
            >
                {post.category}
            </a>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border border-gray-800">
            {(post.createdAt).toLocaleDateString('en-GB')},{(post.createdAt).toLocaleTimeString()}
        </td>
    </tr>
))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Messages;
