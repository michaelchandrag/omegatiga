import axios from "axios";

const API_URL = "https://api.openai.com/v1/chat/completions";

export const fetchChatGPTResponse = async (message) => {
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  console.log("API Key:", apiKey);

  try {
    const response = await axios.post(
      API_URL,
      {
        model: "gpt-4", // Use the appropriate model
        messages: [{ role: "user", content: message }],
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error response:", error.response);
    console.error("Error message:", error.message);
    throw new Error(error.response?.data?.error?.message || "Failed to fetch response");
  }
};
