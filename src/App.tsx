import Editor from "@monaco-editor/react";
import { emmetHTML, emmetCSS } from "emmet-monaco-es";

export default function App() {
  const handleEditorDidMount = () => {
    emmetHTML(window.monaco);
    emmetCSS(window.monaco);
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
