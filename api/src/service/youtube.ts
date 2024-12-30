import axios from 'axios';
import fs from 'fs';
import { google } from 'googleapis';

const youtube = google.youtube('v3');
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID, // Your OAuth client ID
  process.env.GOOGLE_CLIENT_SECRET, // Your OAuth client secret
  process.env.GOOGLE_REDIRECT_URI // Redirect URI
);

oauth2Client.setCredentials({
  access_token: process.env.YOUTUBE_ACCESS_TOKEN, // Access token obtained via OAuth2
  refresh_token: process.env.YOUTUBE_REFRESH_TOKEN, // Refresh token if needed
});

// Function to upload video to YouTube
export async function uploadVideoToYouTube(
  videoPath: string,
  title: string,
  description: string,
  tags: string[] = [],
  privacyStatus: 'public' | 'unlisted' | 'private' = 'public'
) {
  try {
    // Step 1: Prepare the video file and metadata
    const file = fs.createReadStream(videoPath);
    const fileSize = fs.statSync(videoPath).size;

    // Step 2: Use YouTube API to upload the video
    const res = await youtube.videos.insert(
      {
        part: ['snippet', 'status'],
        media: {
          body: file,
        },
        requestBody: {
          snippet: {
            title: title,
            description: description,
            tags: tags,
          },
          status: {
            privacyStatus: privacyStatus,
          },
        },
        auth: oauth2Client,
      },
      {
        // This allows you to track the upload progress
        onUploadProgress: (event:any) => {
          const progress = (event.bytesRead / fileSize) * 100;
          console.log(`Upload progress: ${Math.round(progress)}%`);
        },
      }
    );

    console.log('Video uploaded successfully:', res.data);
  } catch (error: any) {
    console.error('Error uploading video:', error.response?.data || error.message);
  }
}
