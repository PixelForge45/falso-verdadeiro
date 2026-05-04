function gerarRedacaoNota1() {
    // Tópicos simples para redação de nota 1 (nível básico)
    const topicos = [
        "Minha família",
        "Minha escola",
        "Meus amigos",
        "Meu animal de estimação",
        "Minhas brincadeiras"
    ];

    // Frases básicas e curtas
    const frasesBasicas = [
        "Eu gosto da minha família.",
        "Na escola eu aprendo.",
        "Meus amigos são legais.",
        "Eu tenho um cachorro.",
        "Eu brinco no parque."
    ];

    // Selecionar um tópico aleatório
    const topico = topicos[Math.floor(Math.random() * topicos.length)];

    // Gerar 3-5 frases simples
    let redacao = `Tópico: ${topico}\n\n`;
    const numFrases = Math.floor(Math.random() * 3) + 3; // 3 a 5 frases

    for (let i = 0; i < numFrases; i++) {
        const frase = frasesBasicas[Math.floor(Math.random() * frasesBasicas.length)];
        redacao += frase + " ";
    }

    redacao += "\n\nFim da redação.";

    return redacao;
}

// Exemplo de uso
console.log(gerarRedacaoNota1());