from flask import Flask, request, jsonify
from transformers import pipeline, Conversation
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

chatbot = pipeline("text-generation", model="facebook/blenderbot-400M-distill")  # melhor para chat multi-turno
conversation_history = Conversation()

@app.route("/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json()
        user_msg = data.get("message", "")
        if not user_msg:
            return jsonify({"error": "Mensagem vazia"}), 400

        conversation_history.add_user_input(user_msg)
        response = chatbot(conversation_history)
        bot_reply = response[0]["generated_text"]

        return jsonify({"reply": bot_reply})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
