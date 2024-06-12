import React from "react";
import { useSelector } from "react-redux";

const RenderCode = () => {
  const { code } = useSelector((state) => state.codeSlice);

  const combinedCode = `<html><style>${code.css}</style><body>${code.html}</body><script>${code.javascript}</script></html>`;

  const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent(
    combinedCode
  )}`;

  return (
    <div className="bg-white h-[calc(100dvh-64px)]">
      <iframe className="w-full h-full" src={iframeCode} />
    </div>
  );
};

export default RenderCode;
