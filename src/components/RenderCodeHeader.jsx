import React from "react";
import { Button } from "./ui/button";
import { useMediaQuery } from "react-responsive";

const RenderCodeHeader = ({ renderCodeRef }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 720px)",
  });

  const handleClose = () => {
    renderCodeRef.current.style.right = "-100%";
  };

  return (
    <div className="h-12 w-full flex items-center justify-between bg-background px-4">
      <div className="flex items-center gap-5">
        {isMobile && (
          <Button onClick={handleClose} variant="outline">
            Close
          </Button>
        )}

        <h1 className="font-bold text-lg">Preview</h1>
      </div>
    </div>
  );
};

export default RenderCodeHeader;
