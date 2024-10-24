// Selecionando os elementos do formulário e da página
const form = document.getElementById('currency-form'); // cria const para o formulário
const amountInput = document.getElementById('amount'); // cria const para campo onde o usuário insere o valor para conversão
const fromCurrency = document.getElementById('from-currency'); // cria const para armazenar moeda de origem para conversão
const toCurrency = document.getElementById('to-currency'); // cria const para armazenar moeda de destino
const resultDiv = document.getElementById('result'); // cria const para onde o resultado será exibido
const resetButton = document.getElementById('reset'); // cria const para botão que limpa o formulário

// Função para fazer a requisição à API e obter a taxa de câmbio
function getConversionRate(from, to) {
    const url = `https://economia.awesomeapi.com.br/last/${from}-${to}`; // URL da API: A URL da API é formatada dinamicamente com as moedas selecionadas (from e to). Por exemplo, se o usuário selecionar "USD" para "from" e "BRL" para "to", a URL será: https://economia.awesomeapi.com.br/last/USD-BRL.
    return fetch(url) //cria um fetch na url sendo resolvido apenas quando a url retorna um valor ao fetch
        .then(response => response.json())
        .then(data => {
            // O nome do par de moedas será no formato "FROMTO" (ex: USDBRL, EURUSD)
            const conversionKey = `${from}${to}`; // cria const puxando propiedades da url from=de to=para (representado como a junção das moedas ex: USDBRL)
            return data[conversionKey].bid; // agora o campo acessa a função bid que representa o valor de cotação da moeda de origem em relação a moeda de destino
        })
        .catch(error => {
            console.error('Erro ao buscar dados da API:', error);
            resultDiv.innerHTML = 'Erro ao buscar dados da conversão. Tente novamente mais tarde.';
        }); // esse campo serve para relatar caso ocorra algum erro quando o código for se comucar com a API, caso ocorra o erro ele armazena o mesmo no campo catch e após exibira o erro na tela
}
// Função para realizar a conversão
function convertCurrency(event) {
    event.preventDefault(); // Evitar que a página seja recarregada ao enviar o formulário

    const amount = parseFloat(amountInput.value); // Verifica o valor mandado pelo usuário se é positivo e numérico caso seja inválido é exibida uma mensagem de erro
    const from = fromCurrency.value; // Moeda de origem
    const to = toCurrency.value; // Moeda de destino

    if (isNaN(amount) || amount <= 0) {
        resultDiv.innerHTML = 'Por favor, insira um valor válido.';
        return;
    } // mensagem de erro da const amont

    // caso o valor enviado pelo usuário seja valido:

    // Chama a função para obter a taxa de conversão
    getConversionRate(from, to).then(rate => {
        if (rate) {
            const convertedAmount = (amount * rate).toFixed(2); // Faz o cálculo da conversão. Usando o valor de amont e multiplicando o valor pela taxa rate e o resultado é arredondado para duas casas decimais com .toFixed(2)
            resultDiv.innerHTML = `<p>${amount} ${from} = ${convertedAmount} ${to}</p>`; // exibe o valor obtido
        }
    });
}

// Função para resetar o formulário e o resultado
function resetForm() {
    form.reset(); // redefine o formulário para os valores iniciais
    resultDiv.innerHTML = ''; // limpa o resultado mostrado na tela
}

// Adicionando os event listeners para o submit do formulário e o botão de reset
form.addEventListener('submit', convertCurrency); // adiciona evento para que quando o usuário clicar em enviar a função convetCurrency seja executada
resetButton.addEventListener('click', resetForm); // adiciona evento para que quando o usúario clicar no botão de reset o formulário execute a função resetForm