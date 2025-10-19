from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline

app = Flask(__name__)
CORS(app)  # Habilita CORS

# Modelo Hugging Face
model_name = "microsoft/DialoGPT-small"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)
chatbot = pipeline("text-generation", model=model, tokenizer=tokenizer)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_input = data.get("message", "")
    if not user_input:
        return jsonify({"error": "Mensagem vazia"}), 400

    response = chatbot(user_input, max_length=50, do_sample=True, top_k=50)
    bot_reply = response[0]["generated_text"]
    return jsonify({"reply": bot_reply})

# GET de teste (navegador)
@app.route("/chat", methods=["GET"])
def chat_test():
    return "Rota /chat ativa! Use POST para conversar."

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
