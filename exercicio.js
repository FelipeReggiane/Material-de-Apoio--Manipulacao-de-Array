/**
 * Exercícios manipulação de array
 */

// Remover todos os elementos inválidos do array
const ex1 = [1, null, 2, 3, 4, undefined, 0, 10];

const filterex1 = ex1.filter((element) => element);
// console.log({filterex1})

//Remover itens duplicados e ordenar o array final
const ex2 = [1, 1, 2, 2, 5, 6, 7, 8, 9, 10, 2, 3, 4, 5, 6, 11, 3, 3, 4];

let uniqueEx2 = ex2.filter((element, index) => {
  return ex2.indexOf(element) === index;
});

uniqueEx2.sort(compareNumbers);

function compareNumbers(futuro, atual) {
  return futuro > atual ? 1 : atual > futuro ? -1 : 0;
}

const newArray = ex2.reduce((acc, cur) => {
  if (!acc.includes(cur)) acc.push(cur);
  return acc;
}, []);

newArray.sort(compareNumbers);

// console.log({ uniqueEx2, newArray });

// Reduza o seguinte array para um objeto com os dados compilados: { cachorro: 6, gato: 4 }
const ex3 = [
  {
    cachorro: 5,
    gato: 1,
  },
  {
    cachorro: 1,
    gato: 0,
  },
  {
    cachorro: 0,
    gato: 3,
  },
];

// const mapEx3 = ex3.map((obj) => {
//     obj.
// })

let reduceEx3 = ex3.reduce(
  (acc, atual) => {
    acc.cachorro += atual.cachorro;
    acc.gato += atual.gato;
    return acc;
  },
  { cachorro: 0, gato: 0 }
);

// console.log({ reduceEx3 });

// Verifique se todos as pessoas são obrigadas a votar

const ex4 = [
  {
    name: "Markin",
    age: 22,
  },
  {
    name: "Jorge",
    age: 16,
  },
  {
    name: "Jujuba",
    age: 30,
  },
];

const reduceEx4 = ex4.reduce((acc, cur) => {
  if (cur.age >= 18) acc.push(cur);
  return acc;
}, []);

const everyEx4 = ex4.every((element) => element.age >= 18);

// console.log({ reduceEx4, everyEx4 });

// Ordene as seguintes passagens de acordo com o número do bilhete
const ex5 = [
  {
    destino: "Natal",
    bilhete: 8,
  },
  {
    destino: "RJ",
    bilhete: 3,
  },
  {
    destino: "BH",
    bilhete: 1,
  },
  {
    destino: "SP",
    bilhete: 5,
  },
  {
    destino: "Ipatinga",
    bilhete: 2,
  },
];

const sortEx5 = ex5.sort(compareNumbersEx5);

function compareNumbersEx5(futuro, atual) {
  return futuro.bilhete > atual.bilhete
    ? 1
    : atual.bilhete > futuro.bilhete
    ? -1
    : 0;
}

// console.log({ sortEx5 });

// Retorne apenas os nomes dos ESTAGIÁRIOS (não retorne quem não é estagiário) em ordem decrescente de idade
const ex6 = [
  {
    nome: "Jorge",
    cargo: "Estagiário",
    idade: 20,
  },
  {
    nome: "Marcelina",
    cargo: "Estagiário",
    idade: 18,
  },
  {
    nome: "José",
    cargo: "Analista Sênior",
    idade: 67,
  },
  {
    nome: "Enzo",
    cargo: "Estagiário",
    idade: 23,
  },
];

const reduceEx6 = ex6.reduce((acc, cur) => {
  if (cur.cargo === "Estagiário") acc.push(cur);
  return acc;
}, []);

// console.log({ reduceEx6 });

//Para finalizar, apenas dê um log em cada elemento com o texto "Elemento [Pos]: <elemento>" exemplo: Elemento 1: jujuba

const ex7 = ["jujuba", "cadeira", "mesa", "computador"];

let filterEx7 = ex7.reduce((acc, atual) => {
  acc.push(`Elemento ${ex7.indexOf(atual) + 1}: ${atual}`);
  return acc;
}, []);

console.log({ filterEx7 });
