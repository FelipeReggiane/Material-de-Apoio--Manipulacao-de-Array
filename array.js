/**
 * Material de apoio sobre manipulação de arrays em JS
 */

// ============== map ============== //

/**
 * Para que serve: O método Array.map() normalmente é usado para aplicar algumas alterações aos elementos;
 */

const arrayMap = [
  "Fernando",
  "Felipe",
  "Ana",
  "Fabi",
  "Gabriel",
  "Lucas",
  "Karol",
  "Amanda",
  "Carol",
];

const mappedArray = arrayMap.map((name) => ({
  nome: name,
  departamento: "Engenharia",
  cargo: "Estagiário",
}));

console.log("Map: \n", { arrayMap, mappedArray });

// ============== foreach ============== //

/**
 * Para que serve: O método Array.forEach() permite executar uma função para cada item de um array
 */

const arrayForeach = [
  "Fernando",
  "Felipe",
  "Ana",
  "Fabi",
  "Gabriel",
  "Lucas",
  "Karol",
  "Amanda",
  "Carol",
];

console.log("Antes do ForEach: \n", { arrayForeach });

arrayForeach.forEach(converterParaMaisculo);

function converterParaMaisculo(item, indice) {
  arrayForeach[indice] = arrayForeach[indice].toUpperCase();
}

console.log("Depois do ForEach: \n", { arrayForeach });

// ============== find ============== //

/**
 * Para que serve: O método Array.find() retorna o primeiro elemento do array que satisfaz a função fornecida. Se nenhum valor satisfizer a função, vai retornar undefined.
 */

const arrayFind = [5, 12, 8, 130, 44];

const findArray = arrayFind.find((element) => element > 10);

console.log("Find: \n", { arrayFind, findArray });

// ============== filter ============== //

/**
 * Para que serve: O método Array.filter() cria uma cópia superficial de uma parte do array, filtrada apenas para os elementos do array que passam no teste implementado pela função fornecida.

 */

const arrayFilter = [5, 12, 8, 130, 44];

const filterArray = arrayFilter.filter((element) => element > 10);

console.log("Filter: \n", { arrayFilter, filterArray });

// ============== reduce ============== //

/**
 * Para que serve: O método Array.reduce() executa uma função reducer fornecida para cada elemento do array, resultando num único valor de retorno.
 */

const arrayReduce = [1, 2, 3, 4];

const reduceArray = arrayReduce.reduce(sumReduce);

function sumReduce(total, num) {
  return total + num;
}

console.log("Reduce: \n", { arrayReduce, reduceArray });

// ============== splice ============== //

/**
 * Para que serve: O método Array.splice() altera o conteúdo de um array removendo ou substituindo elementos existentes e/ou adicionando novos elementos no local
 */

const arraySplice = ["Jan", "March", "April", "June"];
console.log("Antes do Splice: \n", { arraySplice });

//insert at index 1
arraySplice.splice(1, 0, "Feb");

// replace element at index 4

arraySplice.splice(4, 1, "May");

console.log("Splice: \n", { arraySplice });

// ============== some ============== //

/**
 * Para que serve: O método Array.some() testa se pelo menos um elemento no array atende os requisitos da função fornecida. Se algum elemento atender os requisitos retorna True, se não retorna False.
 */

const arraySome = [1, 2, 3, 4, 5];

const some = (element) => element % 2 === 0;

const someArray = arraySome.some(some);

console.log("Some: \n", { arraySome, someArray });

// ============== every ============== //

/**
 * Para que serve: O método Array.every() similar ao metodo some(), porém testa se todos os elementos do array atendem os requisitos. E retorna um boolean.
 */

const arrayEvery = [1, 2, 3, 4, 5];

const every = (element) => element < 6;

const everyArray = arrayEvery.every(every);

console.log("Every: \n", { arrayEvery, everyArray });

// ============== indexOf ============== //

/**
 * Para que serve: O método Array.indexOf() retorna o primeiro índice no qual um determinado elemento pode ser encontrado na matriz ou -1 se não estiver presente.
 */

