import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ParticleField from '@/components/ParticleField';
import CustomCursor from '@/components/CustomCursor';

export const metadata = {
    title: 'Hussnain Naeem — Full Stack Developer',
    description: 'Hussnain Naeem is a Full Stack Developer building modern, scalable web applications and digital products.',
    openGraph: {
        type: 'website',
        title: 'Hussnain Naeem — Full Stack Developer',
        description: 'Full Stack Developer focused on building modern, scalable and user-centered web applications.',
    },
};

// Runs before hydration so the correct theme is applied on first paint —
// avoids a flash of the wrong theme and a client/server markup mismatch.
const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
            </head>
            <body>
                <CustomCursor />
                <ParticleField />
                <a href="#main" className="skip-link">Skip to content</a>
                <Nav />
                {children}
                <Footer />
                <BackToTop />
            </body>
        </html>
    );
}
