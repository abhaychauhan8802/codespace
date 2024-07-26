import React, { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeEditor from "@/components/CodeEditor";
import RenderCode from "@/components/RenderCode";
import { Button } from "@/components/ui/button";

const Compiler = () => {
  const renderCodeRef = useRef(null);

  const isMobile = useMediaQuery({
    query: "(max-width: 720px)",
  });

  if (isMobile) {
    return (
      <div className="w-full h-[calc(100vh-64px)] overflow-hidden relative">
        <div className="h-full w-full relative">
          <CodeEditor renderCodeRef={renderCodeRef} />
        </div>
        <div
          className="w-full h-full absolute top-0 -right-full z-20 transition-all"
          ref={renderCodeRef}
        >
          <RenderCode renderCodeRef={renderCodeRef} />
          <div className="fixed bottom-5 left-5"></div>
        </div>
      </div>
    );
  }

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full h-[calc(100vh-64px)] overflow-hidden"
    >
      <ResizablePanel defaultSize={50}>
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle className="w-4 bg-slate-800" />
      <ResizablePanel defaultSize={50}>
        <RenderCode />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Compiler;
