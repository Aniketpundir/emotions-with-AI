from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow frontend requests

# Health check route (GET only)
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "AI Mood Server is running"}), 200

# Mood prediction route (POST)
@app.route("/predict", methods=["POST"])
def predict_mood():
    data = request.get_json()

    if not data or "answers" not in data:
        return jsonify({"error": "Answers not provided"}), 400

    answers = data["answers"]

    # SIMPLE RULE-BASED LOGIC (can replace with ML later)
    joined_text = " ".join(answers).lower()

    if "happy" in joined_text or "good" in joined_text:
        mood = "happy"
    elif "sad" in joined_text or "low" in joined_text:
        mood = "sad"
    elif "anxious" in joined_text or "worried" in joined_text:
        mood = "anxious"
    elif "angry" in joined_text or "frustrated" in joined_text:
        mood = "angry"
    else:
        mood = "neutral"

    return jsonify({
        "predicted_mood": mood
    }), 200


if __name__ == "__main__":
    app.run(debug=True)
