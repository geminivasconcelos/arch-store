import React from "react";
import "./style.css";

export default function Categories() {
  return (
    <div className="navigation-menu">
      <h3 className="titulo-nav">Categorias</h3>
      <ul className="lista-categoria">
        <li className="btn-menu">
          <a href="/products/category/jewelery" className="btn-menuLink">
            Livros
          </a>
        </li>
        <li className="btn-menu">
          <a href="/products/category/electronics" className="btn-menuLink">
            Canecas
          </a>
        </li>
        <li className="btn-menu">
          <a href="/products/category/men's clothing" className="btn-menuLink">
            Moda Masculino
          </a>
        </li>
        <li className="btn-menu">
          <a href="/products/category/women's clothing" className="btn-menuLink">
            Moda Feminino
          </a>
        </li>
      </ul>
    </div>
  );
};
