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
// === Chat Flutuante ===
const chatWidget = document.getElementById('chatWidget');
const openChat = document.getElementById('openChat');
const closeChat = document.getElementById('closeChat');
const chatBody = document.getElementById('chatBody');
const sendChat = document.getElementById('sendChat');
const chatInput = document.getElementById('chatInput');

openChat.addEventListener('click', () => chatWidget.style.display = 'flex');
closeChat.addEventListener('click', () => chatWidget.style.display = 'none');

sendChat.addEventListener('click', () => {
    const msg = chatInput.value.trim();
    if (msg === '') return;

    const userMsg = document.createElement('div');
    userMsg.classList.add('message', 'user');
    userMsg.textContent = msg;
    chatBody.appendChild(userMsg);

    chatInput.value = '';

    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.classList.add('message', 'bot');
        botMsg.textContent = respostaBot(msg);
        chatBody.appendChild(botMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 600);
});

function respostaBot(msg) {
    msg = msg.toLowerCase();
    if (msg.includes('básico')) return "O curso básico é perfeito pra começar a entender investimentos.";
    if (msg.includes('intermediário')) return "O intermediário aprofunda seus conhecimentos e análise de risco.";
    if (msg.includes('avançado')) return "O avançado é ideal pra quem quer maximizar resultados!";
    return "Posso te ajudar a escolher o curso ideal! 😊";
}

// === Filtro de busca ===
const searchInput = document.getElementById('searchInput');
const coursesList = document.getElementById('coursesList');
const courses = Array.from(coursesList.getElementsByClassName('course'));

searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();
    courses.forEach(course => {
        const title = course.querySelector('h2').textContent.toLowerCase();
        course.style.display = title.includes(term) ? 'block' : 'none';
    });
});

// === Animação ao rolar ===
const fadeElements = document.querySelectorAll('.course, .testimonial');

function checkFade() {
    const trigger = window.innerHeight * 0.85;
    fadeElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) el.classList.add('visible');
    });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);
