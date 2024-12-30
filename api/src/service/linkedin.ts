import axios from "axios";


const LINKEDIN_API_URL = "https://api.linkedin.com/v2";


const LINKEDIN_ACCESS_TOKEN = process.env.LINKEDIN_ACCESS_TOKEN;

if (!LINKEDIN_ACCESS_TOKEN) {
    throw new Error("LinkedIn Access Token is not defined. Please set the environment variable.");
}


const headers = {
    Authorization: `Bearer ${LINKEDIN_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
};


async function getUserURN() {
    try {
        const response = await axios.get(`${LINKEDIN_API_URL}/me`, { headers });
        return response.data.id; 
    } catch (error: any) {
        console.error("Error fetching user URN:", error.response?.data || error.message);
        throw error;
    }
}

async function postTextImageVideo(text: string, imageUrl: string, videoUrl: string) {
    try {
        const userURN = await getUserURN();
        
       
        const payload = {
            author: `urn:li:person:${userURN}`,
            lifecycleState: "PUBLISHED",
            specificContent: {
                "com.linkedin.ugc.ShareContent": {
                    shareCommentary: {
                        text: text, 
                    },
                    shareMediaCategory: "ARTICLE", 
                    media: [
                        {
                            status: "READY",  
                            description: {
                                text: "This is the image in the post", 
                            },
                            media: imageUrl,
                            title: {
                                text: "Image Post", 
                            },
                        },
                        {
                            status: "READY",  
                            description: {
                                text: "This is the video in the post",
                            },
                            media: videoUrl,
                            title: {
                                text: "Video Post", 
                            },
                        },
                    ],
                },
            },
            visibility: {
                "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC", 
            },
        };

        
        const response = await axios.post(`${LINKEDIN_API_URL}/ugcPosts`, payload, { headers });
        console.log("Post created successfully:", response.data);
    } catch (error: any) {
        console.error("Error creating post:", error.response?.data || error.message);
    }
}


(async () => {
    try {
      
        const text = "Check out this combined post with text, image, and video!";
        const imageUrl = "https://example.com/my-image.jpg";
        const videoUrl = "https://example.com/my-video.mp4"; 
        
        await postTextImageVideo(text, imageUrl, videoUrl);
    } catch (error) {
        console.error("Error posting to LinkedIn:", error);
    }
})();
