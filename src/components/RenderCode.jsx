import React from "react";
import { useSelector } from "react-redux";
import RenderCodeHeader from "./RenderCodeHeader";

const RenderCode = ({ renderCodeRef }) => {
  const { code } = useSelector((state) => state.codeSlice);

  const combinedCode = `<html><style>${code.css}</style><body>${code.html}</body><script>${code.javascript}</script></html>`;

  const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent(
    combinedCode
  )}`;

  return (
    <div className="bg-white h-[calc(100vh-64px)]">
      <RenderCodeHeader renderCodeRef={renderCodeRef} />
      <div className="w-full h-[calc(100vh-64px-48px)]">
        <iframe className="w-full h-full" src={iframeCode} />
      </div>
    </div>
  );
};

export default RenderCode;
