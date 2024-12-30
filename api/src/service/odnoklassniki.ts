import axios from 'axios';
import * as crypto from 'crypto';

const applicationKey = process.env.OK_APP_KEY; // Your Odnoklassniki Application Key
const accessToken = process.env.OK_ACCESS_TOKEN; // Access Token for API
const secretKey = process.env.OK_SECRET_KEY; // Your Application Secret Key
const apiBase = "https://api.ok.ru/fb.do";

// Utility function to generate a signature for API requests
function generateSignature(params: Record<string, string | number>): string {
    const keys = Object.keys(params).sort();
    const paramString = keys.map(key => `${key}=${params[key]}`).join('');
    const fullString = `${paramString}${secretKey}`;
    return crypto.createHash('md5').update(fullString).digest('hex');
}

// Function to post a message
export async function postText(message: string) {
    try {
        const params:any = {
            method: "stream.post",
            application_key: applicationKey,
            format: "json",
            access_token: accessToken,
            message: message,
        };

        // Dynamically add the 'sig' property
        const paramsWithSig = { ...params, sig: generateSignature(params) };

        const response = await axios.post(apiBase, null, { params: paramsWithSig });
        console.log("Text posted successfully:", response.data);
    } catch (error: any) {
        console.error("Error posting text:", error.response?.data || error.message);
    }
}

// Function to upload a photo
export async function uploadPhoto(photoUrl: string, caption: string) {
    try {
        const params:any = {
            method: "photosV2.getUploadUrl",
            application_key: applicationKey,
            format: "json",
            access_token: accessToken,
        };

        // Dynamically add the 'sig' property
        const paramsWithSig = { ...params, sig: generateSignature(params) };

        // Step 1: Get the upload URL
        const uploadResponse = await axios.get(apiBase, { params: paramsWithSig });
        const uploadUrl = uploadResponse.data.upload_url;

        // Step 2: Upload the photo
        const formData = new FormData();
        formData.append("file", photoUrl);
        const photoResponse = await axios.post(uploadUrl, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        console.log("Photo uploaded successfully:", photoResponse.data);
    } catch (error: any) {
        console.error("Error uploading photo:", error.response?.data || error.message);
    }
}

// Function to upload a video
export async function uploadVideo(videoUrl: string, description: string) {
    try {
        const params:any = {
            method: "video.getUploadUrl",
            application_key: applicationKey,
            format: "json",
            access_token: accessToken,
        };

        // Dynamically add the 'sig' property
        const paramsWithSig = { ...params, sig: generateSignature(params) };

        // Step 1: Get the upload URL
        const uploadResponse = await axios.get(apiBase, { params: paramsWithSig });
        const uploadUrl = uploadResponse.data.upload_url;

        // Step 2: Upload the video
        const formData = new FormData();
        formData.append("file", videoUrl);
        formData.append("description", description);
        const videoResponse = await axios.post(uploadUrl, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        console.log("Video uploaded successfully:", videoResponse.data);
    } catch (error: any) {
        console.error("Error uploading video:", error.response?.data || error.message);
    }
}
