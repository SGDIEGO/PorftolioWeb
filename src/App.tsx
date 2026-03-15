import { useEffect, useState } from 'react'
import {
  BriefcaseBusiness,
  CalendarClock,
  ChartNoAxesCombined,
  ChevronDown,
  CircleUserRound,
  CodeXml,
  Compass,
  FolderKanban,
  GraduationCap,
  Handshake,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircleHeart,
  Moon,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Wrench,
} from 'lucide-react'
import { portfolioData } from './data/portfolioData'
import './App.css'

type ThemeMode = 'light' | 'dark'

const getInitialTheme = (): ThemeMode => {
  const savedTheme = window.localStorage.getItem('theme-mode')

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode)
    window.localStorage.setItem('theme-mode', themeMode)
  }, [themeMode])

  const toggleTheme = () => {
    setThemeMode((previousMode) =>
      previousMode === 'light' ? 'dark' : 'light',
    )
  }

  const {
    hero,
    focusAreas,
    skillGroups,
    metrics,
    services,
    projects,
    experience,
    education,
    certifications,
    testimonials,
    faq,
    contact,
  } = portfolioData

  const getFocusIcon = (title: string) => {
    if (title.includes('Web')) return <CodeXml size={18} aria-hidden="true" />
    if (title.includes('Automatizacion')) {
      return <Wrench size={18} aria-hidden="true" />
    }
    if (title.includes('Analisis')) {
      return <ChartNoAxesCombined size={18} aria-hidden="true" />
    }
    return <Compass size={18} aria-hidden="true" />
  }

  const getContactIcon = (label: string) => {
    if (label === 'Email') return <Mail size={18} aria-hidden="true" />
    if (label === 'LinkedIn') {
      return <Handshake size={18} aria-hidden="true" />
    }
    return <FolderKanban size={18} aria-hidden="true" />
  }

  return (
    <div className="portfolio-app">
      <nav className="top-nav" aria-label="Navegacion principal">
        <a href="#temas">
          <Lightbulb size={15} aria-hidden="true" />
          Temas
        </a>
        <a href="#habilidades">
          <Rocket size={15} aria-hidden="true" />
          Habilidades
        </a>
        <a href="#servicios">
          <BriefcaseBusiness size={15} aria-hidden="true" />
          Servicios
        </a>
        <a href="#proyectos">
          <FolderKanban size={15} aria-hidden="true" />
          Proyectos
        </a>
        <a href="#trayectoria">
          <GraduationCap size={15} aria-hidden="true" />
          Trayectoria
        </a>
        <a href="#testimonios">
          <MessageCircleHeart size={15} aria-hidden="true" />
          Testimonios
        </a>
        <a href="#faq">
          <ShieldCheck size={15} aria-hidden="true" />
          FAQ
        </a>
        <a href="#contacto">
          <Mail size={15} aria-hidden="true" />
          Contacto
        </a>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-pressed={themeMode === 'dark'}
          aria-label="Cambiar tema"
        >
          {themeMode === 'light' ? (
            <>
              <Moon size={15} aria-hidden="true" />
              Dark
            </>
          ) : (
            <>
              <Sun size={15} aria-hidden="true" />
              Light
            </>
          )}
        </button>
      </nav>

      <header className="hero-section">
        <div className="hero-avatar" aria-hidden="true">
          <CircleUserRound size={36} />
          <span>
            <Sparkles size={14} />
          </span>
        </div>
        <p className="eyebrow">PORTAFOLIO PROFESIONAL</p>
        <h1>{hero.name}</h1>
        <p className="role">{hero.role}</p>
        <p className="summary">{hero.summary}</p>

        <div className="hero-meta">
          <span>
            <MapPin size={15} aria-hidden="true" />
            {hero.location}
          </span>
          <span>
            <CalendarClock size={15} aria-hidden="true" />
            {hero.availability}
          </span>
        </div>

        <div className="hero-actions">
          <a href={hero.primaryAction.href}>{hero.primaryAction.label}</a>
          <a href={hero.secondaryAction.href} className="secondary">
            {hero.secondaryAction.label}
          </a>
        </div>

        <div className="metric-grid" aria-label="Metricas de impacto">
          {metrics.map((metric) => (
            <article key={metric.label} className="metric-card">
              <p className="metric-value">{metric.value}</p>
              <p className="metric-label">{metric.label}</p>
            </article>
          ))}
        </div>
      </header>

      <main className="content-grid">
        <section className="panel" id="temas">
          <h2>
            <Lightbulb size={19} aria-hidden="true" />
            Temas Principales
          </h2>
          <p className="panel-intro">
            Estructura recomendada para explicar de forma clara tus diferentes
            areas de especialidad.
          </p>

          <div className="focus-grid">
            {focusAreas.map((area) => (
              <article key={area.title} className="focus-card">
                <h3>
                  {getFocusIcon(area.title)}
                  {area.title}
                </h3>
                <p>{area.description}</p>
                <ul>
                  {area.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="panel" id="habilidades">
          <h2>
            <Rocket size={19} aria-hidden="true" />
            Habilidades Tecnicas
          </h2>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article key={group.category} className="skill-group">
                <h3>{group.category}</h3>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel" id="servicios">
          <h2>
            <BriefcaseBusiness size={19} aria-hidden="true" />
            Servicios
          </h2>
          <p className="panel-intro">
            Opciones de colaboracion pensadas para diferentes etapas de producto.
          </p>

          <div className="services-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="panel" id="proyectos">
          <h2>
            <FolderKanban size={19} aria-hidden="true" />
            Proyectos Destacados
          </h2>
          <div className="project-list">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <span>{project.year}</span>
                </div>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <a href={project.link}>Ver proyecto</a>
              </article>
            ))}
          </div>
        </section>

        <section className="panel" id="trayectoria">
          <h2>
            <GraduationCap size={19} aria-hidden="true" />
            Experiencia y Formacion
          </h2>
          <div className="timeline-grid">
            <article>
              <h3>Experiencia</h3>
              <ul className="timeline-list">
                {experience.map((item) => (
                  <li key={item.role + item.period}>
                    <h4>{item.role}</h4>
                    <p className="meta">
                      {item.company} | {item.period}
                    </p>
                    <p>{item.summary}</p>
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <h3>Educacion</h3>
              <ul className="timeline-list">
                {education.map((item) => (
                  <li key={item.program + item.period}>
                    <h4>{item.program}</h4>
                    <p className="meta">
                      {item.institution} | {item.period}
                    </p>
                    <p>{item.details}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <h3>Certificaciones</h3>
          <div className="tag-list">
            {certifications.map((certification) => (
              <span key={certification}>
                <Star size={14} aria-hidden="true" />
                {certification}
              </span>
            ))}
          </div>
        </section>

        <section className="panel" id="testimonios">
          <h2>
            <MessageCircleHeart size={19} aria-hidden="true" />
            Testimonios
          </h2>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.author} className="testimonial-card">
                <p className="quote">"{testimonial.quote}"</p>
                <p className="author">{testimonial.author}</p>
                <p className="author-role">{testimonial.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel" id="faq">
          <h2>
            <ShieldCheck size={19} aria-hidden="true" />
            Preguntas Frecuentes
          </h2>
          <div className="faq-list">
            {faq.map((item) => (
              <details key={item.question}>
                <summary>
                  {item.question}
                  <ChevronDown size={16} aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="panel" id="contacto">
          <h2>
            <Mail size={19} aria-hidden="true" />
            Contacto
          </h2>
          <p>{contact.message}</p>
          <ul className="contact-list">
            {contact.channels.map((channel) => (
              <li key={channel.label}>
                <span>
                  {getContactIcon(channel.label)}
                  {channel.label}
                </span>
                <a href={channel.href}>{channel.value}</a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer-note">
        <p>{contact.footerNote}</p>
      </footer>
    </div>
  )
}

export default App
