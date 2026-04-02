import axios from "axios"

export const askAi = async (messages) => {
    try {
        if(!messages || !Array.isArray(messages) || messages.length === 0) {
            throw new Error("Messages array is empty.");
        }
        const response = await axios.post("https://openrouter.ai/api/v1/chat/completions",
            {
                model: "openai/gpt-4o-mini",
                messages: messages

            },
            {
            headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
        },});

        const content = response?.data?.choices?.[0]?.message?.content;

        if (!content || !content.trim()) {
      throw new Error("AI returned empty response.");
    }

    return content
    } catch (error) {
        console.error("OpenRouter Error:", error.response?.data || error.message);
        
        // Better error messages
        let errorMsg = "OpenRouter API Error";
        if (error.response?.data?.error?.message) {
            errorMsg = error.response.data.error.message;
        } else if (error.response?.status === 401) {
            errorMsg = "Invalid OpenRouter API Key";
        } else if (error.response?.status === 429) {
            errorMsg = "Rate limited - try again later";
        } else if (error.message) {
            errorMsg = error.message;
        }
        
        throw new Error(errorMsg);
    }
}