import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';  // To handle local files, if necessary

const accessToken = process.env.TIKTOK_ACCESS_TOKEN; // TikTok API access token (OAuth2)
const apiBase = "https://open-api.tiktok.com"; // TikTok API base URL

// Function to post a short video to TikTok
export async function postShortToTikTok(videoPath: string, description: string) {
    try {
        // Create a form to upload the video file
        const form = new FormData();
        form.append('video', fs.createReadStream(videoPath)); // Add the video file
        form.append('description', description); // Video description (caption)
        form.append('access_token', accessToken); // Provide access token
        
        // Send a POST request to upload the video
        const response = await axios.post(
            `${apiBase}/video/upload/`,
            form,
            {
                headers: {
                    ...form.getHeaders(),
                },
            }
        );

        console.log("Short video posted successfully:", response.data);
    } catch (error: any) {
        console.error("Error posting short video:", error.response?.data || error.message);
    }
}

// Function to post a video from a URL to TikTok
export async function postShortFromUrlToTikTok(videoUrl: string, description: string) {
    try {
        const response = await axios.post(
            `${apiBase}/video/upload/`,
            {
                video_url: videoUrl,
                description: description,
                access_token: accessToken,
            }
        );
        console.log("Short video posted successfully from URL:", response.data);
    } catch (error: any) {
        console.error("Error posting video from URL:", error.response?.data || error.message);
    }
}
