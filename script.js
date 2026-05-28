// BOTÃO DE MENSAGEM

const botao = document.getElementById("botaoMensagem");

const mensagem = document.getElementById("mensagem");

// Evento de clique
botao.addEventListener("click", function () {

    mensagem.innerHTML =
        "🌱 A sustentabilidade no agronegócio ajuda a preservar a natureza e garante alimentos para o futuro.";

});


// FORMULÁRIO

const formulario = document.getElementById("formulario");

const resultado = document.getElementById("resultadoFormulario");

// Evento de envio
formulario.addEventListener("submit", function (evento) {

    // Impede o recarregamento
    evento.preventDefault();

    // Captura valores
    const nome = document.getElementById("nome").value;

    const email = document.getElementById("email").value;

    const mensagemTexto =
        document.getElementById("mensagemTexto").value;

    // Validação
    if (
        nome === "" ||
        email === "" ||
        mensagemTexto === ""
    ) {

        resultado.innerHTML =
            "⚠️ Preencha todos os campos.";

        resultado.style.color = "yellow";

    } else {

        resultado.innerHTML =
            `✅ Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;

        resultado.style.color = "#90ee90";

        // Limpa formulário
        formulario.reset();
    }

});
