import React from "react";
import  Container  from "../../components/Container";
import { useParams } from "react-router-dom";

import Products from "../../components/Products";


export default function Categories() {
  let category = {
    name: "",
  };
  category = useParams();

  return (
    <Container>
      <Products category={category.name} />
    </Container>
  );
}
