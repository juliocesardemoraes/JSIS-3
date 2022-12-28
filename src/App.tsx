import Editor from "@monaco-editor/react";
import { emmetHTML, emmetCSS } from "emmet-monaco-es";
import { useState } from "react";

export default function App() {
  const [isEditorReady, setIsEditorReady] = useState(false);

  const handleEditorDidMount = () => {
    emmetHTML(window.monaco);
    emmetCSS(window.monaco);
    setIsEditorReady(true);
  };

  return (
    <>
      <h1>Teste</h1>
      <Editor
        className="editor-main-container"
        theme={"dark"}
        language={"html"}
        height="90vh"
        beforeMount={handleEditorDidMount}
        options={{
          minimap: {
            enabled: false,
          },
        }}
      />
    </>
  );
}
