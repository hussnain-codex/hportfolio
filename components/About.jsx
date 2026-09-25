import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-head">
        <Reveal as="p" type="fade-up" className="eyebrow">About Me</Reveal>
      </div>
      <div className="about-grid">
        <Reveal className="about-lead" type="fade-up">
          <div className="about-avatar">
            <img src="/images/hussnain.png" alt="Hussnain Naeem" width="72" height="72" />
            <div>
              <span className="about-avatar-name">Hussnain Naeem</span>
              <span className="about-avatar-role">Full Stack Developer</span>
            </div>
          </div>
          <p>A Full Stack Developer building modern web applications from the database up.</p>
        </Reveal>
        <Reveal className="about-body" type="fade-up">
          <p>My name is Hussnain Naeem. I&apos;m a Full Stack Developer and Computer Science student focused on building modern web applications and digital products — from the first pixel of an interface to the database that powers it.</p>
          <p>I work across the full stack: designing responsive frontends, building APIs and backend logic, structuring databases, wiring up authentication, and shipping admin dashboards that let real businesses run themselves. I&apos;m also exploring cloud deployment and AI integrations as part of building complete, modern products.</p>
          <ul className="about-stack">
            <li>Frontend</li>
            <li>Backend</li>
            <li>Databases</li>
            <li>APIs</li>
            <li>Authentication</li>
            <li>Admin dashboards</li>
            <li>Cloud services</li>
            <li>AI integrations</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
