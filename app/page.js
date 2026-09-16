import Hero from '@/components/Hero';
import Statement from '@/components/Statement';
import About from '@/components/About';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Skills from '@/components/Skills';
import Process from '@/components/Process';
import Journey from '@/components/Journey';
import Contact from '@/components/Contact';

export default function HomePage() {
    return (
        <main id="main">
            <Hero />
            <Statement />
            <About />
            <Services />
            <Work />
            <Skills />
            <Process />
            <Journey />
            <Contact />
        </main>
    );
}
