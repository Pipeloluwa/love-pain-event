import path from 'path';
import { createCanvas, loadImage, registerFont } from 'canvas';
import connectMongoDb from "../database/libs/mongodb";
import { tokenUpdate } from '../repository/token';





export async function tokenUpdateService (token: any, name: string ): Promise<Buffer> {
    try {
        await connectMongoDb();

        // Define the path to the image
        const imagePath = path.join(process.cwd(), 'private-assets', 'ticket.jpg');

        const image = await loadImage(imagePath);

        //Register the font
        registerFont(path.join(process.cwd(), 'public', 'fonts', 'ClashDisplay-Regular.ttf'), { family: 'ClashDisplayFont' });

        // Create a canvas and set its dimensions
        const canvas = createCanvas(image.width, image.height);
        const ctx = canvas.getContext('2d');

        // Draw the image onto the canvas
        ctx.drawImage(image, 0, 0);

        // Set text properties
        ctx.font = 'bold 20px ClashDisplayFont';
        ctx.fillStyle = 'white'; // Text color
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';

        // Position text (e.g., center)
        const x = canvas.width - 298;
        const y = canvas.height - 50;

        // Add the text overlay
        ctx.fillText(`${name}\n${token}`, x, y);

        // Read the image file
        const imageBuffer = canvas.toBuffer('image/jpeg', {quality: 1});

        await tokenUpdate(token);

        return imageBuffer

    } catch(error) {
        console.log(error);
        throw new Error('Something went wrong'); 
    }
}
