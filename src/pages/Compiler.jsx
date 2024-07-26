import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeEditor from "@/components/CodeEditor";
import RenderCode from "@/components/RenderCode";

const Compiler = () => {
  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="w-full h-[calc(100vh-64px)] overflow-scroll relative"
      >
        <ResizablePanel defaultSize={50}>
          <CodeEditor />
        </ResizablePanel>
        <ResizableHandle withHandle className="w-4 bg-slate-700" />
        <ResizablePanel defaultSize={50}>
          <RenderCode />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default Compiler;
