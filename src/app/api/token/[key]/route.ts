import {NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
import { verifyPassword, tokenPost, tokenGetAll, tokenDelete } from "../../repository/token";




export async function POST(req:NextRequest, {params}:any): Promise<Response> {
    try {
        const {key}= await params;
        await verifyPassword(key);
        
        const token = uuidv4();
        await tokenPost(token);
        return NextResponse.json({data: token, message: "Token Created Successfully"}, {status: 201})
    } catch(error) {
        return NextResponse.json({error: "An error occured while storing the token"}, {status: 500});
    }
}



export async function GET(req:NextRequest, {params}:any): Promise<Response> {
    try {
        const {key}= await params;
        await verifyPassword(key);

        const result= await tokenGetAll();
        return NextResponse.json({data: result, message: "Token Gotten Successfully"}, {status: 200})
    } catch(error) {
        return NextResponse.json({error: "An error occured while retrieving the token"}, {status: 500});
    }
}




export async function DELETE(req: NextRequest, {params}:any): Promise<Response> {
    try {
        const {key}= await params;
        await verifyPassword(key);

        const {token}=  await req.json();
        await tokenDelete(token);
        
        return NextResponse.json({data: token, message: "Token Gotten Successfully"}, {status: 200})
    } catch(error) {
        return NextResponse.json({error: "An error occured while deleting the token"}, {status: 500});
    }
}