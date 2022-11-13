import React, { useEffect, useState } from "react";
import api from "../../services/api.js";
import Container from "../../components/Container";

export default function Products() {
  const [items, setItems] = useState();
  const categoria = window.location.href;
  const cat = categoria.split("/");
  const outraCoisa = cat[cat.length - 1];


  useEffect(() => {
    api
      .get("products/category/" + outraCoisa)
      .then((response) => setItems(response.data, console.log(response.data)))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


}
