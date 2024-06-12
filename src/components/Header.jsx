import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="bg-background border-input border-b-2 px-4 md:px-8 h-16 flex items-center justify-between">
      <h1 className="text-2xl font-bold select-none">CodeWriter</h1>
      <Link to="/compiler">
        <Button variant="link">Compiler</Button>
      </Link>
    </div>
  );
};

export default Header;
