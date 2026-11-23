import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Sun, Moon, ExternalLink, Code2, Cpu, Layers3, MapPin } from "lucide-react";
import "./styles.css";

const projects = [
  {
    n: "01", type: "AI SECURITY · PERSONAL PROJECT", title: "AgentGuard",
    summary: "A local policy gateway prototype for inspecting AI-agent tool requests before execution.",
    detail: "Developing a Python + FastAPI gateway that evaluates structured tool requests and supports allow, deny and approval-required decisions, with safe simulation, audit logging and automated tests. This is an active prototype, not a production security product.",
    stack: ["Python", "FastAPI", "Policy Checks", "Audit Logs", "Testing"],
    visual: "guard", status: "Working prototype"
  },
  {
    n: "02", type: "SERVERLESS CLOUD APPLICATION", title: "Campus Lost & Found Management System",
    summary: "A centralised campus portal for reporting lost or found belongings, browsing listings and uploading item images.",
    detail: "Built as an AWS serverless academic project. The request flow uses API Gateway and AWS Lambda; DynamoDB stores item records and S3 stores uploaded images using presigned URLs. The demonstrated flow includes creating reports, retrieving listings and uploading/displaying images. Authentication, advanced search and expanded notification workflows are future scope.",
    stack: ["Python", "AWS Lambda", "API Gateway", "DynamoDB", "S3", "SNS", "CloudWatch", "AWS SAM"],
    visual: "cloud", status: "Academic project"
  },
  {
    n: "03", type: "COMPUTER VISION · TEAM PROJECT", title: "Blood Smear Analysis",
    summary: "A team project exploring blood-cell detection and counting from peripheral blood smear images, followed by a separate binary leukemia prediction stage.",
    detail: "The TXL-PBC dataset contains three classes: WBC, RBC and platelets. My contribution was running YOLOv11 training experiments, building the drag-and-drop demo interface that displayed detection boxes, studying the research paper and preparing the project report. The Logistic Regression classification stage was implemented by a teammate; it used cell-level counts for binary leukemia prediction. I do not claim ownership of that classifier.",
    stack: ["Python", "YOLOv11", "OpenCV", "TXL-PBC", "Object Detection"],
    visual: "blood", status: "Team project"
  },
  {
    n: "04", type: "NLP · FULL STACK PROJECT", title: "AI Resume Analyzer",
    summary: "An NLP-based resume screening tool that compares resumes with a job description and highlights skill gaps.",
    detail: "Built a resume parsing and matching workflow using spaCy, NLTK and cosine similarity. Includes keyword extraction and job-description matching, with a deployed application on Render and GitHub-based deployment workflow.",
    stack: ["Python", "NLP", "spaCy", "NLTK", "Cosine Similarity", "Render"],
    visual: "resume", status: "Deployed"
  },
  {
    n: "05", type: "INDEPENDENT WEB DEVELOPMENT", title: "Basaveshwara Temple",
    summary: "Designed and deployed a live website for Basaveshwara Temple, Kuntoji, serving the local community.",
    detail: "An independently delivered website created for temple members and residents. Focused on clear information, accessible presentation and a straightforward experience for community visitors.",
    stack: ["HTML", "CSS", "JavaScript", "GitHub"],
    link: "https://ornate-torrone-2dc460.netlify.app/", linkLabel: "Visit live website",
    visual: "temple", status: "Live"
  },
  {
    n: "06", type: "BACKEND · FULL STACK", title: "Gymnace Fitness Web App",
    summary: "A fitness web application with a multi-tier backend and secure user authentication.",
    detail: "Built backend functionality with Node.js, Express and MongoDB, including user authentication with salted password hashing and support for managing application data and transactions.",
    stack: ["Node.js", "Express", "MongoDB", "Authentication"],
    visual: "gym", status: "Project"
  },
  {
    n: "07", type: "MACHINE LEARNING", title: "E-commerce Purchase Prediction",
    summary: "Compared machine-learning models to predict purchase behaviour from user-item interaction data.",
    detail: "Built a pipeline comparing Logistic Regression, Random Forest and KNN. Applied feature selection to reduce the input feature set from nine to four; Logistic Regression achieved the best accuracy in the project evaluation.",
    stack: ["Python", "Pandas", "scikit-learn", "Logistic Regression", "Random Forest", "KNN"],
    link: "https://www.kaggle.com/code/sanjanakati/final-miniproject", linkLabel: "View Kaggle project",
    visual: "commerce", status: "Academic project"
  },
  {
    n: "08", type: "INDEPENDENT FULL-STACK PROJECT", title: "Hruday Creations",
    summary: "A personalised handmade-commerce experience designed around browsing creations, customising designs and placing orders.",
    detail: "In development with a React + Vite frontend, Java + Spring Boot backend, PostgreSQL and AWS S3. Planned capabilities include product customisation and studio-managed pickup. AI-assisted design is planned, not a shipped capability.",
    stack: ["React", "Vite", "Spring Boot", "PostgreSQL", "AWS S3"],
    visual: "craft", status: "In development"
  }
];

