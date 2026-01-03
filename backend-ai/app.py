import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)

MODEL_PATH = os.getenv("MODEL_PATH", "emotion_model.pkl")
model = joblib.load(MODEL_PATH)

@app.route("/")
def home():
    return {"status": "AI Emotion Backend Running"}

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    answers = " ".join(data["answers"])
    mood = model.predict([answers])[0]
    return jsonify({"mood": mood})

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8000))
    app.run(host="0.0.0.0", port=port)
