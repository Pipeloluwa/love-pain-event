import { NextResponse } from "next/server";
import connectMongoDb from "../database/libs/mongodb";
import TokenModel from "../database/models/token";




export async function verifyPassword (password: any) {
    try {
        if (password !== process.env.ADMIN_KEY){
            throw new Error('Admin Password is incorrect'); 
        }

    } catch(error) {
        throw new Error('Something went wrong'); 
    }
}



export async function tokenPost (token: any) {
    try {
        await connectMongoDb();
        await TokenModel.create({
            token: token, 
            expired: false
        });

    } catch(error) {
        throw new Error('Something went wrong'); 
    }
}



export async function tokenGetAll (): Promise<any[]> {
    try {
        await connectMongoDb();
        const result= await TokenModel.find();
        return result;

    } catch(error) {
        throw new Error('Something went wrong'); 
    }
}




export async function tokenGetSingle (token: any): Promise<any> {
    try {
        await connectMongoDb();
        const result= await TokenModel.findOne({token: token});
        return result;

    } catch(error) {
        throw new Error('Something went wrong'); 
    }
}




export async function tokenUpdate (token: any) {
    try {
        await connectMongoDb();
  
        await TokenModel.findOneAndUpdate(
            {token: token},
            {expired: true}
        );

    } catch(error) {
        throw new Error('Something went wrong'); 
    }
}



export async function tokenDelete (token: any) {
    try {
        await connectMongoDb();
        await TokenModel.findOneAndDelete(
            {token: token}
        );

        return NextResponse.json({message: "Token Deleted Successfully"}, {status: 200});

    } catch(error) {
        throw new Error('Something went wrong'); 
    }
}