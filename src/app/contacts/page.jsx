import React from "react";
import { getCurrentUser } from "../../lib/session";
import { db } from "../../lib/db";
import { redirect } from "next/navigation";
import Link from "next/link";
import Messages from "../components/messeges"
const Contacts = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  async function getposts() {
    const data = await db.contact.findMany({});
    return data;
  }
  const posts = await getposts();

  return (
   <Messages posts={posts}/>
  );
};

export default Contacts;
