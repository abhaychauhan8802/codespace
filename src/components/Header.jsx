import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import logo from "/logo.png";

const Header = () => {
  return (
    <div className="bg-background border-input border-b-2 px-4 md:px-8 h-16 flex items-center justify-between">
      <div className="flex gap-1 items-center select-none">
        <img src={logo} alt="logo" className="w-8 invert mt-1" />
        <h1 className="text-2xl font-bold">CodeWriter</h1>
      </div>
      <Link to="/compiler">
        <Button variant="link">Compiler</Button>
      </Link>
    </div>
  );
};

export default Header;
