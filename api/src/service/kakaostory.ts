import axios from "axios";

const kakaoAccessToken = process.env.KAKAO_ACCESS_TOKEN;

if (!kakaoAccessToken) {
    throw new Error("Kakao access token is not defined. Please set the environment variable.");
}


const kakaoStoryBaseUrl = "https://kapi.kakao.com/v1/api/story";


async function postTextToKakaoStory(content: string) {
    if (!content) {
        throw new Error("Content cannot be empty.");
    }

    try {
        const response = await axios.post(
            `${kakaoStoryBaseUrl}/post/note`,
            {
                content: content,
            },
            {
                headers: {
                    Authorization: `Bearer ${kakaoAccessToken}`,
                },
            }
        );

        console.log("Text posted successfully to KakaoStory:", response.data);
    } catch (error: any) {
        if (error.response) {
            console.error("Error response data:", error.response.data);
        } else {
            console.error("Error message:", error.message);
        }
    }
}


async function postPhotoToKakaoStory(photoUrls: string[], content: string) {
    if (photoUrls.length === 0) {
        throw new Error("Photo URLs cannot be empty.");
    }

    try {
        
        const photoUploadResponse = await axios.post(
            `${kakaoStoryBaseUrl}/upload/multi`,
            {
                file: photoUrls, 
            },
            {
                headers: {
                    Authorization: `Bearer ${kakaoAccessToken}`,
                },
            }
        );

        const uploadedPhotoUrls = photoUploadResponse.data; 

        
        const response = await axios.post(
            `${kakaoStoryBaseUrl}/post/photo`,
            {
                content: content,
                image_url_list: uploadedPhotoUrls,
            },
        );

        console.log("Photo posted successfully to KakaoStory:", response.data);
    } catch (error: any) {
        if (error.response) {
            console.error("Error response data:", error.response.data);
        } else {
            console.error("Error message:", error.message);
        }
    }
}


async function postLinkToKakaoStory(linkUrl: string, content: string) {
    if (!linkUrl) {
        throw new Error("Link URL cannot be empty.");
    }

    try {
        const response = await axios.post(
            `${kakaoStoryBaseUrl}/post/link`,
            {
                link_info: {
                    url: linkUrl,
                },
                content: content,
            }
        );

        console.log("Link posted successfully to KakaoStory:", response.data);
    } catch (error: any) {
        if (error.response) {
            console.error("Error response data:", error.response.data);
        } else {
            console.error("Error message:", error.message);
        }
    }
}

