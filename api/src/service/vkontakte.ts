import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs'; // For handling local video and image files

const accessToken = process.env.VK_ACCESS_TOKEN; // Your VK API access token (OAuth2)
const apiBase = "https://api.vk.com/method"; // VK API base URL
const apiVersion = "5.131"; // VK API version

// Function to post a text message to VK
export async function postTextToVK(message: string) {
    try {
        const response = await axios.post(
            `${apiBase}/wall.post`,
            {
                message: message,
                access_token: accessToken,
                v: apiVersion, // API version
            }
        );
        console.log("Text posted successfully:", response.data);
    } catch (error: any) {
        console.error("Error posting text:", error.response?.data || error.message);
    }
}

// Function to upload an image to VK and post it
export async function uploadImageToVK(imagePath: string, caption: string) {
    try {
        // Step 1: Get the upload server URL
        const uploadServerResponse = await axios.post(
            `${apiBase}/photos.getWallUploadServer`,
            {
                access_token: accessToken,
                v: apiVersion,
            }
        );
        const uploadUrl = uploadServerResponse.data.response.upload_url;

        // Step 2: Upload the image to the server
        const form = new FormData();
        form.append('photo', fs.createReadStream(imagePath)); // Image file
        const uploadResponse = await axios.post(uploadUrl, form, {
            headers: {
                ...form.getHeaders(),
            },
        });

        // Step 3: Save the uploaded image to the user's VK wall
        const saveResponse = await axios.post(
            `${apiBase}/photos.saveWallPhoto`,
            {
                access_token: accessToken,
                v: apiVersion,
                photo: uploadResponse.data.photo,
                server: uploadResponse.data.server,
                hash: uploadResponse.data.hash,
            }
        );

        // Step 4: Post the image with the caption
        await axios.post(
            `${apiBase}/wall.post`,
            {
                message: caption,
                attachments: `photo${saveResponse.data.response[0].owner_id}_${saveResponse.data.response[0].id}`,
                access_token: accessToken,
                v: apiVersion,
            }
        );

        console.log("Image uploaded and posted successfully.");
    } catch (error: any) {
        console.error("Error uploading image:", error.response?.data || error.message);
    }
}

// Function to upload a video to VK and post it
export async function uploadVideoToVK(videoPath: string, caption: string) {
    try {
        // Step 1: Get the upload server URL for video
        const uploadServerResponse = await axios.post(
            `${apiBase}/video.save`,
            {
                access_token: accessToken,
                v: apiVersion,
            }
        );
        const uploadUrl = uploadServerResponse.data.response.upload_url;

        // Step 2: Upload the video file
        const form = new FormData();
        form.append('video_file', fs.createReadStream(videoPath)); // Video file
        const uploadResponse = await axios.post(uploadUrl, form, {
            headers: {
                ...form.getHeaders(),
            },
        });

        // Step 3: Save the video to the user's VK wall
        const saveResponse = await axios.post(
            `${apiBase}/video.save`,
            {
                access_token: accessToken,
                v: apiVersion,
                file: uploadResponse.data.video_file,
            }
        );

        // Step 4: Post the video with the caption
        await axios.post(
            `${apiBase}/wall.post`,
            {
                message: caption,
                attachments: `video${saveResponse.data.response.owner_id}_${saveResponse.data.response.id}`,
                access_token: accessToken,
                v: apiVersion,
            }
        );

        console.log("Video uploaded and posted successfully.");
    } catch (error: any) {
        console.error("Error uploading video:", error.response?.data || error.message);
    }
}
