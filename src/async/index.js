// importamos el modulo para hacer las peticiones
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const URL_API = "https://rickandmortyapi.com/api/character/";
//*Acá mi endpoint me obliga a pegarle con un {id} para traerme todo el JSON
const URL_ANIME_API = "https://api.jikan.moe/v4/anime/1/";
const URL_MANGA_API = "https://api.jikan.moe/v4/manga/9/";

async function showDataOne() {
  try {
    const receivedJson = await getDataOne();
    console.log(receivedJson);
    console.log("**************1******************");
  } catch (error) {
    console.error(error);
  }
}

function getDataOne() {
  return fetch(URL_API)
    .then((response) => response.json())
    .then((json) => json);
}

async function showDataDos() {
  try {
    const receivedJson = await getDataDos();
    // console.log(receivedJson);
    console.log("***************2*****************");
    //*Acá hago uso de la destructuración del objeto JSON
    const {
      data: {
        mal_id,
        url,
        title,
        trailer: { youtube_id },
      },
    } = receivedJson;
    console.log(
      `La url que me traje es: ${mal_id} con ${url} cuyo título es: ${title} y el ID de YT es ${youtube_id}`
    );
  } catch (error) {
    console.error(error);
  }
}

function getDataDos() {
  return fetch(URL_ANIME_API)
    .then((response) => response.json())
    .then((json) => json);
}

async function showDataTres() {
  try {
    const receivedJson = await getDataTres();
    // console.log(receivedJson);
    console.log("**************3******************");
    // //*Acá hago uso de la destructuración del objeto JSON
    const {
      data: { mal_id, title },
    } = receivedJson;

    console.log(`ID: ${mal_id} - ${title} `);
  } catch (error) {
    console.error(error);
  }
}

function getDataTres() {
  return fetch(URL_MANGA_API)
    .then((response) => response.json())
    .then((json) => json);
}

showDataOne();
// showDataDos();
// showDataTres();
