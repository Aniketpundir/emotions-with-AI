import pandas as pd
import joblib
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB

# Load dataset
data = pd.read_csv("emotion.csv")

X = data["text"]
y = data["emotion"]

# NLP + ML pipeline
model = Pipeline([
    (
        "tfidf",
        TfidfVectorizer(
            stop_words="english",
            ngram_range=(1, 2),
            max_features=5000
        )
    ),
    ("classifier", MultinomialNB())
])

# Train model
model.fit(X, y)

# Save model
joblib.dump(model, "emotion_model.pkl")

print("✅ Model trained successfully using", len(data), "records")
