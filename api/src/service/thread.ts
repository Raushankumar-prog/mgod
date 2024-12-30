import axios from 'axios';

const accessToken = process.env.THREADS_ACCESS_TOKEN; // Access token for Threads API
const apiBase = "https://graph.instagram.com"; // Assuming Threads follows a similar structure to Instagram's API

// Function to post a text message to a Thread
export async function postTextToThread(threadId: string, message: string) {
    try {
        const response = await axios.post(
            `${apiBase}/${threadId}/messages`,
            {
                message: message,
                access_token: accessToken,
            }
        );
        console.log("Text posted successfully:", response.data);
    } catch (error: any) {
        console.error("Error posting text:", error.response?.data || error.message);
    }
}

// Function to upload an image to a Thread
export async function uploadImageToThread(threadId: string, imageUrl: string, caption: string) {
    try {
        const response = await axios.post(
            `${apiBase}/${threadId}/media`,
            {
                media_type: 'IMAGE',
                url: imageUrl,
                caption: caption,
                access_token: accessToken,
            }
        );
        console.log("Image uploaded successfully:", response.data);
    } catch (error: any) {
        console.error("Error uploading image:", error.response?.data || error.message);
    }
}

// Function to upload a video to a Thread
export async function uploadVideoToThread(threadId: string, videoUrl: string, caption: string) {
    try {
        const response = await axios.post(
            `${apiBase}/${threadId}/media`,
            {
                media_type: 'VIDEO',
                url: videoUrl,
                caption: caption,
                access_token: accessToken,
            }
        );
        console.log("Video uploaded successfully:", response.data);
    } catch (error: any) {
        console.error("Error uploading video:", error.response?.data || error.message);
    }
}

// Function to get the latest threads or messages from a specific thread
export async function getThreadMessages(threadId: string) {
    try {
        const response = await axios.get(
            `${apiBase}/${threadId}/messages`,
            {
                params: {
                    access_token: accessToken,
                },
            }
        );
        console.log("Thread messages fetched successfully:", response.data);
        return response.data.messages; // Assuming response has a `messages` array
    } catch (error: any) {
        console.error("Error fetching thread messages:", error.response?.data || error.message);
    }
}
