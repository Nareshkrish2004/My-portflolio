import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// ─── NAV ────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact'];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__logo">
        <span className="nav__logo-mark">NK</span>
        <span className="nav__logo-tag">Portfolio</span>
      </div>
      <button className="nav__burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
        <span /><span /><span />
      </button>
      <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
        {links.map(l => (
          <li key={l}>
            <button onClick={() => scrollTo(l)} className="nav__link">{l}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ─── HERO ───────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__grid-overlay" aria-hidden="true">
        {[...Array(6)].map((_, i) => <div key={i} className="hero__grid-col" />)}
      </div>

      <div className="hero__tag-row">
        <span className="tag">UI/UX Designer</span>
        <span className="tag tag--outline">Available 2026</span>
      </div>

      <div className="hero__main">
        <div className="hero__text">
          <p className="hero__eyebrow"><span className="asterisk">✳</span> Based in India</p>
          <h1 className="hero__name">
            <span className="hero__name-line">NARESH</span>
            <span className="hero__name-line hero__name-line--accent">K.</span>
          </h1>
          <p className="hero__tagline">
            Crafting intuitive &amp; human-centered<br />
            digital experiences.
          </p>
          <div className="hero__ctas">
            <button className="btn btn--primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Work <span className="btn__arrow">→</span>
            </button>
            <button className="btn btn--ghost" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </button>
          </div>
        </div>

        <div className="hero__card">
          <div className="hero__avatar-wrap">
            <div className="hero__avatar-inner">
              <span className="hero__initials">NK</span>
            </div>
          </div>
          <div className="hero__stat-row">
            <div className="hero__stat">
              <span className="hero__stat-num">2+</span>
              <span className="hero__stat-label">Years Design</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">9mo</span>
              <span className="hero__stat-label">Internships</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">4+</span>
              <span className="hero__stat-label">Projects</span>
            </div>
          </div>
          <div className="hero__tools">
            {['Figma', 'Prototyping', 'User Research', 'Wireframing'].map(t => (
              <span key={t} className="hero__tool-chip">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__ticker" aria-hidden="true">
        <div className="hero__ticker-inner">
          {[...Array(2)].map((_, repeat) =>
            ['UI/UX Design', 'User Research', 'Figma', 'Prototyping', 'Wireframing', 'Inclusive Design', 'Accessibility'].map((t, i) => (
              <React.Fragment key={`${repeat}-${i}`}>
                <span className="ticker__item">{t}</span>
                <span className="ticker__sep">✳</span>
              </React.Fragment>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ──────────────────────────────────────────────────────────────────
function About() {
  return (
    <section className="section about" id="about">
      <div className="section__label">
        <span className="section__num">01</span>
        <span className="section__title">About</span>
      </div>

      <div className="about__grid">
        <div className="about__headline">
          <h2 className="about__h2">
            Where empathy<br />meets pixels.
          </h2>
          <div className="about__accent-bar" />
        </div>

        <div className="about__content">
          <p className="about__bio">
            I'm <strong>Naresh K</strong>, a UI/UX Designer passionate about building products
            that feel natural, inclusive, and delightful to use. My background in computer
            applications gives me a technical perspective that bridges design and development.
          </p>
          <p className="about__bio">
            Currently pursuing my MCA at SRM University, I've channeled my academic foundation
            into real-world design — from mental health platforms to accessibility-first portals
            that serve differently-abled communities.
          </p>

          <div className="about__edu">
            <div className="about__edu-item">
              <span className="about__edu-year">2021–24</span>
              <div>
                <strong>BCA</strong>
                <span className="about__edu-school">SRM University</span>
              </div>
            </div>
            <div className="about__edu-item">
              <span className="about__edu-year">2024–26</span>
              <div>
                <strong>MCA</strong>
                <span className="about__edu-school">SRM University</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about__side-card">
          <div className="about__side-label">Design Philosophy</div>
          <p className="about__side-text">"Design is not just what it looks like — it's how it works for every human."</p>
          <div className="about__side-tags">
            <span>Inclusive</span><span>Accessible</span><span>Human-centered</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SKILLS ─────────────────────────────────────────────────────────────────
const skills = [
  { name: 'Figma', level: 92, icon: '◈', desc: 'Component design, auto-layout, design systems, handoff.' },
  { name: 'User Research', level: 85, icon: '◉', desc: 'Interviews, surveys, usability testing, affinity maps.' },
  { name: 'Wireframing', level: 90, icon: '▣', desc: 'Low/high fidelity flows, information architecture.' },
  { name: 'Prototyping', level: 88, icon: '◎', desc: 'Interactive prototypes, micro-interactions, flow testing.' },
];

function SkillCard({ skill, i }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`skill-card ${visible ? 'skill-card--visible' : ''} ${hovered ? 'skill-card--hovered' : ''}`}
      style={{ transitionDelay: `${i * 80}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="skill-card__top">
        <span className="skill-card__icon">{skill.icon}</span>
        <span className="skill-card__pct">{skill.level}%</span>
      </div>
      <h3 className="skill-card__name">{skill.name}</h3>
      <p className="skill-card__desc">{skill.desc}</p>
      <div className="skill-card__bar">
        <div
          className="skill-card__fill"
          style={{ width: visible ? `${skill.level}%` : '0%', transitionDelay: `${i * 80 + 300}ms` }}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section__label">
        <span className="section__num">02</span>
        <span className="section__title">Skills</span>
      </div>
      <div className="skills__header">
        <h2 className="skills__h2">Toolbox &amp;<br />Expertise</h2>
        <p className="skills__sub">Four core disciplines I've honed through real projects and internships.</p>
      </div>
      <div className="skills__grid">
        {skills.map((s, i) => <SkillCard key={s.name} skill={s} i={i} />)}
      </div>
    </section>
  );
}

// ─── EXPERIENCE ─────────────────────────────────────────────────────────────
const experiences = [
  {
    role: 'UI Designer',
    company: 'Scoops',
    duration: '6 Months',
    type: 'Internship',
    color: '#F0E040',
    highlights: ['Designed end-to-end UI flows', 'Collaborated with dev teams', 'Created reusable component libraries'],
  },
  {
    role: 'UI Designer',
    company: 'Neurolonic',
    duration: '3 Months',
    type: 'Internship — Germany',
    color: '#1a1a1a',
    highlights: ['Mental health platform design', 'AI bot interface UX', 'International remote collaboration'],
  },
];

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section__label">
        <span className="section__num">03</span>
        <span className="section__title">Experience</span>
      </div>
      <h2 className="exp__h2">Real-World<br />Design Work</h2>
      <div className="exp__list">
        {experiences.map((e, i) => (
          <div key={i} className="exp__item">
            <div className="exp__left">
              <div className="exp__marker" style={{ background: e.color }} />
              <div className="exp__meta">
                <span className="exp__type">{e.type}</span>
                <span className="exp__duration">{e.duration}</span>
              </div>
            </div>
            <div className="exp__right">
              <div className="exp__header">
                <h3 className="exp__role">{e.role}</h3>
                <span className="exp__company">{e.company}</span>
              </div>
              <ul className="exp__highlights">
                {e.highlights.map((h, j) => (
                  <li key={j}><span className="exp__bullet">→</span>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── PROJECTS ───────────────────────────────────────────────────────────────
const projects = [
  {
    num: '01',
    title: 'Neurolonic Platform',
    subtitle: 'Mental Health · AI · Accessibility',
    desc: 'Designed the UI for a mental health platform featuring an AI bot to support individuals dealing with depression. Focused on emotional design sensitivity, calm aesthetics, and barrier-free access.',
    tags: ['Figma', 'UX Research', 'Emotional Design', 'AI Interface'],
    accent: '#F0E040',
  },
  {
    num: '02',
    title: 'Job Portal for Deaf & HoH',
    subtitle: 'Inclusive Design · Accessibility First',
    desc: 'Built an accessibility-first job portal tailored for deaf and hard-of-hearing users. Emphasised clear visual communication, sign-language video support placeholders, and WCAG 2.1 AA compliance.',
    tags: ['Wireframing', 'Prototyping', 'WCAG', 'Inclusive UX'],
    accent: '#1a1a1a',
  },
];

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section__label">
        <span className="section__num">04</span>
        <span className="section__title">Projects</span>
      </div>
      <h2 className="proj__h2">Selected<br />Work</h2>
      <div className="proj__list">
        {projects.map((p, i) => (
          <div key={i} className="proj__card" style={{ '--proj-accent': p.accent }}>
            <div className="proj__card-left">
              <span className="proj__num">{p.num}</span>
              <div className="proj__thumb">
                <div className="proj__thumb-inner">
                  <span className="proj__thumb-icon">◈</span>
                </div>
              </div>
            </div>
            <div className="proj__card-right">
              <div className="proj__card-header">
                <h3 className="proj__title">{p.title}</h3>
                <span className="proj__subtitle">{p.subtitle}</span>
              </div>
              <p className="proj__desc">{p.desc}</p>
              <div className="proj__tags">
                {p.tags.map(t => <span key={t} className="proj__tag">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── SERVICES ───────────────────────────────────────────────────────────────
const services = [
  {
    icon: '◱',
    title: 'Mobile App Design',
    desc: 'Native and cross-platform mobile interfaces with intuitive flows, gesture-based interactions, and pixel-perfect handoffs ready for development.',
  },
  {
    icon: '▦',
    title: 'Web Design',
    desc: 'Responsive, modern web interfaces — from landing pages to complex dashboards — built with accessibility and visual hierarchy at the forefront.',
  },
];

function Services() {
  return (
    <section className="section services" id="services">
      <div className="section__label">
        <span className="section__num">05</span>
        <span className="section__title">Services</span>
      </div>
      <h2 className="svc__h2">What I<br />Offer</h2>
      <div className="svc__grid">
        {services.map((s, i) => (
          <div key={i} className={`svc__card ${i === 0 ? 'svc__card--accent' : ''}`}>
            <span className="svc__icon">{s.icon}</span>
            <h3 className="svc__title">{s.title}</h3>
            <p className="svc__desc">{s.desc}</p>
            <div className="svc__cta">Get in touch →</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── CONTACT ────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="section contact" id="contact">
      <div className="section__label">
        <span className="section__num">06</span>
        <span className="section__title">Contact</span>
      </div>
      <div className="contact__grid">
        <div className="contact__left">
          <h2 className="contact__h2">Let's Work<br />Together.</h2>
          <p className="contact__sub">Open to internships, freelance projects, and full-time roles.</p>

          <div className="contact__info">
            <a href="mailto:nareshkrishnasamy2004@gmail.com" className="contact__link">
              <span className="contact__link-icon">✉</span>
              nareshkrishnasamy2004@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/naresh-k-978027283" target="_blank" rel="noreferrer" className="contact__link">
              <span className="contact__link-icon">in</span>
              linkedin.com/in/naresh-k-978027283
            </a>
          </div>

          <div className="contact__availability">
            <span className="contact__avail-dot" />
            Available for new projects
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label className="contact__label">Name</label>
            <input
              className="contact__input"
              placeholder="Your name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="contact__field">
            <label className="contact__label">Email</label>
            <input
              type="email"
              className="contact__input"
              placeholder="your@email.com"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div className="contact__field">
            <label className="contact__label">Message</label>
            <textarea
              className="contact__input contact__textarea"
              placeholder="Tell me about your project…"
              rows={5}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="btn btn--primary btn--full">
            {sent ? '✓ Message Sent!' : 'Send Message →'}
          </button>
        </form>
      </div>
    </section>
  );
}

// ─── FOOTER ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__logo">NK</span>
        <p className="footer__copy">© 2026 Naresh K. Designed with intent.</p>
        <div className="footer__links">
          <a href="mailto:nareshkrishnasamy2004@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/naresh-k-978027283" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
