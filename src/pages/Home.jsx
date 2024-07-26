import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-full md:max-w-6xl mx-auto p-10 flex flex-col justify-center items-center gap-10">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Code online with CodeSpace.</h1>
        <p className="mt-6 text-xl text-gray-400">
          Designed for developers of all levels, CodeSpace provides an intuitive
          <br className="hidden md:block" />
          and powerful interface to streamline your coding experience.
        </p>
      </div>
      <Link to="/compiler">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
};

export default Home;
