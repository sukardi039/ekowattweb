import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>EKOWATT</h1>
            <p className="tagline">Sustainable Energy Solutions</p>
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#activities">Activities</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <h2>Leading Singapore's Energy Transformation</h2>
          <p>Innovative renewable energy solutions for a sustainable future</p>
          <button className="cta-button">Learn More</button>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>About Ekowatt Pte Ltd</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Our Mission</h3>
              <p>
                Ekowatt Pte Ltd is a leading renewable energy company based in
                Singapore, dedicated to providing innovative and sustainable
                energy solutions. We are committed to advancing Singapore's
                energy independence through cutting-edge technology and
                environmentally responsible practices.
              </p>

              <h3>Company Overview</h3>
              <ul className="company-info">
                <li>
                  <strong>Founded:</strong> Established as a pioneering
                  renewable energy provider
                </li>
                <li>
                  <strong>Location:</strong> Singapore, Asia-Pacific region
                </li>
                <li>
                  <strong>Focus:</strong> Sustainable energy solutions and
                  renewable technologies
                </li>
                <li>
                  <strong>Vision:</strong> To be the leading renewable energy
                  provider in Southeast Asia
                </li>
              </ul>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <h4>10+</h4>
                <p>Years of Experience</p>
              </div>
              <div className="stat-card">
                <h4>500+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-card">
                <h4>50+</h4>
                <p>Expert Team Members</p>
              </div>
              <div className="stat-card">
                <h4>100%</h4>
                <p>Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="capabilities">
        <div className="container">
          <h2>Business Capabilities</h2>
          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="icon">☀️</div>
              <h3>Solar Energy Solutions</h3>
              <p>
                We design and implement comprehensive solar photovoltaic systems
                for residential, commercial, and industrial applications. Our
                expertise includes system design, installation, and maintenance.
              </p>
            </div>

            <div className="capability-card">
              <div className="icon">⚡</div>
              <h3>Energy Storage Systems</h3>
              <p>
                Advanced battery storage solutions that maximize energy
                efficiency and provide backup power capabilities. We integrate
                cutting-edge energy storage technology with solar systems.
              </p>
            </div>

            <div className="capability-card">
              <div className="icon">🔧</div>
              <h3>System Integration</h3>
              <p>
                Complete integration of renewable energy systems with existing
                infrastructure. Our team handles design, installation, and
                optimization for seamless performance.
              </p>
            </div>

            <div className="capability-card">
              <div className="icon">📊</div>
              <h3>Energy Monitoring</h3>
              <p>
                Real-time monitoring and analytics platforms that track energy
                production and consumption. Data-driven insights help optimize
                system performance and ROI.
              </p>
            </div>

            <div className="capability-card">
              <div className="icon">🌱</div>
              <h3>Sustainability Consulting</h3>
              <p>
                Expert consulting services to help businesses transition to
                sustainable energy. We develop customized roadmaps for energy
                efficiency and carbon reduction goals.
              </p>
            </div>

            <div className="capability-card">
              <div className="icon">🛠️</div>
              <h3>Maintenance & Support</h3>
              <p>
                Comprehensive maintenance programs ensuring optimal performance
                of your renewable energy systems. 24/7 technical support
                available for all clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="activities" className="activities">
        <div className="container">
          <h2>Key Business Activities</h2>
          <div className="activities-list">
            <div className="activity-item">
              <div className="activity-number">01</div>
              <div className="activity-content">
                <h3>Renewable Energy System Design & Installation</h3>
                <p>
                  We provide end-to-end design and installation services for
                  solar PV systems, wind energy solutions, and hybrid renewable
                  systems tailored to client needs. Our engineers ensure optimal
                  placement, sizing, and integration for maximum efficiency.
                </p>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-number">02</div>
              <div className="activity-content">
                <h3>Energy Efficiency Audits & Consulting</h3>
                <p>
                  Comprehensive energy audits for commercial and industrial
                  facilities. We identify optimization opportunities, recommend
                  upgrades, and develop cost-effective solutions to reduce
                  energy consumption and operational costs.
                </p>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-number">03</div>
              <div className="activity-content">
                <h3>Smart Grid Solutions</h3>
                <p>
                  Implementation of intelligent grid management systems that
                  balance energy supply and demand in real-time. Our solutions
                  leverage IoT and AI technologies for optimized energy
                  distribution.
                </p>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-number">04</div>
              <div className="activity-content">
                <h3>Carbon Offset Programs</h3>
                <p>
                  Help organizations achieve their sustainability targets
                  through our carbon offset and credits program. We verify,
                  certificate, and manage carbon reduction initiatives aligned
                  with international standards.
                </p>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-number">05</div>
              <div className="activity-content">
                <h3>Training & Capacity Building</h3>
                <p>
                  We provide professional training and certification programs
                  for renewable energy technicians, engineers, and
                  sustainability professionals, building local expertise and
                  industry talent.
                </p>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-number">06</div>
              <div className="activity-content">
                <h3>Project Development & Finance</h3>
                <p>
                  We identify renewable energy opportunities, develop
                  feasibility studies, and assist with project financing options
                  including green loans and government incentive programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Get in Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>
                <strong>Company:</strong> Ekowatt Pte Ltd
              </p>
              <p>
                <strong>Location:</strong> Singapore
              </p>
              <p>
                <strong>Industry:</strong> Renewable Energy & Sustainability
              </p>
              <p>
                <strong>Services:</strong> Solar Solutions, Energy Storage,
                Smart Grids, Consulting
              </p>
              <div className="contact-methods">
                <p>
                  <strong>Email:</strong> info@ekowatt.com.sg
                </p>
                <p>
                  <strong>Phone:</strong> +65 6XXX XXXX
                </p>
                <p>
                  <strong>Website:</strong> www.ekowatt.com.sg
                </p>
              </div>
              <button className="contact-button">Request a Quote</button>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Ekowatt Pte Ltd. All rights reserved.</p>
          <p>Committed to Sustainable Energy Solutions for a Better Tomorrow</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
