import React, { useState } from "react";

const ToggleBackground = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonStyle(buttonStyle === "white" ? "#1b1b1b" : "white");
  };
  return (
    <div style={{ backgroundColor, color: textColor }} className="h-screen">
      <div className="flex justify-end">
        <button
          style={{
            buttonStyle,
            color: textColor,
            border: `2px solid ${textColor}`,
          }}
          onClick={handleClick}
          className=" border-2 border-solid border-red-500 p-2 m-2 rounded-lg"
        >
          {backgroundColor === "white" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>

      <section className=" h-screen flex justify-center items-center">
        <h1 className="bg-red text-5xl font-mono">
          Welcome to My
          <br />
          World
        </h1>
      </section>
    </div>
  );
};

export default ToggleBackground;
