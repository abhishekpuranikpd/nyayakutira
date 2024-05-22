import React from 'react'
import BlogForm from '../../../components/postForm'
import { getCurrentUser } from '../../../lib/session'
import { redirect } from 'next/navigation'

const BlogPage = async () => {
    const user = await getCurrentUser()

    if (!user) {
        redirect("/auth/login")
    }

  return (
    <div className="bg-gray-700 min-h-screen">
    <BlogForm/></div>
  )
}

export default BlogPage