import { useState, useEffect } from "react";
import Icon from "../assets/react.svg";

export default function Lesson4() {
  return (
    <>
      <h1>Lecture 4 - useEffect</h1>
      <TraditionalGreeting firstName="John" />
      <Counter title="My Counter" initialCount={5} />
      <ArrowGreeting firstName="Jane" />
      <UserProfile firstName="Sofia" lastName="Lantz" city="Stockholm" />

      <Card>
        <p>
          Det här är en komponent som använder sig av en Card-komponent för att
          visa sitt innehåll.
        </p>
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Card Image"
          style={{ width: "100%" }}
        />
      </Card>

      <Card>
        <h1>Hej världen!</h1>
      </Card>

      <Card2>
        <img src="" alt="" />
      </Card2>
    </>
  );
}

function Counter({ title = "Counter", initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>{title}</h1>
      <p>Antal klick: {count}</p>
      <button onClick={() => setCount(count + 1)}>Öka</button>
      <button onClick={() => setCount(count - 1)}>Minska</button>
    </div>
  );
}

function TraditionalGreeting({ firstName }) {
  return <p>Hello, {firstName}!</p>;
}

const ArrowGreeting = ({ firstName }) => <p>Hello, {firstName}!</p>;

function UserProfile({ firstName, lastName, city = "Stockholm" }) {
  return (
    <div>
      <h3>
        {firstName} {lastName}
      </h3>
      <p>{city}</p>
    </div>
  );
}

function Card({ children }) {
  return (
    <div style={{ border: "10px solid gold", padding: "10px", margin: "10px" }}>
      {children}
    </div>
  );
}

const Card2 = ({ children }) => {
  return <>{children};</>;
};
