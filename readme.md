# Monitor de sistema

Nessa aplicação desenvolvi um "dashboard do sistema" usando os módulos OS e o FS do node.js. No
projeto é possível ver algumas informações da sua máquina como por exemplo: o tempo de atividade do
sistema, o nome do sistema operacional e o processador

## Rodando

Clone o projeto

```bash
  git clone https://link-para-o-projeto
```

Alterações Necessárias

1. Modificar o comportamento do setInterval

-   No arquivo "index.js" o setInterval é usado para mostrar as informações a cada 1 segundo e
    mostrar somente 5 informações da máquina

```javascript
let count = 0;

let interval = setInterval(() => {
    file(infoSystem());
    console.log(count);
    count += 1;

    // caso queira mostrar mais vezes o número de informações, troque o valor de cinco pelo número que deseja
    if (count === 5) {
        clearInterval(interval);
    }
}, 1000); // caso queira mudar o tempo da chegada de dados troque o número 1000, lembre-se que o valor deve ser alterado para segundos
```

Rode o arquivo

```bash
  node index.js
```

## Stack utilizada

![JAVASCRIPT](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)&nbsp;
![NODE.JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)&nbsp;
