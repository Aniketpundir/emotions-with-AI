// export default function ResultCard({ mood }) {
//     const emoji = {
//         happy: "😊",
//         sad: "😔",
//         stressed: "😣",
//         angry: "😠",
//         neutral: "😐"
//     };

//     return (
//         <div className="result-card">
//             <h1>{emoji[mood]} {mood.toUpperCase()}</h1>
//             <p>
//                 {mood === "happy" && "Keep doing what makes you feel good!"}
//                 {mood === "sad" && "It’s okay to feel low. Take care of yourself."}
//                 {mood === "stressed" && "Try taking a deep breath or short break."}
//                 {mood === "angry" && "Pause, breathe, and give yourself space."}
//                 {mood === "neutral" && "A balanced state is a healthy state."}
//             </p>
//         </div>
//     );
// }

export default function ResultCard({ mood }) {
    const emoji = {
        happy: "😊",
        sad: "😔",
        stressed: "😣",
        angry: "😠",
        neutral: "😐"
    };

    return (
        <div className="result-card">
            <h1>{emoji[mood]} {mood.toUpperCase()}</h1>
            <p>Your emotional state detected by AI.</p>
        </div>
    );
}
