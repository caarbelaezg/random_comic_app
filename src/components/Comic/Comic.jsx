import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import * as comicActions from "../../actions/comicActions";

const Comic = (props) => {
  const [comic, setComic] = useState("614");
  
  useEffect(() => {
    this.props.traerComic();
  }, [comic]);

  return <h1>Holita</h1>;
};

const mapStateToProps = (reducers) => {
  return reducers.comicReducer;
};

export default connect(mapStateToProps, comicActions)(Comic);
