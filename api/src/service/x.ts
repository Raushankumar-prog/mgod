import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs'; // For handling local video and image files

const accessToken = process.env.TWITTER_ACCESS_TOKEN; // Twitter access token
const apiBase = "https://api.twitter.com/2"; // Twitter API v2 base URL

// Function to upload media (photo or video) to Twitter
async function uploadMedia(mediaPath: string, mediaType: 'image' | 'video') {
    try {
        // Step 1: Get the media upload URL
        const uploadUrlResponse = await axios.post(
            `https://upload.twitter.com/1.1/media/upload.json`,
            {
                media_data: fs.readFileSync(mediaPath, { encoding: 'base64' }),
                media_category: mediaType === 'image' ? 'tweet_image' : 'tweet_video',
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        const mediaId = uploadUrlResponse.data.media_id_string;
        console.log(`Media uploaded successfully with media_id: ${mediaId}`);
        return mediaId;
    } catch (error: any) {
        console.error("Error uploading media:", error.response?.data || error.message);
        throw error;
    }
}

// Function to post a tweet with text, photo, and video
export async function postTweetWithMedia(text: string, mediaPaths: { photo?: string, video?: string }) {
    try {
        // Step 1: Upload the media
        let mediaIds: string[] = [];
        
        if (mediaPaths.photo) {
            const photoId = await uploadMedia(mediaPaths.photo, 'image');
            mediaIds.push(photoId);
        }
        
        if (mediaPaths.video) {
            const videoId = await uploadMedia(mediaPaths.video, 'video');
            mediaIds.push(videoId);
        }

        // Step 2: Post the tweet with the media
        const tweetResponse = await axios.post(
            `${apiBase}/tweets`,
            {
                status: text,
                media_ids: mediaIds.join(','),
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log("Tweet posted successfully:", tweetResponse.data);
    } catch (error: any) {
        console.error("Error posting tweet:", error.response?.data || error.message);
    }
}
