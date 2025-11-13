const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendChat');
const closeBtn = document.getElementById('closeChat');
const chatWidget = document.getElementById('chatWidget');
const openChatBtn = document.getElementById("openChat");
// Adiciona uma nova mensagem
function addMessage(text, sender) {
    const msg = document.createElement('div');
    msg.classList.add('message', sender);
    msg.textContent = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Respostas automáticas do bot
function botResponse(input) {
    const text = input.toLowerCase();if (text.includes("oi") || text.includes("olá") || text.includes("e aí") || text.includes("bom dia") || text.includes("boa tarde") || text.includes("boa noite"))
    return "Oi! 😊 Seja bem-vindo(a)! Como posso te ajudar hoje?";

if (text.includes("quero curso") || text.includes("tenho interesse em cursos"))
    return "Temos vários cursos gratuitos sobre finanças, investimentos e desenvolvimento pessoal! Quer que eu te recomende um? 🎓";

if (text.includes("preço") || text.includes("valor") || text.includes("custa") || text.includes("quanto"))
    return "Boa notícia! 😄 Todos os nossos cursos são totalmente gratuitos.";

if (text.includes("pagamento") || text.includes("pagar") || text.includes("cartão") || text.includes("boleto") || text.includes("pix"))
    return "Você não precisa pagar nada 💸 Todos os cursos são 100% gratuitos e online!";

if (text.includes("horário") || text.includes("hora") || text.includes("quando") || text.includes("duração"))
    return "Os cursos são online e com horários flexíveis ⏰ Você pode assistir quando quiser!";

if (text.includes("claro") || text.includes("com certeza"))
    return "Perfeito! 😄 Me conta qual tema você mais se interessa: investimentos, finanças pessoais ou empreendedorismo?";

if (text.includes("não") || text.includes("nao"))
    return "Tudo bem! 😉 Se mudar de ideia, estarei por aqui pra te ajudar.";

if (text.includes("mentoria") || text.includes("mentorias"))
    return "As mentorias são personalizadas e focadas nos seus objetivos 👥 Quer saber mais sobre como participar?";

if (text.includes("investimento") || text.includes("investir") || text.includes("dinheiro"))
    return "Temos cursos gratuitos sobre investimentos, renda fixa, bolsa de valores e até criptomoedas!. Tudo isso na nossa aba de Cursos! 📈";

if (text.includes("ajuda") || text.includes("duvida") || text.includes("dúvida") || text.includes("explica"))
    return "Claro! 😄 Me diga sobre o que você quer ajuda — posso te explicar passo a passo.";

if (text.includes("certificado") || text.includes("certificação"))
    return "Sim! 🎓 Todos os cursos oferecem certificado digital gratuito de conclusão.";

if (text.includes("contato") || text.includes("falar com") || text.includes("suporte") || text.includes("atendimento"))
    return "Você pode entrar em contato com nossa equipe pelo WhatsApp ou e-mail 📱 Quer que eu te envie o link direto?";

if (text.includes("acesso") || text.includes("plataforma") || text.includes("online"))
    return "Os cursos são 100% online e com acesso vitalício 🔓 Assim você pode estudar quando e onde quiser!";

if (text.includes("professor") || text.includes("instrutor") || text.includes("quem ensina"))
    return "Todos os cursos são ministrados por especialistas com experiência real no mercado 💼";

if (text.includes("gratuito") || text.includes("de graça") || text.includes("free"))
    return "Isso mesmo! 😄 Todos os cursos da Mentor Go são gratuitos e abertos ao público.";

if (text.includes("inicio") || text.includes("começar") || text.includes("inscrição") || text.includes("inscrever"))
    return "Você pode se inscrever de forma gratuita direto pelo nosso site 🧾 Quer que eu te envie o link da página de cursos?";

if (text.includes("reembolso") || text.includes("cancelar") || text.includes("cancelamento"))
    return "Como os cursos são gratuitos, não há necessidade de reembolso 😉 Você pode entrar e sair quando quiser!";

if (text.includes("tempo") || text.includes("quanto tempo") || text.includes("dura"))
    return "A duração varia de acordo com o curso — alguns são rápidos e outros mais completos ⏳ Quer saber sobre algum específico?";

if (text.includes("blog"))
    return "Nosso blog traz dicas e análises sobre o mercado financeiro pra te manter sempre atualizado! 📰";

if (text.includes("obrigado") || text.includes("valeu") || text.includes("agradeço"))
    return "De nada! 😄 Fico feliz em ajudar. Vou te recomendar alguns cursos, antes de tudo diga o nivel que você está entre Básico, Avançado ou Intermediário. ";

if (text.includes("iniciante") || text.includes("começando") || text.includes("novo nisso"))
    return "Sem problema! 🚀 Temos cursos ideais pra quem está começando do zero e quer entender o básico de finanças e investimentos.";

if (text.includes("avançado") || text.includes("experiente") || text.includes("já sei"))
    return "Legal! 👏 Temos cursos avançados que abordam investimentos, bolsa de valores e estratégias de crescimento financeiro.";

if (text.includes("básico") || text.includes("iniciante") || text.includes("começar"))
    return "Show! 👌 Temos cursos básicos como Introdução às Finanças, Primeiros Passos na Renda Fixa e Fundamentos da Bolsa. Perfeito pra quem tá começando do zero.";
if (text.includes("intermediário") || text.includes("já sei o básico") || text.includes("nível médio"))
    return "Beleza! 👍 Temos cursos intermediários como Investindo em Fundos Imobiliários, Análise Técnica e Planejamento Financeiro Pessoal.";

if (text.includes("erro") || text.includes("bug") || text.includes("não funciona") || text.includes("problema"))
    return "Poxa 😕 Me conta o que aconteceu pra eu tentar te ajudar!";

if (text.includes("link") || text.includes("site") || text.includes("página"))
    return "Claro! 🌐 Você pode acessar tudo direto pelo site oficial da Mentor Go.";

if (text.includes("email") || text.includes("e-mail"))
    return "Você pode nos contatar por e-mail em suporte@mentorgo.com 📩";

if (text.includes("whatsapp"))
    return "Você pode falar com nossa equipe pelo WhatsApp! 📱 Quer que eu envie o número?";

if (text.includes("obrigada") || text.includes("vlw") || text.includes("tmj"))
    return "Haha 😄 Tamo junto! Sempre bom poder ajudar.";

if (text.includes("curso de criptomoedas") || text.includes("blockchain"))
    return "O curso de Criptomoedas e Blockchain ensina como funcionam as moedas digitais, segurança e como investir nesse mercado em crescimento. 💰";

if (text.includes("renda fixa") || text.includes("tesouro direto"))
    return "O curso de Renda Fixa e Tesouro Direto mostra como investir de forma segura e previsível, ideal pra quem quer começar com pouco risco. 📈";

if (text.includes("imoveis") || text.includes("imóvel"))
    return "O curso de Investimentos em Imóveis ensina como lucrar com imóveis, seja comprando, alugando ou investindo em fundos imobiliários. 🏠";

if (text.includes("educação financeira") || text.includes("mentalidade de investidor"))
    return "O curso de Educação Financeira e Mentalidade de Investidor ajuda você a organizar suas finanças e pensar como um verdadeiro investidor. 🧠";

if (text.includes("empreendedorismo") || text.includes("liberdade financeira"))
    return "O curso de Empreendedorismo e Liberdade Financeira mostra como criar oportunidades, montar negócios e conquistar independência financeira. 💼";

if (text.includes("planejamento financeiro"))
    return "O curso de Planejamento Financeiro ensina como controlar seus gastos, montar uma reserva e alcançar suas metas financeiras. 💡";

if (text.includes("investindo na bolsa"))
    return "O curso Investindo na Bolsa de Valores te ensina a comprar ações, entender o mercado e investir de forma inteligente. 📊";

if (text.includes("mentoria individual"))
    return "A Mentoria Individual é um acompanhamento personalizado com um especialista que te orienta em cada passo da sua jornada financeira. 🤝";

return "Hmm... não entendi muito bem 😅 Pode reformular sua pergunta?";

}

// Envia mensagem do usuário e gera resposta do bot
function sendMessage() {
    const userText = chatInput.value.trim();
    if (!userText) return;

    addMessage(userText, 'user');
    chatInput.value = '';

    setTimeout(() => {
        const response = botResponse(userText);
        addMessage(response, 'bot');
    }, 600);
}

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Abre e fecha o chat com classe "active"
openChatBtn.addEventListener('click', () => {
  chatWidget.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  chatWidget.classList.remove('active');
});

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
