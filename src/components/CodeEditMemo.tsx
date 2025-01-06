import React from "react";
import CodeEditor, { CodeEditorProps } from "./CodeEditor";

const CodeEditorMemo = React.memo(
  ({ startCode, refresh, noInline }: CodeEditorProps) => {
    return (
      <div className="w-full">
        <CodeEditor
          startCode={startCode}
          refresh={refresh}
          noInline={noInline}
        />
      </div>
    );
  }
);

export default CodeEditorMemo;
