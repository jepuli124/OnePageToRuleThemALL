import "../css/Navbar.css";

export default function Navbar() {
  return (
    
    <nav className="navbar">
      <section>
      <ul>
        <li><a href="#top">Top</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#websites">Websites</a></li>
        <li><a href="#next-steps">Contact info</a></li>
        <li><a href="#archive">Archive</a></li>
        {/* <li><a href="#portfolio">Portfolio</a></li> */}
      </ul>
      </section>
    </nav>
  );
}