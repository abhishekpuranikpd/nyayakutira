"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import JoditEditor from "jodit-react";

const BlogForm = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const editor = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, category }),
      });
      if (res.ok) {
        alert("Blog Posted!!");
        router.push("/blog");
      } else {
        alert("Something Went Wrong");
      }
    } catch (error) {
      alert("Something Went Wrong");
    }
  };

  return (
    <div className="flex justify-center bg-gray-700 items-center h-screen">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-medium text-black mb-6">Create Post</h1>
        <form noValidate action="" className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-bold">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add your post title"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="description" className="block mb-2 text-sm font-bold">
              Description
            </label>
            <JoditEditor
              ref={editor}
              value={description}
              onChange={(newContent) => setDescription(newContent)}
              className="h-[400px]"
            />
          </div>
          <div>
            <label htmlFor="category" className="block mb-2 text-sm font-bold">
              Category
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              placeholder="Type your blog post category"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2.5 rounded-lg text-sm"
            >
              Post Your Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
