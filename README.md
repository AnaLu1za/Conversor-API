# Conversor de Moedas Com API
Este projeto é uma aplicação web simples que realiza conversões de moedas, utilizando uma [API de Moedas](https://docs.awesomeapi.com.br/api-de-moedas) para calcular a taxa de câmbio em tempo real.

## Introdução 
O projeto **Conversor de Moedas** tem como objetivo fornecer uma ferramenta simples e eficiente para conversão de valores entre diversas moedas internacionais. Essa aplicação web permite que os usuários façam conversões de forma rápida e precisa, auxiliando no planejamento de viagens, investimentos e gestão financeira pessoal.

## Índice
* [Introdução](#introdução)
* [Descrição](#descrição)
* [Arquitetura do Código](#arquitetura-do-código)
* [Responsividade](#responsividade)
* [Funcionamento](#funcionamento)
* [Funcionalidades](#funcionalidades)
* [Técnicas e tecnologias utilizadas](#técnicas-e-tecnologias-utilizadas)
* [Fontes Consultadas](#fontes-consultadas)
* [Autor(a)](#autora)

## Descrição
A aplicação permite converter valores entre moedas de diversos países.

### Funcionalidades Principais:
- **Seleção de Moedas:** O usuário pode escolher a moeda de origem e a moeda de destino a partir de menus dropdown.
- **Valor de Entrada:** O usuário insere o valor a ser convertido em um campo de texto.
- **Resultado da Conversão:** Ao clicar no botão "Converter", o valor convertido é exibido na tela.
- **Reset de Campos:** Um botão "Resetar" limpa todos os campos de entrada e o resultado, permitindo uma nova conversão.

![Tela de Cadastro](img/conversor-simples.gif)

### Arquitetura do Código
- **HTML:** Define a estrutura da página com formulários, botões e áreas de resultado.
- **CSS:** Controla a aparência da página, garantindo um layout limpo e responsivo.
- **JavaScript:** Realiza a lógica de captura dos valores, requisição da API, cálculo da conversão e exibição do resultado.

### Responsividade
A aplicação é responsiva, com ajustes automáticos de layout para diferentes tamanhos de tela. Isso garante boa legibilidade e usabilidade tanto em dispositivos móveis quanto em desktops.

### Funcionamento 
1. O usuário seleciona as moedas de origem e destino e insere o valor a ser convertido.
2. O JavaScript coleta esses valores e faz uma requisição para a API com as moedas selecionadas no formato ``FROMTO`` (ex: USDBRL).
3. A aplicação recebe a taxa de câmbio e calcula o valor convertido, que é exibido ao usuário.
4. Caso haja um erro na requisição, uma mensagem de erro é exibida.
5. Ao clicar no botão "Resetar", todos os campos são limpos para uma nova operação.


### Funcionalidades
- Conversão entre moedas populares: Dólar, Euro, Real, Libra Esterlina, entre outras.
- Interface simples e fácil de usar.
- Taxas de câmbio atualizadas automaticamente via API.
- Layout responsivo para diferentes dispositivos.


## Javascript
### Estrutura de código
- **Consts:** As consts são definidas para armazenar referências dos elementos do DOM.
![Consts](img/Consts.png)

### Requisão à API
- A URL da API é configurada para buscar as taxas de câmbio. O formato ``FROMTO`` é construído a partir das moedas de origem e destino selecionadas.
![requisição](img/requisição.png)

### Conversão
- Após evitar o comportamento padrão de envio do formulário com ``preventDefault()``, o JavaScript verifica se o valor inserido é válido (positivo e numérico). Em seguida, calcula o valor convertido com base na taxa recebida da API.
![conversão](img/conversão.png)

### Reset de Formulário 
- A função de reset limpa todos os campos e o resultado.
![reset](img/reset.png)

### Eventos
- Dois eventos são configurados: um para a conversão e outro para resetar o formulário.
![eventos](img/eventos.png)


![miau.gif](https://steemitimages.com/DQmZCo76MUSeg8WNYUqr9UMGig3kufJWfENY337KfSbpoJC/miau.gif)


## Técnicas e tecnologias utilizadas
* [<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="HTML5"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
* [<code><img height="32" src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="CSS3"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
* [<code><img height="32" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [<code><img height="32" src="https://www.malwarebytes.com/wp-content/uploads/sites/2/2023/01/asset_upload_file97293_255583.jpg" alt="Git"/></code>](https://git-scm.com/)
* [<code><img height="32" src="https://blog.netscandigital.com/wp-content/uploads/2023/07/O-que-e-o-Google-Bard.png" alt="Bard"/></code>](https://bard.google.com/chat?hl=pt)
* [<code><img height="32" src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="VisualStudio"/></code>](https://code.visualstudio.com/)
* [<code><img height="32" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/></code>](https://github.com/)


## Fontes consultadas 
* [Alura - Como escrever um bom README.md](https://www.alura.com.br/artigos/escrever-bom-readme)
* [Bootstrap](https://getbootstrap.com/docs/5.3/forms/checks-radios/#radios)
* [Alura - Tipos de type](https://cursos.alura.com.br/forum/topico-type-do-campo-telefone-104370)
* [Dio](https://www.dio.me/articles/tutorial-criando-um-readme-bonitao-para-o-seu-github)
* [Progamador alternativo - Youtube](https://youtu.be/HJ16WEmOWTw?si=UFvCAtBHbuCc08Hu)
* [Fotos para o subtópico "Técnicas e tecnologias consultadas"](https://github.com/alexandresanlim/Badges4-README.md-Profile)
* [Youtube - TELA DE LOGIN COM TEMA DARK | HTML + CSS](https://youtu.be/69-WfrVBli8?si=GGultNVszQg0wDUK)
* [HomeHost](https://www.homehost.com.br/blog/tutoriais/html-buttton/)
* [W3schools](https://www.w3schools.com/js/js_window_location.asp)
* [trabalho anterior](https://github.com/Fell1pe/conversor-simples)



## Autores
| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/140712280?v=4" width=115><br><sub>Fellipe Zanin</sub>](https://github.com/Fell1pe) |  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/140712281?v=4" width=115><br><sub>Ana Luiza</sub>](https://github.com/AnaLu1za) |
| :---: | :---: | 

[<code><img height="32" src="https://t.ctcdn.com.br/IwwDh-BajTE4ZwE4zuIcvz9Q2ZY=/i490027.jpeg" alt="Linkedin"/></code>](https://www.linkedin.com/posts/fellipe-zanin-1b1a7728b_github-fell1peconversor-moedas-activity-7254660238400770048-H5PA?utm_source=share&utm_medium=member_desktop)