import { NavLink } from "react-router-dom";

export default function StandardLayout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink>
        </nav>
        <h1>Standard Layout</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer content</p>
      </footer>
    </div>
  );
}
