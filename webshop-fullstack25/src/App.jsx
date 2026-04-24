import React, { useState } from "react";
import useCounter from "./hooks/useCounter.js";
import "./App.css";
import {
  Counter,
  Timer,
  UserProfile,
  SimpleButton,
} from "./lectures/Lecture3.jsx";
import { Lecture4, Lecture4Wrapper } from "./lectures/Lecture4.jsx";
import Lesson4 from "./lectures/lesson4.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Lesson4 />
      ;
      <Lecture4
        lectureData={{ count: 4, title: "Lecture 4" }}
        bio="Blabla"
        callbackFunction={() => console.log("Ruinning, NOT walking")}
      />
      <Lecture4 lectureData={{ count: 5, title: "Lecture 5" }} bio="Blabla" />
      <Lecture4Wrapper>
        <p>Det här är innehållet för Lecture 4</p>
        <Counter />
      </Lecture4Wrapper>
      {/* Lecture 3 Components*/}
      <Counter title="Min räknare" initialCount={10} />
      {count < 10 && <Timer />}
      <UserProfile
        firstName="Sofia"
        lastName="Lantz"
        email="sofia.lantz@example.com"
        bio="Jag är en webbutvecklare som älskar React och Vite. Mer än Alex gör!"
      />
      <div className="card">
        <SimpleButton
          styleType="primary"
          onClick={() => setCount((count) => count + 1)}
          text={`count is ${count}`}
        />
      </div>
    </>
  );
}

export default App;

function AnotherCounterComponent(initialCount) {
  const [count, increment, decrement, reset] = useCounter(initialCount);
  return (
    <div>
      <h1>Another Counter Component</h1>
      <p>Initial Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function handleClick(message, event) {
  console.log(`Knappen klickades!, eventet är: `, event);
}

function MyComponent() {
  return (
    <button onClick={(event) => handleClick("Knappen klickades!", event)}>
      Klicka mig
    </button>
  );
}

function KomplettKomponent(name, age, stuffInMyComponent) {
  return (
    <div>
      <h1>Min Kompletta Komponent</h1>
      <p>Det här är en komplett komponent som innehåller både logik och UI.</p>
      <p>
        Mitt namn är {name} och jag är {age} år gammal.
      </p>
      {stuffInMyComponent}
    </div>
  );
}

function RamKomponent({ children }) {
  return (
    <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
      <Navigation />
      {children}
    </div>
  );
}

function App2(props) {
  return (
    <RamKomponent>
      <div>
        <h1>Min App</h1>
        <p>
          Det här är min app som använder RamKomponent för att rama in
          innehållet.
        </p>
        <button onClick={() => props.runThis(true)}>Kör App2</button>
      </div>
    </RamKomponent>
  );
}

function App3() {
  return (
    <KomplettKomponent
      name="Sofia"
      age={30}
      stuffInMyComponent={
        <p>Det här är lite extra innehåll i min komponent.</p>
      }
    />
  );
}

function MainPage() {
  const [showApp3, setShowApp3] = useState(false);

  return (
    <RamKomponent>
      <App2 runThis={(bool) => setShowApp3(bool)} />
      {showApp3 ?? <App3 />}
    </RamKomponent>
  );
}

function AboutPage() {
  return (
    <RamKomponent>
      <App3 />
    </RamKomponent>
  );
}

function ItemList({ isPrimary = false }) {
  const items = [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 20 },
    { name: "Item 3", price: 30 },
  ];

  return (
    <ul
      className={`flex flex-col gap-4 bg-white hover:bg-gray-100 hover:scale-110 ${isPrimary ? "bg-blue-500 text-white" : "bg-white text-gray-800"}`}
    >
      {items.map((item, index) => (
        <Item key={index} name={item.name} price={item.price} />
      ))}
    </ul>
  );
}

function Item({ name, price }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: {price}</p>
    </div>
  );
}

function Button({ primary }) {
  return (
    <button className={primary ? "primary" : "secondary"}>Klicka här</button>
  );
}
