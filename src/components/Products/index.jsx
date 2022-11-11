import React, { useEffect, useState } from "react";
import api from '../../services/api.ts'


export default function Products() {
  const [items, setItems] = useState();
  // const Products: <Props> = ({ category }) => {
  //     const [items, setItems]   = useState<Product[]>([]);
  //     const [count, setCount] = useState(0);

 useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/')
      .then(response => response.json())
      .then(json => console.log(json))
    // api.get("categories/").then(response => response.json())
    //     .then(json => console.log(json))
    //     console.log(response.JSON());
    //   setItems(response.data.data.products);
    })
}

