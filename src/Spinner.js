import CircleLoader from "react-spinners/CircleLoader";
import React, { useState, useEffect } from 'react'


const Spinner = props => {
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  return (
    <div style={style}>
      <CircleLoader color={"#FFFFFF"} loading={props.isFetching} />
    </div>
  );
};

export default Spinner;