const arrayIndexOf = [
  "Fernando",
  "Felipe",
  "Ana",
  "Fabi",
  "Gabriel",
  "Lucas",
  "Karol",
  "Amanda",
  "Carol",
  "Felipe",
];

console.log("Indexof: \n", { arrayIndexOf });

// procurando o primeiro nome "Felipe"
console.log(arrayIndexOf.indexOf("Felipe"));

//procurando o segundo nome "Felipe"
console.log(arrayIndexOf.indexOf("Felipe", 2));

// procurando "Filipe", que não esta no array
console.log(arrayIndexOf.indexOf("Filipe"));

// ============== join ============== //

/**
 * Para que serve: O método Array.join() cria e retorna uma nova string concatenando todos os elementos do array, separados pelo elemento escolhido.
 */

const arrayJoin = [
  "Fernando",
  "Felipe",
  "Ana",
  "Fabi",
  "Gabriel",
  "Lucas",
  "Karol",
  "Amanda",
  "Carol",
];

const JoinArray = arrayJoin.join("-");

console.log("Join: \n", { arrayJoin, JoinArray });

// ============== sort ============== //

/**
 * Para que serve: O método Array.sort() ordena os elementos de um array no local e retorna a referência ao mesmo array, agora ordenado. A ordem de classificação padrão é crescente, baseada na conversão dos elementos em strings e na comparação de suas sequências de valores de unidades de código UTF-16.
 */

const arraySort = [
  "Fernando",
  "Felipe",
  "Ana",
  "Fabi",
  "Gabriel",
  "Lucas",
  "Karol",
  "Amanda",
  "Carol",
];
const sortArray = [
  "Fernando",
  "Felipe",
  "Ana",
  "Fabi",
  "Gabriel",
  "Lucas",
  "Karol",
  "Amanda",
  "Carol",
];

sortArray.sort();

console.log("Sort: \n", { arraySort, sortArray });

// ============== shift ============== //

/**
 * Para que serve: O método Array.shift() remove o primeiro elemento do array e retorna esse elemento removido.
 */

const arrayShift = [
  "Fernando",
  "Felipe",
  "Ana",
  "Fabi",
  "Gabriel",
  "Lucas",
  "Karol",
  "Amanda",
  "Carol",
];
console.log("Antes do Shift: \n", { arrayShift });

const shiftArray = arrayShift.shift();

console.log("Shift: \n", { arrayShift, shiftArray });

// ============== pop ============== //

/**
 * Para que serve: O método Array.pop() é similar ao shift porem remove o último elemento do array e retorna esse elemento.
 */

const arrayPop = [
  "Fernando",
  "Felipe",
  "Ana",
  "Fabi",
  "Gabriel",
  "Lucas",
  "Karol",
  "Amanda",
  "Carol",
];
console.log("Antes do Pop: \n", { arrayPop });

const popArray = arrayPop.pop();

console.log("Pop: \n", { arrayPop, popArray });

// ============== unshift ============== //

/**
 * Para que serve: O método Array.unshift() adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array.
 */

const arrayUnshift = [3, 4, 5];
console.log("Antes do Unshift: \n", { arrayUnshift });

const unshiftArray = arrayUnshift.unshift(1, 2);
console.log("Unshift: \n", { arrayUnshift, unshiftArray });

// ============== push ============== //

/**
 * Para que serve: O método Array.push() é similar ao unshift() porém adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
 */

const arrayPush = [1, 2, 3];
console.log("Antes do Push: \n", { arrayPush });

const pushArray = arrayPush.push(4, 5);
console.log("Push: \n", { arrayPush, pushArray });

// ============== flat ============== //

/**
 * Para que serve: O método Array.flat() cria um novo array com todos os elementos do subarray concatenados nele recursivamente até a profundidade especificada.
 */

const arrayFlat = [0, 1, 2, [[[3, 4]]]];

const flatArray = arrayFlat.flat(2);

console.log("Flat: \n", { arrayFlat, flatArray });
