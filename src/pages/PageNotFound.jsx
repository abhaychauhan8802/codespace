import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-full flex justify-center items-center flex-col gap-4">
      <h1 className="text-4xl font-bold">404 - Page not found</h1>
      <Link to="/" className="hover:underline">
        Go to home page
      </Link>
    </div>
  );
};

export default PageNotFound;
