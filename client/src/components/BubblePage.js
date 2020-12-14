import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { fetchData } from "../utils/fetchData"

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    fetchData()
    .then(res => {
      setColorList(res.data)
    })
  }, [])
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
