import { useState } from 'react'

const categories = [
  {
    title: 'Mops',
    image: '/assets/mops.png',
    copy: 'Clip mops, microfiber mops, industrial mops, round mops and more for everyday and heavy-duty cleaning.',
    tag: 'Floor care',
  },
  {
    title: 'Brooms',
    image: '/assets/brooms.png',
    copy: 'Grass brooms and utility brooms made for comfortable, dependable day-to-day cleaning.',
    tag: 'Daily cleaning',
  },
  {
    title: 'Floor Wipers',
    image: '/assets/wipers.png',
    copy: 'Bathroom, floor and industrial wipers across practical sizes, shapes and styles.',
    tag: 'Quick dry',
  },
  {
    title: 'Toilet Brushes',
    image: '/assets/toilet-brushes.png',
    copy: 'Flexible and durable brush formats designed for convenient bathroom cleaning.',
    tag: 'Bathroom care',
  },
  {
    title: 'Cleaning Accessories',
    image: '/assets/misc.png',
    copy: 'Dust pans, floor brushes, sink brushes, cloth brushes, dusters, scrubbers and useful home-care tools.',
    tag: 'Utility range',
  },
]

const services = [
  {
    number: '01',
    title: 'Manufacturing',
    text: 'A broad cleaning-aids portfolio developed with focus on usability, quality and dependable everyday performance.',
  },
  {
    number: '02',
    title: 'Trading & Distribution',
    text: 'A market-ready product mix backed by established sales, marketing and distribution experience.',
  },
  {
    number: '03',
    title: 'Retailer Support',
    text: 'Dedicated sales support and regular market outreach to help products stay visible and available to retailers.',
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l1.7 5.3L19 9l-5.3 1.7L12 16l-1.7-5.3L5 9l5.3-1.7L12 2Z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a href="#top" className="brand" onClick={closeMenu}>
          <span className="brand-mark">M</span>
          <span className="brand-copy">
            <strong>Magix</strong>
            <small>We Mean Clean</small>
          </span>
        </a>

        <button
          className="menu-button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#products" onClick={closeMenu}>Products</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="/Magix-Product-Catalogue.pdf" target="_blank" rel="noreferrer" onClick={closeMenu}>
            Catalogue
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="hero-copy-wrap">
            <div className="eyebrow"><SparkIcon /> Cleaning essentials, made practical</div>
            <h1>
              Better tools for a
              <span> cleaner everyday.</span>
            </h1>
            <p>
              From mops and brooms to wipers, brushes and household cleaning accessories, Magix brings decades of cleaning-aids experience into one dependable range.
            </p>
            <div className="hero-actions">
              <a href="#products" className="primary-button">
                Explore Products <ArrowIcon />
              </a>
              <a href="/Magix-Product-Catalogue.pdf" target="_blank" rel="noreferrer" className="text-link">
                View full catalogue
              </a>
            </div>
            <div className="trust-row">
              <div><strong>30+</strong><span>Years in cleaning aids</span></div>
              <div><strong>5+</strong><span>Core product categories</span></div>
              <div><strong>BLR</strong><span>Bangalore based</span></div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Magix cleaning products">
            <div className="hero-card-label">Mop • Brush • Broom • Wiper</div>
            <img src="/assets/hero-products.png" alt="Selection of Magix household cleaning products" />
            <div className="floating-note note-one">Retail-ready range</div>
            <div className="floating-note note-two">Made for daily use</div>
          </div>
        </section>

        <section className="ticker" aria-label="Product highlights">
          <div className="ticker-track">
            <span>Mops</span><i />
            <span>Brushes</span><i />
            <span>Brooms</span><i />
            <span>Wipers</span><i />
            <span>Cleaning Accessories</span><i />
            <span>Household Care</span><i />
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-kicker">About Magix</div>
          <div className="about-grid">
            <div>
              <h2>Cleaning products built around real everyday needs.</h2>
            </div>
            <div className="about-copy">
              <p>
                Magix is a Bangalore-based household cleaning-aids business with more than three decades of experience in manufacturing and trading cleaning products.
              </p>
              <p>
                The range is designed for practical use across floors, kitchens, bathrooms, sinks, windows, furniture, carpets, bottles, cars and more.
              </p>
            </div>
          </div>
          <div className="values-grid">
            <article>
              <span>01</span>
              <h3>Useful by design</h3>
              <p>Product formats focused on convenience, reach, grip and the cleaning task at hand.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Wide household range</h3>
              <p>A single brand spanning core floor care, bathroom care and everyday cleaning accessories.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Market experience</h3>
              <p>Long-standing sales, marketing and distribution experience supporting the Magix brand.</p>
            </article>
          </div>
        </section>

        <section className="section products" id="products">
          <div className="section-heading-row">
            <div>
              <div className="section-kicker">Product range</div>
              <h2>Everything you need to keep spaces moving.</h2>
            </div>
            <p>Explore the major categories from the current Magix household product catalogue.</p>
          </div>

          <div className="product-grid">
            {categories.map((category, index) => (
              <article className={`product-card card-${index + 1}`} key={category.title}>
                <div className="product-image-wrap">
                  <img src={category.image} alt={`Magix ${category.title}`} />
                  <span>{category.tag}</span>
                </div>
                <div className="product-card-copy">
                  <h3>{category.title}</h3>
                  <p>{category.copy}</p>
                  <a href="/Magix-Product-Catalogue.pdf" target="_blank" rel="noreferrer">
                    See catalogue <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services" id="services">
          <div className="services-inner">
            <div className="section-kicker light">What we do</div>
            <div className="services-heading">
              <h2>More than products. A practical cleaning supply partner.</h2>
              <p>Magix combines product development with trading, distribution and retail-market support.</p>
            </div>
            <div className="services-list">
              {services.map((service) => (
                <article key={service.number}>
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section catalogue-section">
          <div className="catalogue-card">
            <div className="catalogue-copy">
              <div className="section-kicker">Full product catalogue</div>
              <h2>Want to see the complete Magix range?</h2>
              <p>
                Browse the complete catalogue with item codes across mops, brooms, floor wipers, toilet brushes and miscellaneous household cleaning products.
              </p>
              <a href="/Magix-Product-Catalogue.pdf" target="_blank" rel="noreferrer" className="primary-button dark">
                Open Catalogue <ArrowIcon />
              </a>
            </div>
            <div className="catalogue-cover">
              <img src="/assets/catalog-cover.png" alt="Magix product catalogue cover" />
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-panel">
            <div>
              <div className="section-kicker">Get in touch</div>
              <h2>For product, dealer and distribution enquiries.</h2>
              <p>Connect with Magix Household Product for catalogue, stock and business enquiries.</p>
            </div>
            <div className="contact-actions">
              <a href="tel:+919900844744">+91 99008 44744</a>
              <a href="tel:+918041262888">080-4126 2888</a>
              <a href="mailto:magixblr@yahoo.co.in">magixblr@yahoo.co.in</a>
              <span>#19, 9th Cross, Cubbonpet, Bangalore - 560 002</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a href="#top" className="footer-brand">
          <span className="brand-mark">M</span>
          <span>Magix Household Product</span>
        </a>
        <p>We Mean Clean.</p>
        <span>© {new Date().getFullYear()} Magix Household Product</span>
      </footer>
    </div>
  )
}

export default App
