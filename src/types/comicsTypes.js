export const CARGANDO = "cargando";
export const ERROR = "error";
export const TRAER_COMIC = "traer_comic";
export const URL = (comic) => {
    return `http://xkcd.com/${comic}/info.0.json`
}