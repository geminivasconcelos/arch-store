import React from "react";
import "./style.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="group__header-logo">
        <a href="/" className="btn-menuLink">
          <h2 className="header__title">Arch Store</h2>
        </a>
      </div>
    </div>
  );
}
