import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const count = useSelector((state) => state.mathInfo.count);
  console.log(count);
  return (
    <div>
      <h1>Contact</h1>
      <h1>Result From HomePage</h1>
      <h2>count: {count}</h2>
    </div>
  );
};

export default Contact;
