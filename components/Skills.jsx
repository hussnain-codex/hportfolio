"use client";

import Reveal from "@/components/Reveal";
import SectionWatermark from "@/components/SectionWatermark";
import useJsonData from "@/components/useJsonData";

export default function Skills() {
    const { data, loading, error } = useJsonData("/data/skills.json");

    if (loading) return <p className="data-loading">Loading...</p>;
    if (error) return <p className="data-error">Could not load this section.</p>;
    if (!data) return <p className="data-loading">Loading...</p>;

    return (
        <section className="skills" id="skills">
            <SectionWatermark letter="S" />
            <div className="section-head">
                <Reveal as="p" type="fade-up" className="eyebrow">
                    Skills
                </Reveal>
                <Reveal as="h2" type="fade-up">
                    Technical Arsenal
                </Reveal>
            </div>
            <div className="skills-grid">
                {data.map((cat) => (
                    <Reveal key={cat.title} type="fade-up">
                        <p className="skill-col-title">{cat.title}</p>
                        <ul className="skill-items">
                            {cat.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
