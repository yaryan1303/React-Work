import React, { useState } from "react";

const InputBox = ({ Heading }) => {
  const [text, setText] = useState("Enter Text Here");

  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  const textInput = (event) => {
    console.log(event);
    setText(event.target.value);
  };

  return (
    <>
      <h6>{Heading}</h6>

      <div classNameName="mb-3">
        <textarea
          classNameName="form-control"
          id="exampleFormControlTextarea1"
          rows="6"
          value={text}
          onChange={textInput}
        ></textarea>
      </div>

      <button
        type="button"
        classNameName="btn btn-primary"
        onClick={handleUpperCase}
      >
        Click Here to Change to Uppercase
      </button>
    </>
  );
};

export default InputBox;
