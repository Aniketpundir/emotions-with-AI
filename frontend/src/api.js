import axios from "axios";

/**
 * Sends user answers to AI backend for mood prediction
 * @param {Array<string>} answers
 */
export const predictMood = async (answers) => {
    const response = await axios.post(
        "https://emotions-with-ai.onrender.com/predict",
        {
            answers: answers
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

    return response.data;
};
