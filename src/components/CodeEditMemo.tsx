import React from 'react';
import CodeEditor, { CodeEditorProps } from './CodeEditor';

const CodeEditorMemo = React.memo(({ startCode, refresh }: CodeEditorProps) => {
  return (
    <div>
      <CodeEditor startCode={startCode} refresh={refresh} />
    </div>
  );
});

export default CodeEditorMemo;
