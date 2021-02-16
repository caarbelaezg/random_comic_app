import { bindActionCreators } from "redux";
import { CARGANDO, ERROR, TRAER_COMIC } from "../types/comicTypes";

const INITIAL_STATE = {
  comic: [],
  cargando: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_COMIC:
      return { ...state, comic: action.payload, cargando: false };
    case CARGANDO:
      return { ...state, cargando: true };
    case ERROR:
      return { ...state, error: action.payload, cargando: false };
  }
};
