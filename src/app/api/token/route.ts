import { NextRequest, NextResponse } from "next/server";
import {  tokenGetSingle } from "../repository/token";
import { tokenUpdateService } from "../services/tokenUpdateService";




export async function PUT(request:NextRequest){
    try {
        const {token, name}=  await request.json();
        const result= await tokenGetSingle(token);
    
        if (result=== null || result?.expired=== true){
            return NextResponse.json(
                {message: "Token is invalid or has expired"}, {status: 404}
            )
        }   
    
        const imageBufferResult= await tokenUpdateService(token, name);

        return new NextResponse(
            imageBufferResult,
            {
                headers: {
                    'Content-Type': 'image/jpeg'
                  },
            }
        )
        
    } catch (error) {
        return NextResponse.json({error: "An error occured while verifying the token"}, {status: 500});
    }

}

