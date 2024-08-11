<h1 align="center">Piano virtual com Gemini</h1>

<h2 align="center">Projeto onde você pode pedir para essa LLM criar uma música que será tocada no piano virtual</h2>

<hr>
<h3 id="Tecnologias">Tecnologias: 
  <br> &#x2705; FrontEnd -> &#x26AA; HTML &#x26AA; CSS &#x26AA; JavaScript 
  <br> &#x2705; BackEnd -> &#x26AA; Node.js &#x26AA; Express Framework
</h3>

<p> &#x1F7E9; Este projeto foi elaborado com o intuito de treinar as seguintes técnica: </p> 
<ul>
  <li>Roteamento</li>
  <li>Backend com Node</li>
  <li>Estruturação de uma aplicação em container com Docker</li>
  <li>Gerenciamento de Requisições e Respostas de APIs como o Gemini</li>
</ul>

<hr>

<h3 id="Teste">Tente você mesmo!</h3>

<p><strong>1º</strong> Abra a aplicação <a href='https://www.docker.com/products/docker-desktop/'>Docker 🐋</a>, ou faça a instalação caso não tenha, porque a aplicação é isolada em um container que conta com todas as tecnologias necessárias para seu funcionamento.</p>

<p><strong>2º</strong> Instale também esse respositório, através do botão <i>Code</i> ou clonando na sua máquina, utilize a <i>branch</i> <strong>main</strong> .</p>

<p><strong>3º</strong> Antes de iniciar o projeto, com a criação do container de fato, é preciso definir alguns valores dentro do arquivo <strong>.env.example</strong>:</p>
<ul>
  <li><strong>Chave da API -></strong> Consiste em um identificador do seu projeto para que ele consisga fazer a devida comunicação com os servidores do Google Gemini. Essa chave é pessoal, não deve ser compartilhada, porque em uma aplicação profissional é através dela que as cobranças são feitas! Para obter uma chave é simples, basta acessar esse <a href="https://aistudio.google.com/">link</a> da plataforma AiStudio do Google, onde uma vez cadastrado com sua conta, basta clicar no botão <strong>Get API Key</strong> e seguir um simples passo-a-passo para gerar uma nova chave. Com ela em mãos basta adicioná-la ao arquivo de ambiente no formato de string <strong>API_KEY='sua_chave'</strong>.</li>
  <li><strong>Porta do projeto -></strong> É a definição da porta onde o projeto irá ser executado, por padrão, o código do arquivo <strong>Dockerfile</strong> assume que ele irá rodar em <strong>8002</strong>, mas se quiser alterar é simples, basta trocar esse valor nesse arquivo para algo que te atenda. No arquivo de ambiente, .env.example, basta adicionar o valor escolhido através de <strong>APP_PORT=8002</strong></li>
  <li><strong>Renomeando o arquivo -></strong> Com os valores definidos basta renomear esse arquivo para simplesmente <strong>.env</strong> para que ele seja lido corretamente pela aplicação.</li>
</ul>

<p><strong>4º</strong> Para que a imagem do container seja criada é preciso digitar o comando a baixo em um terminal rodando na pasta do projeto: <br>
  
```cmd
docker build -t piano .
```

<p><strong>5º</strong> Com tudo já definido o último passo é criar o container da aplicação através da imagem que já foi estabelecida. Novamente, basta digitar o seguinte comando em um terminal que esteja rodando no diretório da aplicação: </p>

```cmd
docker run -p 8002:8002 piano
```

<p><strong>8º</strong> Tudo Certo! Basta acessar <strong>http://localhost:8002/</strong> para que você possa visualizar o projeto em funcionamento!</p>

<hr>

<p><strong>Dica!</strong> Ao tentar gerar uma música através de uma instrução tente completar a frese <strong>"Faça uma música..."</strong> pois esse é o início dessa instrução que é passada ao Gemini através de uma requisição aos seus servidores. Também <strong>seja paciente</strong> tendo em vista que o modelo levará um tempo até que consiga gerar as notas que serão tocadas na sequência do pedido feito para ele.</p>