const skills = [
  ["Languages", "Java", "Python", "C", "SQL", "JavaScript"],
  ["Backend & APIs", "Spring Boot", "Spring Data JPA", "Node.js", "Express.js", "REST APIs"],
  ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS Lambda", "S3", "DynamoDB", "API Gateway"],
  ["AI & Data", "Google ADK", "Gemini", "LLMs", "RAG", "NLP", "scikit-learn", "YOLOv11", "OpenCV"],
  ["Web & Tools", "React", "HTML", "CSS", "Git", "GitHub", "Postman", "Maven"]
];

function App() {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const email = "sanjanakati05@gmail.com";
  return <div className={dark ? "site dark" : "site"}>
    <header className="nav wrap">
      <a className="brand" href="#top" aria-label="Sanjana home">SK<span>.</span></a>
      <nav className={menu ? "navlinks open" : "navlinks"}>
        <a onClick={() => setMenu(false)} href="#work">Work</a>
        <a onClick={() => setMenu(false)} href="#about">About</a>
        <a onClick={() => setMenu(false)} href="#experience">Experience</a>
        <a onClick={() => setMenu(false)} href="#contact">Contact</a>
      </nav>
      <div className="nav-actions">
        <button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={17}/> : <Moon size={17}/>}</button>
        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15}/></a>
        <button className="icon-btn mobile-menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X/> : <Menu/>}</button>
      </div>
    </header>

    <main id="top">
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"></span> COMPUTER SCIENCE · BENGALURU, INDIA</div>
          <h1>Building useful<br/><em>things with</em> code<span className="accent">.</span></h1>
          <p className="hero-intro">I'm <strong>Sanjana S Katti</strong> — a Computer Science engineering student and developer interested in backend systems, full-stack products and applied AI.</p>
          <div className="hero-buttons">
            <a className="button primary" href="#work">Explore selected work <ArrowUpRight size={17}/></a>
            <a className="button secondary" href="#contact">Get in touch <ArrowUpRight size={17}/></a>
          </div>
          <div className="hero-meta"><span><MapPin size={14}/> Bengaluru, Karnataka</span><span>DSU · Class of 2027</span></div>
        </div>
        <div className="hero-portrait" aria-label="Portrait of Sanjana S Katti">
          <div className="portrait-frame"><img src="/profile.jpg" alt="Sanjana S Katti" onError={(event) => { event.currentTarget.style.display = "none"; event.currentTarget.nextElementSibling.style.display = "flex"; }} /><div className="portrait-fallback"><span>SK</span><small>PROFILE IMAGE UNAVAILABLE</small></div></div>
          <div className="portrait-note note-top">JAVA / PYTHON</div><div className="portrait-note note-bottom">IDEAS → SYSTEMS</div>
          <div className="portrait-cross">✳</div>
        </div>
        <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={17}/></a>
      </section>

      <section className="ticker" aria-label="Areas of focus"><div className="ticker-track">BACKEND ENGINEERING <b>✳</b> FULL STACK DEVELOPMENT <b>✳</b> APPLIED AI <b>✳</b> PROBLEM SOLVING <b>✳</b> BACKEND ENGINEERING <b>✳</b> FULL STACK DEVELOPMENT <b>✳</b></div></section>

      <section id="work" className="section wrap">
        <div className="section-head"><div><div className="eyebrow">01 / SELECTED WORK</div><h2>Projects with<br/><em>a purpose.</em></h2></div><p>A selection of things I've built, contributed to, or am actively developing — from community-facing websites to backend systems and AI prototypes.</p></div>
        <div className="project-grid">
          {projects.map((p, i) => <article className={`project-card ${i === 0 || i === 1 ? "featured" : ""}`} key={p.n}>
            <div className={`project-visual ${p.visual}`}>
              <span className="visual-index">{p.n} / 07</span>
              <div className="visual-symbol">{({craft:"✳",temple:"⌂",cloud:"☁",guard:"◇",resume:"▤",blood:"◉",gym:"↗",commerce:"⌁"})[p.visual]}</div>
              <span className="visual-caption">{p.type}</span>
              <span className="visual-grid"></span>
            </div>
            <div className="project-content">
              <div className="project-topline"><span>{p.type}</span><span className="project-status">{p.status}</span></div>
              <h3>{p.title}</h3><p>{p.summary}</p>
              <div className="tags">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
              <div className="project-actions">
                <button className="text-link" onClick={() => setExpanded(expanded === p.n ? null : p.n)}>{expanded === p.n ? "Close details" : "View details"} <ArrowUpRight size={15}/></button>
                {p.link && <a className="text-link" href={p.link} target="_blank" rel="noreferrer">{p.linkLabel} <ExternalLink size={14}/></a>}
              </div>
              {expanded === p.n && <div className="project-detail">{p.detail}</div>}
            </div>
          </article>)}
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="wrap about-layout">
          <div><div className="eyebrow">02 / A LITTLE ABOUT ME</div><h2>Curious by nature.<br/><em>Practical by design.</em></h2></div>
          <div className="about-copy">
            <p className="about-lead">I enjoy turning ideas into working software — understanding the problem, designing the flow and building the parts that make a product useful.</p>
            <p>I'm pursuing a B.Tech in Computer Science & Engineering at Dayananda Sagar University (2023–2027). My experience spans backend development, web applications, data annotation for autonomous-driving workflows and applied machine-learning projects.</p>
            <p>I value clear engineering, steady learning and building for real people. I'm currently focused on strengthening my software engineering fundamentals while developing practical projects.</p>
            <div className="about-facts">
              <div><strong>8.79</strong><span>CGPA</span></div>
              <div><strong>2027</strong><span>Graduating</span></div>
              <div><strong>3+</strong><span>Areas explored</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section wrap">
        <div className="section-head"><div><div className="eyebrow">03 / EXPERIENCE</div><h2>Learning by<br/><em>doing the work.</em></h2></div><p>Industry exposure and independent work that helped me connect engineering concepts to practical use cases.</p></div>
        <div className="timeline">
          <article className="timeline-item"><div className="timeline-date">JUN — JUL 2026</div><div className="timeline-main"><h3>Backend Development Intern</h3><h4>Anmerkung Solutions Pvt. Ltd. <span>· Bengaluru</span></h4><ul><li>Worked across backend development and data-annotation workflows supporting autonomous-driving AI datasets.</li><li>Contributed to backend REST API functionality using Spring Boot and Docker, and worked with Redis caching and MySQL-based telemetry / analytics workflows.</li><li>Supported 3D LiDAR point-cloud annotation for autonomous-driving AI training data (Project Griffin) and video-frame labelling workflows (Project Wave).</li></ul><div className="tags"><span>Java</span><span>Spring Boot</span><span>Redis</span><span>Docker</span><span>MySQL</span><span>LiDAR</span></div></div></article>
          <article className="timeline-item"><div className="timeline-date">ONGOING</div><div className="timeline-main"><h3>Freelance Full Stack Developer</h3><h4>Hruday Creations <span>· Independent project</span></h4><p>Building a personalised handmade e-commerce platform with product discovery, design customisation and order workflows. React + Vite frontend, Java + Spring Boot backend, PostgreSQL and AWS S3. The project is being developed in phases.</p><div className="tags"><span>React</span><span>Spring Boot</span><span>PostgreSQL</span><span>AWS S3</span></div></div></article>
          <article className="timeline-item"><div className="timeline-date">INDEPENDENT PROJECT</div><div className="timeline-main"><h3>Independent Web Developer</h3><h4>Basaveshwara Temple, Kuntoji <span>· Community project</span></h4><p>Designed and deployed a live website for the temple community, with a focus on making useful information accessible to local residents.</p><a className="text-link" href="https://ornate-torrone-2dc460.netlify.app/" target="_blank" rel="noreferrer">View live website <ExternalLink size={14}/></a></div></article>
        </div>
      </section>

      <section className="skills-section">
        <div className="wrap">
          <div className="section-head"><div><div className="eyebrow">04 / TOOLKIT</div><h2>Tools I work<br/><em>with.</em></h2></div><p>A growing toolkit across software development, backend engineering, cloud fundamentals and applied AI.</p></div>
          <div className="skill-grid">{skills.map(([name,...items]) => <div className="skill-group" key={name}><h3>{name}</h3><div className="tags">{items.map(x=><span key={x}>{x}</span>)}</div></div>)}</div>
        </div>
      </section>

      <section className="section wrap robotics-section">
        <div className="section-head"><div><div className="eyebrow">05 / EARLIER ENGINEERING</div><h2>Curiosity beyond<br/><em>the screen.</em></h2></div><p>My early hands-on work with Arduino introduced me to sensors, motors, control logic and building physical systems.</p></div>
        <div className="robotics-grid">
          <article><span>01 · ROBOTICS</span><h3>Line Following Robot</h3><p>Arduino-based robot using IR sensors and a motor driver to follow a track.</p></article>
          <article><span>02 · ROBOTICS</span><h3>Obstacle Avoiding Robot</h3><p>Ultrasonic sensor-based robot designed to detect and avoid obstacles.</p></article>
          <article><span>03 · ROBO SOCCER</span><h3>Robo Soccer Bot</h3><p>Remote-controlled Arduino robot built for robotic soccer participation at the DSU Robo Soccer event in April 2025.</p></article>
        </div>
        <p className="robotics-footnote">Also participated in NASA Space Apps Challenge (2024), Samsung Solve for Tomorrow (2025), RAPID TRACER (2024) and university technical activities.</p>
      </section>

      <section className="education wrap">
        <div className="eyebrow">05 / EDUCATION & CREDENTIALS</div><h2>Grounded in<br/><em>the fundamentals.</em></h2>
        <div className="education-row"><div><h3>B.Tech — Computer Science & Engineering</h3><p>Dayananda Sagar University · 2023–2027</p></div><strong>8.79 CGPA</strong></div>
        <div className="education-row"><div><h3>Pre-University</h3><p>Christ Academy Junior College · 2021–2023</p></div><strong>94.85%</strong></div>
        <div className="credential-list"><span>Google Cloud Agentic AI Labs · ADK & Gemini</span><span>AWS Academy · Cloud Computing / Cloud Architecture</span><span>Deloitte · Data Analytics & Cybersecurity Job Simulations</span><span>TestDome Cybersecurity Assessment · Top 25% globally</span><span>Infosys · Core Java, Skill Up in Java, Java Web Services & Java 9 Functional Data Processing</span><span>Introduction to Cybersecurity · Simplified Course</span><span>DSU · Personal Effectiveness & Teamwork / Interpersonal Skills</span><span>NASA Space Apps Challenge · 2024</span><span>Samsung Solve for Tomorrow · 2025</span><span>iTech Summit Hackathon</span></div>
      </section>

      <section id="contact" className="contact-section">
        <div className="wrap contact-layout">
          <div><div className="eyebrow">06 / CONTACT</div><h2>Have a good<br/><em>problem to solve?</em></h2><p>I'm open to software engineering opportunities, internships and conversations about building useful technology.</p></div>
          <div className="contact-card"><span className="contact-label">DROP ME A NOTE</span><a className="email-link" href={`mailto:${email}`}>{email} <ArrowUpRight size={19}/></a><div className="social-links"><a href="https://www.linkedin.com/in/sanjanakati/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a><a href="https://github.com/sanjanakati" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a><a href="https://www.kaggle.com/sanjanakati" target="_blank" rel="noreferrer"><Code2 size={17}/> Kaggle <ArrowUpRight size={14}/></a></div><p className="contact-note">Prefer email? Click the address above to start a conversation.</p></div>
        </div>
      </section>
    </main>
    <footer className="footer wrap"><a className="brand" href="#top">SK<span>.</span></a><span>Designed & built with intention · © {new Date().getFullYear()} Sanjana S Katti</span><a href="#top">Back to top ↑</a></footer>
  </div>
}
createRoot(document.getElementById("root")).render(<App/>);
