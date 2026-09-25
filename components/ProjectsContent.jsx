import Link from "next/link";
import Reveal from "@/components/Reveal";

const PROJECTS = [
  {
    title: "HR Management Portal",
    description:
      "A modern employee management platform to manage employees, attendance, leave requests, holidays and documents, with an employee dashboard, admin dashboard and role-based access.",
    tags: ["React", "Node.js", "MongoDB", "Authentication", "Cloudinary"],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a responsive personal portfolio website using HTML and CSS to showcase my skills, education, and projects. Features a modern design with smooth animations and is fully responsive across all devices.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
  },
  {
    title: "Student Management System",
    description:
      "Developed a console-based application using C++ and Object-Oriented Programming concepts to manage student records, including adding, updating, searching, and deleting data.",
    tags: ["C++", "OOP", "Data Management"],
  },
  {
    title: "Library Management System",
    description:
      "Built a library management system using C++ to manage book records, issue and return books, and maintain user information, with inventory tracking and user management.",
    tags: ["C++", "File Handling", "Database Logic"],
  },
  {
    title: "Calculator Web Application",
    description:
      "Created a simple and responsive calculator using HTML, CSS, and JavaScript to perform basic arithmetic operations with an interactive, clean user interface.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Currency Converter",
    description:
      "Built a responsive currency conversion web app using HTML, CSS, JavaScript, and React, focused on a clean interface, easy input handling, and fast conversion results.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Ahmad Cloth House",
    description:
      "Created a front-end website for the Ahmad Cloth House brand using React, with a modern visual design focused on presentation and user engagement.",
    tags: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Quiz App",
    description:
      "Built an interactive quiz application with multiple-choice questions, instant scoring, and a polished interface for a fun learning experience.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "To-Do List App",
    description:
      "Developed a task management app that lets users add, complete, and remove tasks with a clean and intuitive design.",
    tags: ["JavaScript", "DOM", "UI Design"],
  },
  {
    title: "Blog Landing Page",
    description:
      "Designed a modern landing page for a blog concept with responsive sections, attractive typography, and a smooth visual layout.",
    tags: ["HTML", "CSS", "Responsive"],
  },
];

const SKILLS = [
  { label: "Front-End Development", detail: "HTML, CSS, JavaScript, Responsive Design" },
  { label: "Back-End Development", detail: "C++, OOP, Data Structures" },
  { label: "Problem Solving", detail: "Algorithms, Data Management, System Design" },
  { label: "Tools & Technologies", detail: "Git, Visual Studio, Code Editors" },
];

export default function ProjectsContent() {
  return (
    <main id="main">
      <div className="page-header">
        <Link href="/#work" className="back-link">
          <span aria-hidden="true">←</span> Back to Work
        </Link>
        <p className="eyebrow">Projects</p>
        <h1>All projects, in one place</h1>
        <p>
          A fuller look at the things I&apos;ve built — from full-stack products
          to smaller experiments used to sharpen specific skills.
        </p>
      </div>

      <div className="projects-wrap">
        <Reveal className="projects-intro" type="fade-up">
          <h2>Portfolio Projects</h2>
          <p>
            Here are some of the projects I have completed that demonstrate my
            technical skills, creativity, and growing experience in web
            development and software solutions.
          </p>
        </Reveal>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <Reveal as="article" key={p.title} type="fade-up" className="project-card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="work-tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="projects-skills" type="fade-up">
          <h3>Skills Demonstrated</h3>
          <ul>
            {SKILLS.map((s) => (
              <li key={s.label}>
                <strong>{s.label}:</strong> {s.detail}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </main>
  );
}
