//NPM Packages
import React from "react";

//Project files
import logo from "../assets/images/logo.svg";
export default function Navigation() {
  return (
    <nav id="navigation-bar">
      <img src={logo} alt="logo" className="logo" />
    </nav>
  );
}
