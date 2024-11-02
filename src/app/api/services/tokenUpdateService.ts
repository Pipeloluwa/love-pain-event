import path from 'path';
import { createCanvas, loadImage } from 'canvas';
import connectMongoDb from "../database/libs/mongodb";
import { tokenUpdate } from '../repository/token';





export async function tokenUpdateService (token: any, name: string ): Promise<Buffer> {
    try {
        await connectMongoDb();

        // Define the path to the image
        const imagePath = path.join(process.cwd(), 'public', 'images', 'pictures', 'ticket.jpg');

        const image = await loadImage(imagePath);

        // Create a canvas and set its dimensions
        const canvas = createCanvas(image.width, image.height);
        const ctx = canvas.getContext('2d');

        // Draw the image onto the canvas
        ctx.drawImage(image, 0, 0);

        // Set text properties
        ctx.font = 'bold 18px Arial';
        ctx.fillStyle = 'white'; // Text color
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';

        // Position text (e.g., center)
        const x = canvas.width - 300;
        const y = canvas.height - 50;

        // Add the text overlay
        ctx.fillText(`${name}\n${token}`, x, y);

        // Read the image file
        const imageBuffer = canvas.toBuffer('image/jpeg', {quality: 1});

        await tokenUpdate(token);

        return imageBuffer

    } catch(error) {
        throw new Error('Something went wrong'); 
    }
}
