// script.js

// Cria o container do chat no canto da tela
let chatContainer = document.createElement("div");
chatContainer.classList.add("chat-container");
document.body.appendChild(chatContainer);

// Cria input e botão dentro do chat
let chatInput = document.createElement("input");
chatInput.type = "text";
chatInput.placeholder = "Escreva algo...";
chatInput.classList.add("chat-input");

let sendBtn = document.createElement("button");
sendBtn.textContent = "Enviar";
sendBtn.classList.add("chat-send-btn");

let chatFooter = document.createElement("div");
chatFooter.classList.add("chat-footer");
chatFooter.appendChild(chatInput);
chatFooter.appendChild(sendBtn);

chatContainer.appendChild(chatFooter);

// Função para adicionar mensagem no chat
function adicionarMensagem(texto, tipo="user") {
    const msg = document.createElement("div");
    msg.textContent = texto;
    msg.style.padding = "8px 12px";
    msg.style.borderRadius = "12px";
    msg.style.maxWidth = "80%";
    msg.style.wordWrap = "break-word";

    if(tipo === "user") {
        msg.style.background = "#56C596";
        msg.style.color = "#000";
        msg.style.alignSelf = "flex-end";
    } else {
        msg.style.background = "#fff";
        msg.style.color = "#000";
        msg.style.alignSelf = "flex-start";
    }

    chatContainer.insertBefore(msg, chatFooter);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Função para adicionar loader
function adicionarLoader() {
    const loader = document.createElement("div");
    loader.textContent = "Sabius está pensando...";
    loader.style.fontStyle = "italic";
    loader.style.color = "#eee";
    loader.style.alignSelf = "flex-start";
    chatContainer.insertBefore(loader, chatFooter);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    return loader;
}

// Função para enviar mensagem ao servidor
async function enviarMensagem() {
    const userInput = chatInput.value.trim();
    if (!userInput) return;

    adicionarMensagem(userInput, "user");
    chatInput.value = "";

    const loader = adicionarLoader();

    try {
        const response = await fetch("http://localhost:5000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userInput })
        });
        const data = await response.json();
        loader.remove();

        if(data.reply) adicionarMensagem(data.reply, "bot");
        else if(data.error) adicionarMensagem("Erro: "+data.error, "bot");
    } catch(err) {
        loader.remove();
        adicionarMensagem("Erro ao se conectar com o Sabius.", "bot");
        console.error(err);
    }
}

// Evento de clique no botão enviar
sendBtn.addEventListener("click", enviarMensagem);

// Enviar mensagem ao pressionar Enter
chatInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") enviarMensagem();
});

// Conecta o botão principal do site ao chat
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".btn-chat");
    if(btn) btn.addEventListener("click", () => {
        chatContainer.style.display = "flex"; // Mostra o chat
        chatInput.focus();
    });
});
