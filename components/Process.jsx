"use client";

import Reveal from "@/components/Reveal";
import SectionWatermark from "@/components/SectionWatermark";
import useJsonData from "@/components/useJsonData";

export default function Process() {
    const { data, loading, error } = useJsonData("/data/process.json");

    if (loading) return <p className="data-loading">Loading...</p>;
    if (error) return <p className="data-error">Could not load this section.</p>;
    if (!data) return <p className="data-loading">Loading...</p>;

    return (
        <section className="process" id="process">
            <SectionWatermark letter="P" />
            <div className="section-head">
                <Reveal as="p" type="fade-up" className="eyebrow">
                    Process
                </Reveal>
                <Reveal as="h2" type="fade-up">
                    How I Build
                </Reveal>
            </div>
            <div className="process-grid">
                {data.map((step) => (
                    <Reveal as="div" key={step.num} type="fade-up" className="process-step">
                        <span className="process-num">{step.num}</span>
                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
