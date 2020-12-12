import React, { useState } from "react";
import "./styles.css";

var exercise = {
  Aerobics: [
    { name: "Brisk walk" },
    { name: "Jogging" },
    { name: "Climbing stairs or hills" },
    { name: "Dancing" },
    { name: "Swimming" },
    { name: "Jogging" },
    { name: "Cycling" }
  ],
  Strength: [
    { name: "Lifting weights" },
    { name: "Using resistance machines at the gym" },
    { name: "Using resistance bands" }
  ],
  Flexibility: [
    { name: "Stretching various parts of the body" },
    { name: "Yoga" }
  ],
  Balance: [
    { name: "Heel-to-toe walking" },
    { name: "Standing on one foot" },
    { name: "Tai Chi pose" }
  ]
};

export default function App() {
  const [selectedType, setType] = useState("Aerobics");
  function typeChangeHandler(type) {
    setType(type);
  }

  return (
    <div className="App">
      <h1 style={{ fontFamily: "JetBrains Mono, monospace" }}>
        ️💪 ️Exercise Category 🏋
      </h1>
      <p style={{ fontSize: "large" }}>
        Research has shown that it’s important to get all four types of
        exercise: endurance, strength, balance, and flexibility. Each one has
        different benefits. Doing one kind also can improve your ability to do
        the others, and variety helps reduce boredom and risk of injury.
      </p>

      <div className="btn">
        {Object.keys(exercise).map((category) => (
          <button
            onClick={() => typeChangeHandler(category)}
            style={{
              cursor: "pointer",
              background: "#0443b9",
              color: "white",
              fontWeight: "bolder",
              fontSize: "1rem",
              borderRadius: "0.2rem",
              padding: "0.5rem  1rem",
              border: "1px solid white",
              margin: "1rem 0.3rem",
              fontFamily: "JetBrains Mono, monospace"
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {exercise[selectedType].map((type) => (
            <li
              style={{
                fontFamily: "Balsamiq Sans, cursive",
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #c7e9f7",
                width: "60%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}>{type.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
