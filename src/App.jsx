import "./App.css";

const projects = [
  {
    title: "Task Manager",
    desc: "A React app to manage tasks with categories, due dates, and local storage.",
    tech: ["React", "CSS"],
    liveLink: "https://task-manager-tau-eight-51.vercel.app/",
    githubLink: "https://github.com/Pruthviraj8880/Task-Manager.git",
  },
  {
  title: "Rock-Paper-Scissor",
  desc: "An interactive, responsive web version of the classic Rock-Paper-Scissors game with real-time score tracking.",
  tech: ["REACT", "JAVASCRIPT"],
  livelink: "https://rock-paper-scissor-5y3x.vercel.app/",
  githubLink: "https://github.com/Pruthviraj8880/ROCK-PAPER-SCISSOR",
},
  {
    title: "Weather App",
    desc: "Fetches real-time weather data using API with clean UI.",
    tech: ["JavaScript", "API"],
    liveLink: "https://smart-city-dashboard1-seven.vercel.app/",
    githubLink: "https://github.com/Pruthviraj8880/smart-city-dashboard1",
  },
  {
    title: "The Meme Factory",
    desc: "Meme Factory: Interactive Gallery with Advanced Search & API Filtering.",
    tech: ["JavaScript", "API"],
    liveLink: "https://the-meme-factory-tau.vercel.app/",
    githubLink: "https://github.com/Pruthviraj8880/THE-MEME-FACTORY",
  },
  {
    title: "Bugatti Chiron Website",
    desc: "A sleek, animated tribute to the Bugatti Chiron, featuring a premium user interface and responsive layout",
    tech: ["HTML","ANTIGRAVITY"],
    livelink: "https://bugattichironn.netlify.app/",
    githubLink: "https://github.com/Pruthviraj8880/BuggatiChiron",
  },
    {
    title: "Travel Guide",
    desc: "A comprehensive, responsive travel guide showcasing the top attractions and hidden gems of Paris.",
    tech: ["HTML","CSS"],
    livelink: "https://travel-destination-guide-sepia.vercel.app/",
    githubLink: "https://github.com/Pruthviraj8880/Travel_Destination_Guide",
  },
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
          <a href="https://drive.google.com/file/d/1UJVgikoCKxm6y6YrRoJ8nDu705aaf9D0/view?usp=drive_link" className="btn secondary">Download Resume</a>
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
              {/* Use p.liveLink and p.githubLink instead of strings */}
              <a href={p.liveLink} target="_blank" rel="noopener noreferrer">Live</a>
              <a href={p.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
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