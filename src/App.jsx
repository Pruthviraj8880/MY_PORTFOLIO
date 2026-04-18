import "./App.css";

const projects = [
  {
    title: "Smart Task Manager",
    desc: "A React app to manage tasks with categories, due dates, and local storage.",
    tech: ["React", "CSS"],
  },
//   {
//     title: "Weather App",
//     desc: "Fetches real-time weather data using API with clean UI.",
//     tech: ["JavaScript", "API"],
//   },
];

export default function App() {
  return (
    <div className="container">

      <nav className="navbar">
        <h1 className="logo">My Portfolio</h1>
        <div>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <h1>
          Hi, I'm <span>Pruthviraj</span>
        </h1>
        <p className="subtitle">
          Frontend Developer | Coding Enthuastic
        </p>
        <p className="desc">
          I build modern, responsive web applications using React and JavaScript.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#" className="btn secondary">Download Resume</a>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skill-list">
          {["HTML", "CSS", "JavaScript", "React"].map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="project-grid">
          {projects.map((p, i) => (
            <div className="card" key={i}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <div className="tags">
                {p.tech.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>

              <div className="links">
                <a href="#">Live</a>
                <a href="#">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>pruthvirajvala04@gmail.com</p>
      </section>

      <footer>
        © 2026 Pruthviraj — Built with React
      </footer>
    </div>
  );
}