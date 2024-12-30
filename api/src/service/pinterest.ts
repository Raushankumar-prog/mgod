import axios from 'axios';

const accessToken = process.env.PINTEREST_ACCESS_TOKEN; // Your Pinterest API access token
const apiBase = "https://api.pinterest.com/v5"; // Pinterest API base URL

// Function to create a pin
export async function createPin(boardId: string, title: string, imageUrl: string, description: string, link: string) {
    try {
        const response = await axios.post(
            `${apiBase}/pins`,
            {
                board_id: boardId,
                title: title,
                media: {
                    media_type: "image",
                    url: imageUrl,
                },
                description: description,
                link: link,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
            }
        );
        console.log("Pin created successfully:", response.data);
    } catch (error: any) {
        console.error("Error creating pin:", error.response?.data || error.message);
    }
}

// Function to upload an image
export async function uploadImage(filePath: string) {
    try {
        const formData = new FormData();
        formData.append("media", filePath);

        const response = await axios.post(
            `${apiBase}/media`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        console.log("Image uploaded successfully:", response.data);
        return response.data.media_id; // Return the media ID for further use
    } catch (error: any) {
        console.error("Error uploading image:", error.response?.data || error.message);
    }
}

// Function to fetch boards
export async function getBoards() {
    try {
        const response = await axios.get(`${apiBase}/boards`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        console.log("Boards fetched successfully:", response.data);
        return response.data.items; // Return the list of boards
    } catch (error: any) {
        console.error("Error fetching boards:", error.response?.data || error.message);
    }
}
