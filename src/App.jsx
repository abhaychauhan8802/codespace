import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Home from "@/pages/Home";
import PageNotFound from "@/pages/PageNotFound";
import Compiler from "@/pages/Compiler";
import { ThemeProvider } from "@/components/ThemeProvider";

const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="h-screen w-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/compiler" element={<Compiler />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
