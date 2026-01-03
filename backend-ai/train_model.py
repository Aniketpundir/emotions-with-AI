import pandas as pd
import joblib
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB

data = pd.read_csv("emotion.csv")

X = data["text"]
y = data["emotion"]

model = Pipeline([
    ("tfidf", TfidfVectorizer(
        stop_words="english",
        ngram_range=(1, 2),
        max_features=5000
    )),
    ("clf", MultinomialNB())
])

model.fit(X, y)

joblib.dump(model, "emotion_model.pkl")
print("Model trained successfully")
