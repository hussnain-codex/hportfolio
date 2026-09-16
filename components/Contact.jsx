"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import SectionWatermark from "@/components/SectionWatermark";
import useJsonData from "@/components/useJsonData";

export default function Contact() {
  const { data } = useJsonData("/data/site.json");
  const socials = data?.socials || {};

  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const subject = (formData.get("subject") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    if (!name || !email || !subject || !message) {
      setStatusMessage("Please fill out every field before sending your message.");
      setIsError(true);
      return;
    }

    try {
      const submissions = JSON.parse(localStorage.getItem("formSubmissions") || "[]");
      submissions.push({ name, email, subject, message, date: new Date().toLocaleString() });
      localStorage.setItem("formSubmissions", JSON.stringify(submissions));
    } catch (err) {
      // localStorage can throw (e.g. disabled/private mode) — safe to ignore
    }

    setStatusMessage("Thanks " + name + "! Your message has been received.");
    setIsError(false);
    e.target.reset();
  }

  return (
    <section className="contact" id="contact">
      <SectionWatermark letter="C" />
      <div className="contact-grid">
        <Reveal className="contact-copy" type="fade-up">
          <h2>
            Have an idea?
            <br />
            Let&apos;s build it.
          </h2>
          <p>
            Whether you have a project in mind, need a web application, or simply want to
            discuss an idea, feel free to get in touch.
          </p>
          <a href="#contactForm" className="btn btn-primary">
            Start a Conversation <span aria-hidden="true">→</span>
          </a>
          <div className="contact-links">
            <a href={"mailto:" + (socials.email || "")}>Email</a>
            <a href={socials.github || "#"} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={socials.linkedin || "#"}>LinkedIn</a>
            <a href={socials.whatsapp || "#"} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </Reveal>
        <Reveal as="form" className="contact-form" type="fade-up" id="contactForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
          <p className={"status-message " + (isError ? "error" : "")} aria-live="polite">
            {statusMessage}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
