import axios from "axios";

import { CARGANDO, ERROR, TRAER_COMIC, URL } from "../types/comicTypes";

export const traerComic = () => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });

  try {
    const respuesta = await axios.get(URL);
    dispatch({
      type: TRAER_COMIC,
      payload: respuesta.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};
