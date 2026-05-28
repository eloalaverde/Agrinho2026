// Seleciona o botão e a área da mensagem
const botao = document.getElementById("botaoMensagem");
const mensagem = document.getElementById("mensagem");

// Evento de clique no botão
botao.addEventListener("click", function () {

    mensagem.innerHTML =
        "🌱 Agricultura sustentável utiliza tecnologia e consciência ambiental para proteger o planeta!";

});

// Seleção do formulário
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultadoFormulario");

// Evento de envio do formulário
formulario.addEventListener("submit", function (evento) {

    // Impede recarregar a página
    evento.preventDefault();

    // Captura os valores digitados
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagemTexto = document.getElementById("mensagemTexto").value;

    // Validação simples
    if (nome === "" || email === "" || mensagemTexto === "") {

        resultado.innerHTML = "⚠️ Preencha todos os campos!";
        resultado.style.color = "yellow";

    } else {

        resultado.innerHTML =
            `✅ Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;

        resultado.style.color = "#90ee90";

        // Limpa o formulário
        formulario.reset();
    }

});
