//cria uma variavel do tipo constante (const) que significa que o que for atribuido a ela não mude de valor depois, adiciona também [] que é uma estrutura de dados chamado array ou vetores, onde irá agrupar todas as perguntas do quiz
const perguntas = [
    //cria um objeto dentro do array {}
    {
      //é uma propriedade do objeto
      pergunta: "Qual é a finalidade do comando 'console.log' em JavaScript?",
      //essa propriedade do objeto dentro do array perguntas tem outro array para guardar as respostas
      respostas: [
        "Exibir uma mensagem de erro",
        "Imprimir informações no console",
        "Realizar uma operação matemática"
      ],
      //outra proprieda do objeto guardando o valor da resposta correta
      correta: 1
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado que representa um número inteiro",
        "Uma estrutura de controle de fluxo",
        "Uma coleção ordenada de valores"
      ],
      correta: 2
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let nomeDaVariavel = valor;",
        "const nomeDaVariavel = valor;",
        "var nomeDaVariavel = valor;"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Um modelo de objeto para interação com o documento HTML",
        "Um tipo de dado numérico"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Não há diferença, ambos são iguais",
        "O '==' compara apenas os valores, enquanto o '===' compara valores e tipos",
        "O '===' compara apenas os valores, enquanto o '==' compara valores e tipos"
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um objeto HTML",
        "Um bloco de código reutilizável que realiza uma tarefa específica"
      ],
      correta: 2
    },
    {
      pergunta: "Como se faz um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i < 10; i++)",
        "loop.for (i = 0; i < 10; i++)",
        "while (i < 10; i++)"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o operador ternário em JavaScript?",
      respostas: [
        "Um operador lógico para negação",
        "Um operador que realiza operações matemáticas",
        "Um operador condicional de três partes"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      respostas: [
        "Adicionar um elemento HTML ao documento",
        "Adicionar um ouvinte de eventos a um elemento, como um clique do mouse",
        "Remover um elemento do documento"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Um tipo de dado para armazenar números",
        "Um formato de intercâmbio de dados baseado em texto",
        "Um método para criar objetos"
      ],
      correta: 1
    }
  ];
  
  //cria uma constante para receber o id=#quiz, pela pelo objeto document e usa a função de pesquisa querySelector
  const quiz = document.querySelector('#quiz')
  
  //pega o tamplate usando o objeto document->(transforma tudo que tem dentro do documento como um objeto js). Usa também o querySelector que é uma função de pesquisa e ele vai pesquisar pelo seletor no caso "template"
  const template = document.querySelector('template')
  
  //cria uma const chama corretas e ele vai receber um new que é uma palavra reservada do js que serve para criar coisas novas e que geralmente é uma estrutura de dados ou um tipo de objeto especifico (Set() -> é um conjunto que pode adicionar ou retirar e tudo que tem dentro dele não pode se repetir)
  const corretas = new Set()
  //o const totalDePerguntas recebe o total de itens contido dentro do array que agora vira objeto pq o js permite você usar um array como objeto usando um.algumacoisa e o length vai dá esse total de itens
  const totalDePerguntas = perguntas.length
  //ele vai fazer uma busca do span contido dentro da tag que contem o id #acertos e vai fazer com que a const mostrarTotal receba ela
  const mostrarTotal = document.querySelector('#acertos span')
  //então no mostrarTotal ele vai ter o conteúdo de texto dele substituído pelo número de respostas corretas (corretas.size) mais o 'de' mais o total de perguntas contido dentro da const totalDePerguntas
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //LOOP OU LAÇO DE REPETIÇÃO
  //Para cada item de perguntas ele vai executar uma ação que vai ser especificada no códigos dentro do escopo {}
  for(const item of perguntas) {
    //ele é de fato tamplate, ele vai pegar o conteúdo dentro da tag tamplate usando o .content e lá dentro vai usar uma função (.cloneNode) que clona o NO que também é conhecida como TAG. Para ele clonar além do NO principal é preciso passar por parametro TRUE, assim ele vai pegar todos os outros NOs filhos
    const quizItem = template.content.cloneNode(true)
    //vai pegar o tamplate clonado e vai pesquisar pelo h3 vai pegar o conteúdo do texto e vai atribuir um novo valor que está em item.pergunta
    quizItem.querySelector('h3').textContent = item.pergunta
  
    //Para cada respostas de item.respostas ele vai executar uma ação que vai ser especificada no códigos dentro do escopo {}
    for(let resposta of item.respostas) {
      //cria uma contante para guardar o clone das coisas coisas que estão dentro da tag dt. Dentro do clone do tamplate (quizItem) ele vai fazer uma pesquisa (querySelector) e dentro de um dl ele vai procurar um dt para depois clona-los (cloneNode) e para clonar tudo que tem dentro passa por parametro o true
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      //pesquisa dentro do dt um span e pega o conteúdo do texto e adiciona o conteúdo do texto contido dentro de resposta
      dt.querySelector('span').textContent = resposta
      //ele vai no dt e vai fazer uma seleção do input e para ele vai ser feito uma atribuição de valor pra isso precisa ser passado 2 parametros: o nome do atributo e qual o valor do atributo, no valor especifico do atributo name ele vai colocar a palavra pergunta- e vai concatenar com o indice (0,1,2,3...). Para pegar o indice ele pega o array de perguntas e como na linguagem js muitas coisas podem se tornar um objeto, então ele pega a função inedxOf que vai pesquisar o indice, para especificar passa por parametro o item que é de lá que ela tem que pegar o indice. Essa parte do código permite que o usuário marque o radio da pergunta seguinte sem desmarcar o radio da pergunta anterior
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      //dentro desse dt o querySelector está fazendo uma pesquisa no input e pegando o value dele e atribuir o item.respostas que é um array e procura o indice da resposta do momento. Essa parte do código adiciona um indice que começa em 0 para cada opção de resposta de cada uma das perguntas
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      //ele vai fazer uma pesquisa para pegar o input dentro do dt e vai colocar nele um onchange, o onchange espera que exista uma arrowfunction (()=>{}) depois dele, o onchange analisa se o input muda, e quando isso acontece ele executa o trecho de código que está dentro do escopo da arrowfunction, por parametro usa-se o event que será o evento realizado
      dt.querySelector('input').onchange = (event) => {
        //ele cria uma constante para receber a resposta da comparação (==) entre o valor selecionado do input com o item da resposta correta que está no array
        const estaCorreta = event.target.value == item.correta
        //antes do if ele sempre vai pegar o item contido dentro da corretas
        corretas.delete(item)
        //se a resposta estiver correta entra dentro do escopo e add novamente o item e mantem
        if(estaCorreta) {
          //pega o const corretas que foi atribuída o new Set(). O Set() dá algumas opções dentre delas está o add() que é uma função e por parametro pega o item (o item se refere as posições do array perguntas) inteiro dentro do corretas
          corretas.add(item)
        }
        //o mostrarTotal vai ter o conteúdo de texto dele substituído pelo número de respostas corretas (corretas.size) mais o 'de' mais o total de perguntas contido dentro da const totalDePerguntas
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      //ele vai pesquisar no clone do tamplate o dl e vai adicionar um filho que é o dt 
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    //vai fazer uma pesquisa no clone do tamplate e vai dl até o dt e vai remover (esse trecho do código só remove o primeiro elemento já que é um elemento criado no documento e não está no array respostas)
    quizItem.querySelector('dl dt').remove()
  
    
    //ele pega a const quiz e vai colocar o filho quizItem
    quiz.appendChild(quizItem)
  }
  