import { useState } from "react";
import questions from "../data/questions";
import QuestionCard from "../components/QuestionCard";
import Progress from "../components/Progress";
import ResultCard from "../components/ResultCard";
import Loader from "../components/Loader";
import { predictMood } from "../api";

export default function Home() {
    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [mood, setMood] = useState(null);
    const [loading, setLoading] = useState(false);

    const next = async (answer) => {
        const newAnswers = [...answers, answer];
        setAnswers(newAnswers);

        if (index + 1 === questions.length) {
            setLoading(true); // ⬅ show pending circle

            const res = await predictMood(newAnswers);

            setTimeout(() => {
                setMood(res.data.mood);
                setLoading(false);
            }, 1200); // smooth UX delay
        } else {
            setIndex(index + 1);
        }
    };

    return (
        <main className="layout">
            {loading ? (
                <Loader />
            ) : !mood ? (
                <>
                    <Progress current={index} total={questions.length} />
                    <QuestionCard
                        question={questions[index]}
                        onSubmit={next}
                    />
                </>
            ) : (
                <ResultCard mood={mood} />
            )}
        </main>
    );
}
