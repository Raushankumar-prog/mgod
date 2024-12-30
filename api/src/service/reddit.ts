import axios from 'axios';

const clientId = process.env.REDDIT_CLIENT_ID; // Your Reddit app client ID
const clientSecret = process.env.REDDIT_CLIENT_SECRET; // Your Reddit app client secret
const userAgent = process.env.REDDIT_USER_AGENT; // Your Reddit app user agent
const accessToken = process.env.REDDIT_ACCESS_TOKEN; // Reddit API access token (OAuth2 token)

const apiBase = "https://oauth.reddit.com"; // Reddit API base URL

// Function to obtain OAuth2 token (if needed)
export async function getOAuthToken() {
    const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
    
    try {
        const response = await axios.post(
            "https://www.reddit.com/api/v1/access_token",
            new URLSearchParams({
                grant_type: "client_credentials", // For app-only authentication
            }),
            {
                headers: {
                    Authorization: `Basic ${basicAuth}`,
                    "User-Agent": userAgent,
                },
            }
        );
        console.log("OAuth token received:", response.data);
        return response.data.access_token;
    } catch (error: any) {
        console.error("Error obtaining OAuth token:", error.response?.data || error.message);
    }
}

// Function to post text to a subreddit
export async function postText(subreddit: string, title: string, text: string) {
    try {
        const response = await axios.post(
            `${apiBase}/r/${subreddit}/submit`,
            {
                title: title,
                kind: "self", // self-post (text post)
                text: text,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "User-Agent": userAgent,
                },
            }
        );
        console.log("Text posted successfully:", response.data);
    } catch (error: any) {
        console.error("Error posting text:", error.response?.data || error.message);
    }
}

// Function to upload an image (by creating a post with an image URL)
export async function postImage(subreddit: string, title: string, imageUrl: string) {
    try {
        const response = await axios.post(
            `${apiBase}/r/${subreddit}/submit`,
            {
                title: title,
                kind: "image", // image post
                url: imageUrl,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "User-Agent": userAgent,
                },
            }
        );
        console.log("Image posted successfully:", response.data);
    } catch (error: any) {
        console.error("Error posting image:", error.response?.data || error.message);
    }
}

// Function to fetch a subreddit’s posts
export async function getSubredditPosts(subreddit: string) {
    try {
        const response = await axios.get(`${apiBase}/r/${subreddit}/new`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "User-Agent": userAgent,
            },
        });
        console.log("Subreddit posts fetched:", response.data);
        return response.data.data.children; // Return list of posts
    } catch (error: any) {
        console.error("Error fetching subreddit posts:", error.response?.data || error.message);
    }
}
