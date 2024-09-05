import React from 'react';
import CodeEditor from './CodeEditor';

const CodeEditorMemo = React.memo(() => {
  return (
    <div>
      <CodeEditor />
    </div>
  );
});

export default CodeEditorMemo;
