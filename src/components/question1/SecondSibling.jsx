import React, { useState } from "react";

export const SecondSibling = ({ secondSiblingData, setFirstSiblingData }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex gap-3 flex-col">
      <h1>First Sibling</h1>
      <p>Data Received from SecondSibling : {secondSiblingData}</p>
      <button
        onClick={() => {
          setCount(count + 1);

          setFirstSiblingData(`Data change By SecondSibling ${count} times`);
        }}
        className="border px-4 py-2 bg-cyan-700 text-white hover:bg-cyan-600 transition-all"
      >
        Send Data to First Sibling
      </button>
    </div>
  );
};
