"use client";

import Reveal from "@/components/Reveal";
import useJsonData from "@/components/useJsonData";

export default function Services() {
    const { data: services, loading, error } = useJsonData("/data/services.json");

    if (error) {
        return (
            <section className="services" id="services">
                <p className="data-error">Could not load this section.</p>
            </section>
        );
    }

    if (loading || !services) {
        return (
            <section className="services" id="services">
                <p className="data-loading">Loading...</p>
            </section>
        );
    }

    return (
        <section className="services" id="services">
            <div className="section-head" style={{ maxWidth: 1180, marginLeft: "auto", marginRight: "auto" }}>
                <Reveal as="p" type="fade-up" className="eyebrow">
                    What I Do
                </Reveal>
                <Reveal as="h2" type="fade-up">
                    Full-stack capability, applied end to end.
                </Reveal>
            </div>
            <div className="services-grid">
                {services.map((s) => (
                    <Reveal as="article" key={s.num} type="fade-up" className="service-card">
                        <span className="service-num">{s.num}</span>
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                        <span className="service-arrow" aria-hidden="true">
                            →
                        </span>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
