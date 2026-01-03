import { useState } from "react";
import { predictMood } from "./api";

function App() {
    const [answers, setAnswers] = useState([
        "I feel happy today",
        "I am calm and relaxed"
    ]);
    const [result, setResult] = useState("");

    const handlePredict = async () => {
        try {
            const data = await predictMood(answers);
            setResult(data.predicted_mood);
        } catch (error) {
            alert("Error predicting mood");
            console.error(error);
        }
    };

    return (
        <div style={{ padding: 40 }}>
            <h2>AI Mood Predictor</h2>

            <button onClick={handlePredict}>
                Predict Mood
            </button>

            {result && (
                <h3>Predicted Mood: {result}</h3>
            )}
        </div>
    );
}

export default App;
