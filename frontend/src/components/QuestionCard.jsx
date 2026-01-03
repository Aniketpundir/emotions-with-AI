import { useState } from "react";

export default function QuestionCard({ question, onSubmit }) {
    const [answer, setAnswer] = useState("");

    const handleSubmit = () => {
        if (!answer.trim()) return;
        onSubmit(answer);
        setAnswer("");
    };

    return (
        <div className="question-card">
            <h2 className="question-title">{question}</h2>

            <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Write honestly how you feel..."
                rows="4"
            />

            <button className="submit-btn" onClick={handleSubmit}>
                Submit Answer →
            </button>
        </div>
    );
}
