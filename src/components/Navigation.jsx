//NPM Packages
import React from "react";
import { Link } from "react-router-dom";

//Project files
import logo from "../assets/images/logo.svg";
export default function Navigation() {
  return (
    <nav id="navigation-bar">
      {/* Removed unused comments. This is clearly a legacy of when you where using the Router */}
      {/* <Link to="/" > */}
      <img src={logo} alt="logo" className="logo" />
      {/* </Link> */}
    </nav>
  );
}
