from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)

# Load trained ML model
model = joblib.load("emotion_model.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    # Safety check
    if "answers" not in data:
        return jsonify({"error": "No answers provided"}), 400

    # Join all answers into single text
    combined_text = " ".join(data["answers"])

    # Debug logs (VERY IMPORTANT)
    print("USER INPUT TEXT:", combined_text)

    # Predict emotion
    prediction = model.predict([combined_text])[0]

    print("PREDICTED MOOD:", prediction)

    return jsonify({
        "mood": prediction
    })

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "AI Mood Detection API Running"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
