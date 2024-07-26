import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Button } from "./ui/button";
import logo from "/logo.png";

const Header = () => {
  const location = useLocation();

  return (
    <div className="bg-background border-input border-b-2 px-4 md:px-8 h-16 flex items-center justify-between">
      <div className="flex gap-1 items-center select-none">
        <img src={logo} alt="logo" className="w-8 invert mt-1" />
        <h1 className="text-2xl font-bold">CodeSpace</h1>
      </div>
      <div>
        <Link to="/">
          <Button
            variant="link"
            className={`${location.pathname === "/" && "font-bold underline"}`}
          >
            Home
          </Button>
        </Link>
        <Link to="/compiler">
          <Button
            variant="link"
            className={`${location.pathname === "/compiler" && "font-bold underline"}`}
          >
            Compiler
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
