import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config({});

cloudinary.config({
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    cloud_name: process.env.CLOUD_NAME,
});
// For uploading image to cloudinary either image or video because i use resource_type:"auto"
export const uploadMedia = async (file) => {
    try {
        const uploadedResponse = await cloudinary.uploader.upload(file, {
            resource_type: "auto"
        });
        return uploadedResponse;
    } catch (error) {
        console.log(error);

    }
};
// For deleting image from the cloudinary 
export const deleteMediaFromCloudinary = async (publicId) => {
    try {
        await cloudinary.uploader.destroy(publicId);
    } catch (error) {
        console.log(error);
    }
};

export const deleteVideoFromCloudinary = async (publicId) => {
    try {
        await cloudinary.uploader.destroy(publicId, { resource_type: "video" });
    } catch (error) {
        console.log(error);
    }
}