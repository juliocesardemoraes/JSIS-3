import Editor from "@monaco-editor/react";
import { emmetHTML, emmetCSS } from "emmet-monaco-es";
import { useCallback, useEffect, useState } from "react";
import "./index.css";

export default function IDE() {
  let [textToRender, setTextToRender] = useState({});

  function createMarkup(html: string) {
    return { __html: html };
  }

  const handleEditorDidMount = () => {
    emmetHTML(window.monaco);
    emmetCSS(window.monaco);
  };

  const testFunction = (e) => {
    setTextToRender(createMarkup(e));
  };

  const textEditorHandle = useCallback(() => {
    console.log(textToRender);
    if (textToRender.__html) return textToRender;
  }, [textToRender]);

  useEffect(() => {
    console.log("2", textToRender);
  }, [textToRender]);

  return (
    <div className="double">
      <Editor
        className="editor-main-container"
        theme={"vs-dark"}
        language={"html"}
        width="50vw"
        height="90vh"
        beforeMount={handleEditorDidMount}
        options={{
          minimap: {
            enabled: false,
          },
        }}
        onChange={(e) => testFunction(e)}
      />

      <div dangerouslySetInnerHTML={textEditorHandle()}></div>
    </div>
  );
}
