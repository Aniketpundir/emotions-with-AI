// import axios from "axios";

// /**
//  * Sends user answers to AI backend for mood prediction
//  * @param {Array<string>} answers
//  * @returns {Promise}
//  */
// export const predictMood = async (answers) => {
//     return axios.post("http://localhost:8000/predict", {
//         answers: answers
//     });
// };


import axios from "axios";

export const predictMood = (answers) => {
    return axios.post(
        "https://emotions-with-ai.onrender.com",
        { answers }
    );
};
