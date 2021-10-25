import React from "react";
import ReactDOM from "react-dom";
import FileViewer from "react-file-viewer";


import "./style.css";

const file = "./Case-Study-Shell.pdf";
const type = "pdf";

const onError = e => {
  console.log(e, "error in file-viewer");
};

const props = {
  allowFullScreen: true,
  src: "http://projects.itsasbreuk.nl/react-components/itsa-docviewer/example.pdf"
};




function App() {
  return (
    <div className="App">
      <h1>React File Viewer Demo</h1>
      <h2>Displaying file with extension {type}</h2>
      <FileViewer fileType={type} filePath={file} onError={onError} />
    </div>
  );
}

const rootElement = document.getElementById("fileviewer");
ReactDOM.render(<App />, root);
