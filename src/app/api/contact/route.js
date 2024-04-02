import { db } from "../../../lib/db";
import { NextResponse } from "next/server";
import { Post } from "@prisma/client";


export async function  GET(request){
    let data 
        try {
           
         data = await db.contact.findMany();
        } catch (error) {
            data = {success:false}
        }
        console.log(data);
        return NextResponse.json({data,success:true})
    }

export async function POST(request){
    
    const {title,description,category} = await request.json();

    console.log(title,"Post");
    

    const post = await db.Contact.create({ data: {title,description,category}})
    return NextResponse.json({result: "Success!!",success:true ,post},{status:200})
}