import logoAlta from './assets/logo-alta.jpg'
import eventosImg from './assets/services/eventos.svg'
import merchImg from './assets/services/merchandising.svg'
import cateringImg from './assets/services/catering.svg'
import marketingImg from './assets/services/marketing.svg'
import transformacionImg from './assets/services/transformacion.svg'
import webImg from './assets/services/web.svg'
import softwareImg from './assets/services/software.svg'

const services = [
  {
    title: 'Eventos corporativos y activaciones',
    description:
      'Diseñamos y ejecutamos experiencias memorables para lanzamientos, campañas, ferias, activaciones de marca y eventos empresariales con enfoque creativo y operativo.',
    image: eventosImg,
  },
  {
    title: 'Merchandising y bienes promocionales',
    description:
      'Desarrollamos artículos promocionales, regalos corporativos y material de branding alineado con la identidad de tu empresa para fortalecer tu presencia de marca.',
    image: merchImg,
  },
  {
    title: 'Catering y atención para eventos',
    description:
      'Brindamos soluciones de catering para reuniones, activaciones y celebraciones, cuidando la presentación, logística y experiencia de los asistentes.',
    image: cateringImg,
  },
  {
    title: 'Agencia de marketing digital',
    description:
      'Impulsamos marcas con estrategias digitales, contenido, pauta, redes sociales y campañas orientadas a posicionamiento, alcance y conversión.',
    image: marketingImg,
  },
  {
    title: 'Transformación digital',
    description:
      'Acompañamos a empresas en la mejora de sus procesos, digitalización de operaciones y adopción tecnológica para crecer con eficiencia y visión de futuro.',
    image: transformacionImg,
  },
  {
    title: 'Diseño y desarrollo web',
    description:
      'Creamos páginas web modernas, rápidas y enfocadas en resultados, con diseño atractivo, estructura profesional y experiencia optimizada para tus clientes.',
    image: webImg,
  },
  {
    title: 'Software a medida y soporte',
    description:
      'Construimos sistemas personalizados, plataformas internas, automatizaciones y soluciones tecnológicas adaptadas a las necesidades reales de cada negocio.',
    image: softwareImg,
  },
]

const strengths = [
  'Atención integral para proyectos físicos y digitales',
  'Soluciones personalizadas según cada cliente',
  'Diseño, ejecución y soporte en un solo equipo',
  'Enfoque creativo, comercial y tecnológico',
]

export default function App() {
  return (
    <div className="page-shell">
      <header className="hero" id="inicio">
        <nav className="navbar">
          <div className="brand">
            <img src={logoAlta} alt="Alta Soluciones y Servicios" className="brand-logo" />
            <div>
              <p className="brand-name">Alta Soluciones y Servicios</p>
              <span className="brand-tag">Impulsamos marcas, experiencias y soluciones</span>
            </div>
          </div>

          <div className="nav-links">
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-copy">
            <span className="eyebrow">Soluciones integrales para empresas y marcas</span>
            <h1>
              Llevamos tus ideas a la realidad con creatividad, estrategia y tecnología.
            </h1>
            <p>
              En Alta Soluciones y Servicios conectamos el mundo comercial, operativo y digital para ayudarte a crecer.
              Organizamos eventos, desarrollamos material promocional, impulsamos tu presencia digital y construimos
              herramientas tecnológicas hechas a tu medida.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="https://wa.me/51907383270" target="_blank" rel="noreferrer">
                Escríbenos por WhatsApp
              </a>
              <a className="btn btn-secondary" href="#servicios">
                Ver servicios
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <strong>360°</strong>
                <span>Enfoque integral</span>
              </div>
              <div className="stat-card">
                <strong>7</strong>
                <span>Líneas de servicio</span>
              </div>
              <div className="stat-card">
                <strong>B2B</strong>
                <span>Atención empresarial</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="floating-card main-card">
              <p>Servicios que integran creatividad + ejecución + tecnología</p>
            </div>
            <div className="floating-card accent-card top-right">Eventos & branding</div>
            <div className="floating-card accent-card bottom-left">Web & software</div>
          </div>
        </div>
      </header>

      <main>
        <section className="section section-dark" id="servicios">
          <div className="section-heading">
            <span className="section-badge">Nuestros servicios</span>
            <h2>Una empresa versátil para impulsar tu marca y tu operación</h2>
            <p>
              Ofrecemos servicios integrados para empresas que necesitan presencia, experiencia de marca y soluciones
              prácticas para crecer de forma ordenada.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section" id="nosotros">
          <div className="split-copy">
            <span className="section-badge">¿Por qué Alta?</span>
            <h2>Trabajamos contigo desde la idea hasta la ejecución</h2>
            <p>
              Somos una empresa orientada a resultados. Nos involucramos en cada proyecto con una visión práctica,
              creativa y profesional para entregar soluciones que realmente aporten valor.
            </p>
            <div className="pill-grid">
              {strengths.map((item) => (
                <span className="pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mission-vision-grid">
            <article className="info-card">
              <span className="mini-badge">Misión</span>
              <p>
                Brindar soluciones integrales en servicios, marketing, experiencias y tecnología, ayudando a nuestros
                clientes a destacar, optimizar sus procesos y conectar mejor con su público mediante propuestas
                innovadoras, confiables y personalizadas.
              </p>
            </article>

            <article className="info-card highlight">
              <span className="mini-badge">Visión</span>
              <p>
                Ser una empresa referente en Perú por nuestra capacidad de unir creatividad, servicio y transformación
                digital, convirtiéndonos en el aliado estratégico que impulsa el crecimiento sostenible de negocios y
                marcas de distintos sectores.
              </p>
            </article>
          </div>
        </section>

        <section className="section cta-section">
          <div className="cta-box">
            <div>
              <span className="section-badge">Conversemos</span>
              <h2>¿Buscas un proveedor que resuelva varias necesidades en un solo lugar?</h2>
              <p>
                En Alta Soluciones y Servicios podemos ayudarte con proyectos comerciales, creativos y tecnológicos.
              </p>
            </div>
            <a className="btn btn-primary" href="#contacto">
              Solicitar información
            </a>
          </div>
        </section>
      </main>

      <footer className="footer" id="contacto">
        <div>
          <p className="footer-title">Alta Soluciones y Servicios</p>
          <p className="footer-copy">
            Eventos, merchandising, catering, marketing digital, transformación digital, diseño web y software a medida.
          </p>
        </div>

        <div className="contact-list">
          <a href="tel:+51907383270">+51 907 383 270</a>
          <a href="mailto:contacto@altasys-peru.com">contacto@altasys-peru.com</a>
          <a href="https://wa.me/51907383270" target="_blank" rel="noreferrer">
            WhatsApp directo
          </a>
        </div>
      </footer>
    </div>
  )
}
