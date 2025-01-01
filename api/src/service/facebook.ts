import axios from 'axios';


const accessToken = process.env.accessToken;

const apiVersion = "v16.0";





async function postText(message: string) {
    try {
        const response = await axios.post(
            `https://graph.facebook.com/${apiVersion}/me/feed`,
            {
                message: message,
                access_token: accessToken,
            }
        );
        console.log("Text posted successfully:", response.data);
    } catch (error:any) {
        console.error("Error posting text:", error);
    }
}





async function uploadPhoto(photoUrl: string, caption: string) {
    try {
        const response = await axios.post(
            `https://graph.facebook.com/${apiVersion}/me/photos`,
            {
                url: photoUrl,
                caption: caption,
                access_token: accessToken,
            }
        );
        console.log("Photo uploaded successfully:", response.data);
    } catch (error:any) {
        console.error("Error uploading photo:", error);
    }
}





async function uploadVideo(videoUrl: string, description: string) {
    try {
        const response = await axios.post(
            `https://graph.facebook.com/${apiVersion}/me/videos`,
            {
                file_url: videoUrl,
                description: description,
                access_token: accessToken,
            }
        );
        console.log("Video uploaded successfully:", response.data);
    } catch (error :any) {
        console.error("Error uploading video:", error);
    }
}
