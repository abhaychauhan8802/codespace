import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useMediaQuery } from "react-responsive";
import CodeEditor from "@/components/CodeEditor";
import RenderCode from "@/components/RenderCode";

const Compiler = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <>
      <div className="w-full h-[calc(100vh-64px)] relative">
        <ResizablePanelGroup
          direction={isMobile ? "vertical" : "horizontal"}
          className="max-w-full"
        >
          <ResizablePanel defaultSize={50}>
            <CodeEditor />
          </ResizablePanel>
          <ResizableHandle withHandle className="w-4 bg-slate-700" />
          <ResizablePanel
            defaultSize={50}
            className={isMobile ? "min-h-5" : ""}
          >
            <RenderCode />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default Compiler;
