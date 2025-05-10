import { useState } from "react";
import React from "react";

const About = () => {
  const [count, setCount] = useState(0);
  return (
    <  >
      <div>About</div>

        <h1>
            Shoaib + <span>Aneeta</span>{" "}
        </h1>
        <h1> </h1>
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <button onClick={() => setCount(count - 1)}>decremnt</button>
        </div>
    </>
  );
};

export default About;
