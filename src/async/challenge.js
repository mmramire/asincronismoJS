const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
// const fetchData = require('../utils/fetchData')
// const fetch = require("node-fetch");
let API = "https://rickandmortyapi.com/api/character/";

const anotherFunction = async (url_api) => {
  try {
    // const data = await fetchData(url_api);
    // const character = await fetchData(`${API}${data.results[0].id}`)
    // const origin = await fetchData(character.origin.url);
    //*Simplifico la llamada todo en una
    const data = await (await fetch(url_api)).json();
    const character = await (await fetch(`${API}${data.results[0].id}`)).json();
    const origin = await (await fetch(character.origin.url)).json();

    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  } catch (error) {
    console.error(error);
  }
};

console.log("Before");
anotherFunction(API);
console.log("After");

/*
Callbacks --> Ventajas: Simple(una función que recibe otra función). Son universales, corren en cualquier navegador.
Desventajas: Composición tediosa, anidando cada vez más elementos. Caer en Callback Hell.

Promesas --> Ventajas: Facilmente enlazables .Then( return… ).Then - Fácil e intuitivo de leer.
Desventajas: Posible error si no se retorna el siguiente llamado. No corre en todos los navegadores.

Async-Await --> Ventajas: Se puede usar try-catch . Código más ordenado e intuitivo.
Desventajas: No corre en todos los navegadores (se requiere un transpilador).
*/
