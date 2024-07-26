import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { andromeda } from "@uiw/codemirror-theme-andromeda";
import { useSelector, useDispatch } from "react-redux";
import CodeHeader from "./CodeHeader";
import { updateCodeValue } from "@/redux/slices/codeSlice";

const CodeEditor = ({ renderCodeRef }) => {
  const { code, currentLanguage, fontSize } = useSelector(
    (state) => state.codeSlice
  );

  const dispatch = useDispatch();

  const onChange = React.useCallback((val) => {
    dispatch(updateCodeValue(val));
  }, []);

  return (
    <>
      <div className="h-[calc(100vh-64px)]">
        <CodeHeader renderCodeRef={renderCodeRef} />
        <CodeMirror
          value={code[currentLanguage]}
          height="calc(100vh - 64px - 48px)"
          theme={andromeda}
          style={{ fontSize: fontSize }}
          extensions={[loadLanguage(currentLanguage)]}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default CodeEditor;
