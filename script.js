// === Conversas pré-moldadas ===
const conversations = [
    { "pergunta":"oi", "resposta":["Oi! Eu sou o Sabius, seu assistente de investimentos. Bora aprender a investir?","Oi! Tudo bem? Quer dicas de investimento?"] },
    { "pergunta":"olá", "resposta":["Olá! Que bom te ver por aqui. Quer dicas de investimento?","Oi oi! Preparado pra melhorar sua inteligência financeira?"] },
    { "pergunta":"ações", "resposta":["Ótimo! Ações são ideais para investimento a longo prazo. Quer ver dicas de diversificação?","Investir em ações pode ser lucrativo, mas exige estudo."] },
    { "pergunta":"fundos", "resposta":["Fundos são uma boa forma de investir sem precisar escolher ações individualmente.","Existem fundos de renda fixa, multimercado e imobiliários. Quer detalhes?"] },
    { "pergunta":"renda fixa", "resposta":["Renda fixa é segura e indicada para quem quer preservar capital.","CDB, Tesouro Direto, LCI/LCA são exemplos de renda fixa."] },
    { "pergunta":"curso", "resposta":["Temos cursos básicos, intermediários e avançados. Qual nível você quer?","Quer aprender desde o zero ou já tem experiência?"] },
    { "pergunta":"blog", "resposta":["No blog você encontra dicas, erros comuns e estratégias de investimento.","O blog está cheio de conteúdos sobre finanças e investimentos."] },
    { "pergunta":"default", "resposta":["Desculpe, não entendi. Pode reformular sua pergunta sobre investimentos?","Não entendi, pode perguntar de outra forma sobre investimentos?"] }
];

// === Função adicionar mensagem ao chat ===
function appendMessage(msg, sender) {
    const chatBody = document.getElementById("chatBody");
    const msgEl = document.createElement("div");
    msgEl.classList.add("message", sender);
    msgEl.textContent = msg;
    chatBody.appendChild(msgEl);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// === Função pegar resposta do bot ===
function getBotReply(userMsg) {
    const msg = userMsg.toLowerCase();
    for (const conv of conversations) {
        if (msg.includes(conv.pergunta)) {
            const responses = conv.resposta;
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    const defaultConv = conversations.find(c => c.pergunta === "default");
    return defaultConv.resposta[Math.floor(Math.random() * defaultConv.resposta.length)];
}

// === Enviar mensagem ===
function sendMessage() {
    const input = document.getElementById("chatInput");
    const msg = input.value.trim();
    if (!msg) return;

    appendMessage(msg, "user");
    input.value = "";

    setTimeout(() => {
        const botReply = getBotReply(msg);
        appendMessage(botReply, "bot");
    }, 500);
}

// === Inicialização ===
document.addEventListener("DOMContentLoaded", () => {
    const sendBtn = document.getElementById("sendChat");
    const chatInput = document.getElementById("chatInput");
    const chatWidget = document.getElementById("chatWidget");
    const chatToggle = document.getElementById("chatHeader");
    const closeChat = document.getElementById("closeChat");
    const chatBtn = document.querySelector(".btn-chat");

    sendBtn.addEventListener("click", sendMessage);

    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendMessage();
    });

    // Abrir / fechar chat
    chatToggle.addEventListener("click", () => {
        chatWidget.classList.toggle("minimized");
    });

    closeChat.addEventListener("click", () => {
        chatWidget.style.display = "none";
    });

    if(chatBtn){
        chatBtn.addEventListener("click", () => {
            chatWidget.style.display = "flex";
            chatWidget.classList.remove("minimized");
        });
    }
});
