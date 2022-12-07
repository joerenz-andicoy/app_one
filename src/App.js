import React, { useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState("");
  const [updatedImage, setUpdatedImage] = useState(image);
  const [showQuery, setShowQuery] = useState(false);

  const inputQueryVal = (e) => {
    const newInput = e.target.value.replace(/[^a-zA-Z]/g);
    setImage(newInput);
  };

  const submitQuery = () => {
    setUpdatedImage(image);
    if (image.length !== 0 && image.length < 4) {
      setShowQuery(true);
    } else {
      setShowQuery(false);
    }
  };

  const handleQueryByKeypress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submitQuery();
    }
  };

  return (
    <div className="mainDiv">
      <div className="search">
        <h1 className="headers">ひらがな</h1>
        <input
          type="text"
          className="input-field"
          onChange={inputQueryVal}
          onKeyPress={handleQueryByKeypress}
        />
        <button className="button" onClick={submitQuery}>
          Search
        </button>
      </div>
      <div className="searched">
        {showQuery ? (
          <img
            src={`../newPublic/${updatedImage}.png`}
            alt="hiragana-character"
            style={{ width: "400px" }}
            className="image"
          ></img>
        ) : null}
      </div>
    </div>
  );
}

export default App;
