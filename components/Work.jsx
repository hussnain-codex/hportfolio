"use client";

import Reveal from "@/components/Reveal";
import useJsonData from "@/components/useJsonData";

export default function Work() {
  const { data, loading, error } = useJsonData("/data/work.json");

  if (loading) return <p className="data-loading">Loading...</p>;
  if (error) return <p className="data-error">Could not load this section.</p>;
  if (!data) return <p className="data-loading">Loading...</p>;

  const { flagship, more } = data;

  return (
    <section className="work" id="work">
      <div className="section-head">
        <Reveal as="p" type="fade-up" className="eyebrow">
          Selected Work
        </Reveal>
        <Reveal as="h2" type="fade-up">
          Projects where design, engineering and real-world problems come together.
        </Reveal>
      </div>
      <div className="work-list">
        {flagship.map((p, i) => {
          const isReverse = i % 2 === 1;
          const articleClass = "work-item " + (isReverse ? "is-reverse" : "");
          const initials = p.title
            .split(" ")
            .map((w) => w[0])
            .slice(0, 2)
            .join("");

          return (
            <article key={p.index} className={articleClass}>
              <Reveal className="work-preview" type="fade-in">
                <div className="work-preview-chrome">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="work-preview-body">
                  <div className="work-preview-glow"></div>
                  <span className="work-preview-mark">{initials}</span>
                </div>
              </Reveal>
              <Reveal className="work-body" type="fade-up">
                <span className="work-index">{p.index}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="work-tags">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <ul className="work-features">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="work-links">
                  <a className="work-link" href={p.view}>
                    View Project <span aria-hidden="true">→</span>
                  </a>
                  <a className="work-link" href={p.code} target="_blank" rel="noreferrer">
                    GitHub <span aria-hidden="true">→</span>
                  </a>
                </div>
              </Reveal>
            </article>
          );
        })}
      </div>
      <div className="more-work">
        <Reveal as="h3" type="fade-up">
          More Experiments
        </Reveal>
        <div className="more-work-grid">
          {more.map((p) => (
            <Reveal
              as="a"
              key={p.title}
              href={p.link || "/test/projects.html"}
              type="fade-up"
              className="more-card"
            >
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <div className="work-tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
