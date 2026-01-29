import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Intersection Observer for scroll animations
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({
                ...prev,
                [entry.target.id]: true
              }));
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxSpeed = scrollY * 0.5;
  const rotateWatch = scrollY * 0.2;
  const scaleEffect = Math.max(1 - scrollY * 0.0005, 0.8);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <div className="logo-icon"></div>
            <span>CHRONOS</span>
          </div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#specs">Specs</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="cta-button">Pre-Order Now</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-background">
          <div className="bg-circle circle-1"></div>
          <div className="bg-circle circle-2"></div>
          <div className="bg-circle circle-3"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">TIME</span>
              <span className="title-line highlight">REDEFINED</span>
            </h1>
            <p className="hero-subtitle">
              Experience the future on your wrist. Premium craftsmanship meets cutting-edge technology.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Explore Now</button>
              <button className="btn-secondary">Watch Video</button>
            </div>
          </div>

          <div className="hero-watch" style={{ 
            transform: `translateY(${parallaxSpeed}px) rotate(${rotateWatch}deg) scale(${scaleEffect})`
          }}>
            <div className="watch-container">
              <div className="watch-body">
                <div className="watch-screen">
                  <div className="screen-time">10:08</div>
                  <div className="screen-date">FRI 30 JAN</div>
                  <div className="screen-stats">
                    <div className="stat">
                      <span className="stat-icon">♥</span>
                      <span>72</span>
                    </div>
                    <div className="stat">
                      <span className="stat-icon">⚡</span>
                      <span>1.2k</span>
                    </div>
                  </div>
                </div>
                <div className="watch-crown"></div>
                <div className="watch-button btn-top"></div>
                <div className="watch-button btn-bottom"></div>
              </div>
              <div className="watch-strap strap-top"></div>
              <div className="watch-strap strap-bottom"></div>
            </div>
            <div className="watch-glow"></div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features" ref={featuresRef}>
        <div className="features-header animate-on-scroll" id="features-header">
          <h2 className="section-title">
            <span className="title-accent">Premium</span> Features
          </h2>
          <p className="section-subtitle">Engineered for excellence, designed for life</p>
        </div>

        <div className="features-grid">
          <div className={`feature-card animate-on-scroll ${isVisible['feature-1'] ? 'visible' : ''}`} id="feature-1">
            <div className="feature-icon icon-battery">
              <div className="battery-shell">
                <div className="battery-level"></div>
              </div>
            </div>
            <h3>7-Day Battery</h3>
            <p>Advanced power management ensures week-long performance on a single charge</p>
          </div>

          <div className={`feature-card animate-on-scroll ${isVisible['feature-2'] ? 'visible' : ''}`} id="feature-2">
            <div className="feature-icon icon-water">
              <div className="water-drop"></div>
              <div className="water-drop drop-2"></div>
              <div className="water-drop drop-3"></div>
            </div>
            <h3>Water Resistant</h3>
            <p>50m water resistance for swimming, surfing, and everyday adventures</p>
          </div>

          <div className={`feature-card animate-on-scroll ${isVisible['feature-3'] ? 'visible' : ''}`} id="feature-3">
            <div className="feature-icon icon-heart">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <h3>Health Tracking</h3>
            <p>Advanced sensors monitor heart rate, SpO2, sleep quality, and stress levels</p>
          </div>

          <div className={`feature-card animate-on-scroll ${isVisible['feature-4'] ? 'visible' : ''}`} id="feature-4">
            <div className="feature-icon icon-display">
              <div className="display-frame">
                <div className="display-pixel p1"></div>
                <div className="display-pixel p2"></div>
                <div className="display-pixel p3"></div>
              </div>
            </div>
            <h3>AMOLED Display</h3>
            <p>Brilliant 1.4" always-on display with 326 PPI crystal-clear resolution</p>
          </div>

          <div className={`feature-card animate-on-scroll ${isVisible['feature-5'] ? 'visible' : ''}`} id="feature-5">
            <div className="feature-icon icon-gps">
              <div className="gps-ring ring-1"></div>
              <div className="gps-ring ring-2"></div>
              <div className="gps-ring ring-3"></div>
              <div className="gps-dot"></div>
            </div>
            <h3>GPS Navigation</h3>
            <p>Built-in GPS with multi-band support for precise location tracking anywhere</p>
          </div>

          <div className={`feature-card animate-on-scroll ${isVisible['feature-6'] ? 'visible' : ''}`} id="feature-6">
            <div className="feature-icon icon-notification">
              <div className="notification-bell">
                <div className="bell-body"></div>
                <div className="bell-clapper"></div>
              </div>
              <div className="notification-badge">3</div>
            </div>
            <h3>Smart Notifications</h3>
            <p>Stay connected with instant alerts for calls, messages, and app notifications</p>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="specs" id="specs">
        <div className="specs-content">
          <div className={`specs-visual animate-on-scroll ${isVisible['specs-visual'] ? 'visible' : ''}`} id="specs-visual">
            <div className="rotating-watch">
              <div className="watch-3d">
                <div className="watch-face face-front"></div>
                <div className="watch-face face-back"></div>
                <div className="watch-face face-side"></div>
              </div>
            </div>
          </div>

          <div className={`specs-details animate-on-scroll ${isVisible['specs-details'] ? 'visible' : ''}`} id="specs-details">
            <h2 className="section-title">Technical <span className="title-accent">Specifications</span></h2>
            
            <div className="specs-list">
              <div className="spec-item">
                <span className="spec-label">Display</span>
                <span className="spec-value">1.4" AMOLED, 454×454</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Processor</span>
                <span className="spec-value">Dual-core 1.2 GHz</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Memory</span>
                <span className="spec-value">1GB RAM + 8GB Storage</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Battery</span>
                <span className="spec-value">420 mAh Li-polymer</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Connectivity</span>
                <span className="spec-value">Bluetooth 5.2, WiFi, GPS</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Sensors</span>
                <span className="spec-value">Heart Rate, SpO2, Accelerometer, Gyro</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Materials</span>
                <span className="spec-value">Titanium case, Sapphire crystal</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Weight</span>
                <span className="spec-value">48g (without strap)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery" id="gallery">
        <h2 className="section-title">
          Designed to <span className="title-accent">Impress</span>
        </h2>

        <div className="gallery-grid">
          <div className={`gallery-item item-1 animate-on-scroll ${isVisible['gallery-1'] ? 'visible' : ''}`} id="gallery-1">
            <div className="gallery-image">
              <div className="gallery-watch-visual visual-1">
                <div className="gallery-watch-body">
                  <div className="gallery-watch-screen">
                    <div className="gallery-time">10:08</div>
                    <div className="gallery-rings">
                      <div className="ring red"></div>
                      <div className="ring green"></div>
                      <div className="ring blue"></div>
                    </div>
                  </div>
                </div>
                <div className="gallery-strap-top"></div>
                <div className="gallery-strap-bottom"></div>
              </div>
            </div>
          </div>
          <div className={`gallery-item item-2 animate-on-scroll ${isVisible['gallery-2'] ? 'visible' : ''}`} id="gallery-2">
            <div className="gallery-image">
              <div className="gallery-watch-visual visual-2">
                <div className="gallery-watch-side">
                  <div className="side-body">
                    <div className="side-crown"></div>
                    <div className="side-button side-btn-1"></div>
                    <div className="side-button side-btn-2"></div>
                  </div>
                  <div className="side-strap-top"></div>
                  <div className="side-strap-bottom"></div>
                </div>
              </div>
            </div>
          </div>
          <div className={`gallery-item item-3 animate-on-scroll ${isVisible['gallery-3'] ? 'visible' : ''}`} id="gallery-3">
            <div className="gallery-image">
              <div className="gallery-watch-visual visual-3">
                <div className="tilted-watch">
                  <div className="tilted-body">
                    <div className="tilted-screen">
                      <div className="compass-ring"></div>
                      <div className="compass-needle"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`gallery-item item-4 animate-on-scroll ${isVisible['gallery-4'] ? 'visible' : ''}`} id="gallery-4">
            <div className="gallery-image">
              <div className="gallery-watch-visual visual-4">
                <div className="flat-watch">
                  <div className="flat-body">
                    <div className="flat-screen">
                      <div className="heartbeat-line">
                        <svg viewBox="0 0 100 40">
                          <polyline points="0,20 20,20 25,5 30,35 35,15 40,25 45,20 100,20" />
                        </svg>
                      </div>
                      <div className="bpm-display">72 BPM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="contact">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Experience the Future?</h2>
          <p className="cta-subtitle">Pre-order now and get exclusive launch pricing</p>
          <div className="cta-price">
            <span className="price-tag">$299</span>
            <span className="price-original">$399</span>
          </div>
          <button className="btn-cta">Pre-Order Now</button>
          <p className="cta-note">Limited time offer • Free shipping worldwide</p>
        </div>
        <div className="cta-decoration">
          <div className="deco-circle"></div>
          <div className="deco-circle"></div>
          <div className="deco-circle"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon"></div>
              <span>CHRONOS</span>
            </div>
            <p>Redefining time, one wrist at a time.</p>
          </div>
          
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#specs">Specifications</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Warranty</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Chronos. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;