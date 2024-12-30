import axios from 'axios';

const accessToken = process.env.accessToken;
const instagramBusinessAccountId = process.env.instagramBusinessAccountId;

if (!accessToken) {
    throw new Error("Access token is not defined. Please set the environment variable.");
}

if (!instagramBusinessAccountId) {
    throw new Error("Instagram Business Account ID is not defined. Please set the environment variable.");
}


async function postPhoto(photoUrl: string, caption: string) {
    if (!photoUrl) {
        throw new Error("Photo URL cannot be empty.");
    }
    try {
        const response = await axios.post(
            `https://graph.facebook.com/v16.0/${instagramBusinessAccountId}/media`,
            {
                image_url: photoUrl,
                caption: caption,
                access_token: accessToken,
            }
        );

       
        const publishResponse = await axios.post(
            `https://graph.facebook.com/v16.0/${instagramBusinessAccountId}/media_publish`,
            {
                creation_id: response.data.id,
                access_token: accessToken,
            }
        );

        console.log("Photo posted successfully:", publishResponse.data);
    } catch (error: any) {
        if (error.response) {
            console.error("Error response data:", error.response.data);
        } else {
            console.error("Error message:", error.message);
        }
    }
}






async function postStory(photoUrl: string) {
    if (!photoUrl) {
        throw new Error("Photo URL cannot be empty.");
    }
    try {
       
        const response = await axios.post(
            `https://graph.facebook.com/v16.0/${instagramBusinessAccountId}/media`,
            {
                image_url: photoUrl,
                is_stories: true, 
                access_token: accessToken,
            }
        );

      
        const publishResponse = await axios.post(
            `https://graph.facebook.com/v16.0/${instagramBusinessAccountId}/media_publish`,
            {
                creation_id: response.data.id,
                access_token: accessToken,
            }
        );

        console.log("Story posted successfully:", publishResponse.data);
    } catch (error: any) {
        if (error.response) {
            console.error("Error response data:", error.response.data);
        } else {
            console.error("Error message:", error.message);
        }
    }
}










// Function to upload a reel
async function postReel(videoUrl: string, caption: string) {
    if (!videoUrl) {
        throw new Error("Video URL cannot be empty.");
    }
    try {
        // Upload the reel
        const response = await axios.post(
            `https://graph.facebook.com/v16.0/${instagramBusinessAccountId}/media`,
            {
                video_url: videoUrl,
                caption: caption,
                media_type: "REEL", // Explicitly for Reels
                access_token: accessToken,
            }
        );

        // Publish the reel
        const publishResponse = await axios.post(
            `https://graph.facebook.com/v16.0/${instagramBusinessAccountId}/media_publish`,
            {
                creation_id: response.data.id,
                access_token: accessToken,
            }
        );

        console.log("Reel posted successfully:", publishResponse.data);
    } catch (error: any) {
        if (error.response) {
            console.error("Error response data:", error.response.data);
        } else {
            console.error("Error message:", error.message);
        }
    }
}










// Function to create a carousel post
async function postCarousel(photos: string[], caption: string) {
    if (photos.length === 0) {
        throw new Error("Photo URLs cannot be empty.");
    }

    try {
        // Step 1: Upload each photo and get media IDs
        const mediaIds: string[] = [];

        for (const photoUrl of photos) {
            const response = await axios.post(
                `https://graph.facebook.com/v16.0/${instagramBusinessAccountId}/media`,
                {
                    image_url: photoUrl,
                    access_token: accessToken,
                }
            );
            mediaIds.push(response.data.id);
        }

        // Step 2: Create the carousel container
        const carouselResponse = await axios.post(
            `https://graph.facebook.com/v16.0/${instagramBusinessAccountId}/media`,
            {
                children: mediaIds, // Array of media IDs
                caption: caption,
                media_type: "CAROUSEL",
                access_token: accessToken,
            }
        );

        // Step 3: Publish the carousel post
        const publishResponse = await axios.post(
            `https://graph.facebook.com/v16.0/${instagramBusinessAccountId}/media_publish`,
            {
                creation_id: carouselResponse.data.id,
                access_token: accessToken,
            }
        );

        console.log("Carousel post published successfully:", publishResponse.data);
    } catch (error: any) {
        if (error.response) {
            console.error("Error response data:", error.response.data);
        } else {
            console.error("Error message:", error.message);
        }
    }
}

