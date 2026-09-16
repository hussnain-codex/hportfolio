"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionWatermark from "@/components/SectionWatermark";
import useJsonData from "@/components/useJsonData";

export default function Journey() {
  const { data, loading, error } = useJsonData("/data/site.json");

  if (loading) return <p className="data-loading">Loading...</p>;
  if (error) return <p className="data-error">Could not load this section.</p>;
  if (!data) return <p className="data-loading">Loading...</p>;

  const journey = data.journey;

  return (
    <section className="journey" id="journey">
      <SectionWatermark letter="J" />
      <div className="section-head">
        <Reveal as="p" type="fade-up" className="eyebrow">Journey</Reveal>
        <Reveal as="h2" type="fade-up">My Journey</Reveal>
      </div>
      <div className="journey-content">
        <Reveal className="journey-card" type="fade-up">
          <h3>{journey.degree}</h3>
          <span className="journey-school">{journey.school}</span>
          <p>{journey.description}</p>
          <Link href="/education" className="btn btn-line btn-sm">
            View Education Details <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
        <Reveal type="fade-up">
          <p>{journey.summary}</p>
          <div className="journey-path">
            {journey.path.map((item) => (
              <span key={item.label} className={item.current ? "is-current" : undefined}>
                {item.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
