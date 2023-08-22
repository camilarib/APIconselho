//que garante que o código seja executado após a página ser carregada.
document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://api.adviceslip.com/advice"; // Define a URL da API que fornece conselhos aleatórios.
    const adviceElement = document.getElementById("advice"); // Obtém a referência ao elemento HTML onde o conselho será exibido.
    const getAdviceButton = document.getElementById("get-advice"); //ao clicar no botão irá solicitar um novo conselho

    function fetchAdvice() { //define a função para buscar conselhos
        // Faz uma requisição fetch para a URL da API.
        fetch(apiUrl)
            .then(response => response.json())// Trata a resposta como JSON.
            .then(data => { // Quando os dados JSON são recebidos, execute esta função.

                // Extrai o conselho aleatório da resposta JSON.
                const advice = data.slip.advice;

                adviceElement.textContent = advice; //atualiza o elemento para mostrar um novo conselho
            })
            // Se ocorrer um erro durante a requisição ou processamento do JSON, execute esta função.
            .catch(error => {
                // Exibe uma mensagem de erro no console.
                console.error("Erro ao buscar conselho da API:", error);
                // Atualiza o conteúdo do elemento HTML para exibir uma mensagem de erro.
                adviceElement.textContent = "Erro ao buscar conselho da API.";
            });
    }

    // Adiciona um evento de clique ao botão "getAdviceButton".
    // Quando o botão é clicado, a função "fetchAdvice()" será chamada para buscar e exibir um novo conselho da API.
    getAdviceButton.addEventListener("click", fetchAdvice);
});