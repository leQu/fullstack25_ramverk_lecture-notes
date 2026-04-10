import { useEffect, useState } from "react";

export function Lecture4({
  lectureData,
  bio = "No bio available",
  callbackFunction,
}) {
  const [count, setCount] = useState(0);
  function effectFunction() {
    console.log("Lecture 4 component has mounted or when count is updated");
    return () => {
      console.log("Lecture 4 component will unmount");
    };
  }

  useEffect(effectFunction, [count]);

  /*
    No dependency array: useEffect(effectFunction) -> Körs varje gång komponenten renderas
    Tom dependency array: useEffect(effectFunction, []) -> Körs endast när komponenten mountas
    Specifika dependencies: useEffect(effectFunction, [count]) -> Körs när komponenten mountas och när count ändras
  */

  if (!lectureData) {
    return <p>No lecture data available</p>;
  }

  return (
    <div>
      <h1>Lecture {lectureData.count} Content</h1>
      <p>Det här är innehållet för Lecture {lectureData.title}</p>
      <p>{bio}</p>
      <button onClick={callbackFunction}>Click me</button>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export function Lecture4Wrapper({ children }) {
  return (
    <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
      {children}
    </div>
  );
}
