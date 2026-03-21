import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaCode, FaNetworkWired, FaDatabase, FaShieldAlt, FaCloud,
  FaReact, FaPython, FaPhp, FaJsSquare, FaDocker, FaAws
} from 'react-icons/fa';
import { 
  SiMysql, SiMongodb, SiCisco, SiMicrosoftazure, SiGit
} from 'react-icons/si';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const currentYear = new Date().getFullYear(); 

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <motion.div 
            className="logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            KKL
          </motion.div>
          <ul className="nav-menu">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item, index) => (
              <motion.li 
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a 
                  href={`#${item.toLowerCase()}`}
                  className={activeSection === item.toLowerCase() ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.toLowerCase());
                  }}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="grid-pattern"></div>
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <motion.p 
              className="hero-greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1 
              className="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Kevin Kipyegon Langat
            </motion.h1>
            <motion.h2 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Software Developer & Network Engineer
            </motion.h2>
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Building innovative software solutions and robust network infrastructures
              <br />that drive digital transformation and operational excellence.
            </motion.p>
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <button onClick={() => scrollToSection('contact')} className="btn btn-primary">
                Get In Touch
              </button>
              <button onClick={() => scrollToSection('projects')} className="btn btn-secondary">
                View My Work
              </button>
            </motion.div>
            <motion.div 
              className="hero-socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <a href="https://github.com/kipyegonk" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/kevin-kipyegon-langat" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:kevinlangat008@gmail.com">
                <FaEnvelope />
              </a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          className="scroll-indicator"
          style={{ opacity }}
        >
          <div className="mouse"></div>
          <p>Scroll Down</p>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I'm a dynamic and results-driven Software Developer and Network Administrator with hands-on 
                  experience in building innovative software solutions and managing robust network infrastructures.
                </p>
                <p>
                  With comprehensive expertise spanning both software development and networking administration, 
                  I have successfully led the development of projects like disease surveillance software and 
                  management systems while simultaneously optimizing network performance and security protocols.
                </p>
                <p>
                  My dual specialization enables me to deliver integrated technology solutions that enhance 
                  operational efficiency and streamline business processes across multiple organizational levels.
                </p>
                <div className="about-stats">
                  <div className="stat">
                    <h3>4+</h3>
                    <p>Years Experience</p>
                  </div>
                  <div className="stat">
                    <h3>15+</h3>
                    <p>Certifications</p>
                  </div>
                  <div className="stat">
                    <h3>50+</h3>
                    <p>Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Skills & Expertise</h2>
            <div className="skills-grid">
              <SkillCategory 
                icon={<FaCode />}
                title="Software Development"
                skills={[
                  { name: 'PHP', icon: <FaPhp /> },
                  { name: 'JavaScript', icon: <FaJsSquare /> },
                  { name: 'React JS', icon: <FaReact /> },
                  { name: 'Python', icon: <FaPython /> },
                  { name: 'HTML5/CSS3', level: 95 }
                ]}
              />
              <SkillCategory 
                icon={<FaNetworkWired />}
                title="Network & Infrastructure"
                skills={[
                  { name: 'Cisco CCNA', icon: <SiCisco /> },
                  { name: 'SD-WAN Solutions', level: 90 },
                  { name: 'VoIP (3CX)', level: 88 },
                  { name: 'Network Security', icon: <FaShieldAlt /> },
                  { name: 'Virtualization', level: 85 }
                ]}
              />
              <SkillCategory 
                icon={<FaDatabase />}
                title="Database Management"
                skills={[
                  { name: 'MySQL', icon: <SiMysql /> },
                  { name: 'MongoDB', icon: <SiMongodb /> },
                  { name: 'Database Design', level: 92 },
                  { name: 'Data Modeling', level: 88 }
                ]}
              />
              <SkillCategory 
                icon={<FaCloud />}
                title="Cloud & DevOps"
                skills={[
                  { name: 'Microsoft Azure', icon: <SiMicrosoftazure /> },
                  { name: 'Docker', icon: <FaDocker /> },
                  { name: 'Git', icon: <SiGit /> },
                  { name: 'CI/CD', level: 85 }
                ]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Work Experience</h2>
            <div className="timeline">
              <ExperienceItem 
                period="Jan 2026 - Present"
                title="Graduate"
                company="Kenya Revenue Authority"
                description="Managing IT infrastructure projects, ensuring project governance, and optimizing system performance through continuous improvements."
                achievements={[
                  "Project execution with best practices for delivery and governance",
                  "Monitor project team performance and resource allocation",
                  "Manage IT infrastructure lifecycle from planning to closure"
                ]}
              />
              <ExperienceItem 
                period="Nov 2024 - Feb 2025"
                title="Software Developer"
                company="Learnsoft Limited"
                description="Designed and developed scalable software solutions, collaborating with cross-functional teams to deliver high-quality products."
                achievements={[
                  "Successfully delivered projects increasing user engagement",
                  "Improved application performance by optimizing code",
                  "Contributed to privilege access systems development"
                ]}
              />
              <ExperienceItem 
                period="Aug 2023 - Dec 2024"
                title="Network Engineer"
                company="Crystal Limited"
                description="Designed and implemented customized network solutions, managed virtualized servers, and deployed security systems."
                achievements={[
                  "Implemented SD-WAN solutions improving network performance",
                  "Deployed and maintained 3CX VoIP solutions",
                  "Managed CCTV and biometric access control systems"
                ]}
              />
              <ExperienceItem 
                period="Mar 2022 - Aug 2023"
                title="Software Developer"
                company="Brink Limited"
                description="Led development of Disease Surveillance Software and designed robust applications for client needs."
                achievements={[
                  "Progressed from Junior to Software Developer role",
                  "Led development of Disease Surveillance Software",
                  "Obtained certification as CHT Apps Engineer"
                ]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              <ProjectCard 
                title="School Management System"
                description="Comprehensive PHP-based management system handling administrative, financial, and academic activities with React JS frontend."
                tech={['PHP', 'React JS', 'MySQL', 'JavaScript']}
                achievements={[
                  "30% increase in user satisfaction",
                  "40% reduction in server response time",
                  "50% reduction in manual financial operations"
                ]}
                link="#"
              />
              <ProjectCard 
                title="Cholera Disease Surveillance System"
                description="Healthcare application built with CHT-core framework supporting health interventions across community health systems."
                tech={['CHT-Core', 'JavaScript', 'XLS Forms', 'JSON']}
                achievements={[
                  "Multi-language support implementation",
                  "Integration with antenatal care & immunization",
                  "Data-driven insights for policymakers"
                ]}
                link="#"
              />
              <ProjectCard 
                title="E-Commerce Platform"
                description="Modern, responsive e-commerce website with dynamic features and engaging user experience."
                tech={['React JS', 'CSS3', 'SwiperJS', 'RESTful APIs']}
                achievements={[
                  "Responsive design implementation",
                  "State management with React Hooks",
                  "Third-party API integration"
                ]}
                link="https://github.com/kipyegonk/Laravel-E-Commerce"
              />
              <ProjectCard 
                title="Network Infrastructure Deployment"
                description="Enterprise-level network solution with SD-WAN, VoIP, and comprehensive security systems."
                tech={['SD-WAN', '3CX VoIP', 'Azure', 'CCTV', 'Biometrics']}
                achievements={[
                  "Improved network resilience across locations",
                  "Implemented access control systems",
                  "Optimized resource utilization with virtualization"
                ]}
                link="#"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Education & Certifications</h2>
            <div className="education-grid">
              <div className="education-card">
                <h3>Education</h3>
                <div className="education-item">
                  <h4>Bachelor's Degree in Information Technology</h4>
                  <p className="institution">Kabarak University</p>
                  <p className="year">2022</p>
                </div>
                <div className="education-item">
                  <h4>Kenya Certificate of Secondary Education</h4>
                  <p className="institution">Mlimani School</p>
                  <p className="year">2018</p>
                </div>
              </div>
              <div className="certifications-card">
                <h3>Professional Certifications</h3>
                <div className="cert-list">
                  <div className="cert-item">
                    <span className="cert-dot"></span>
                    <div>
                      <p>Certified 3CX Engineer</p>
                      <small>3CX • 2026</small>
                    </div>
                  </div>
                  <div className="cert-item">
                    <span className="cert-dot"></span>
                    <div>
                      <p>CISCO CCNA 1-3 Certifications</p>
                      <small>Cisco • 2023</small>
                    </div>
                  </div>
                  <div className="cert-item">
                    <span className="cert-dot"></span>
                    <div>
                      <p>Network Defense & Security</p>
                      <small>Cisco Networking Academy • 2026</small>
                    </div>
                  </div>
                  <div className="cert-item">
                    <span className="cert-dot"></span>
                    <div>
                      <p>Data Analytics</p>
                      <small>ICT Authority • 2025</small>
                    </div>
                  </div>
                  <div className="cert-item">
                    <span className="cert-dot"></span>
                    <div>
                      <p>Foundational AI Training</p>
                      <small>ICT Authority • 2025</small>
                    </div>
                  </div>
                  <div className="cert-item">
                    <span className="cert-dot"></span>
                    <div>
                      <p>Building CHT Applications</p>
                      <small>Medic (CHT Academy) • 2023</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-content">
              <div className="contact-info">
                <p className="contact-intro">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <div className="contact-details">
                  <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <div>
                      <h4>Email</h4>
                      <a href="mailto:kevinlangat008@gmail.com">kevinlangat008@gmail.com</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <div>
                      <h4>Phone</h4>
                      <a href="tel:+254707622457">+254 111 790 013</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <div>
                      <h4>Location</h4>
                      <p>Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
                <div className="contact-socials">
                  <a href="https://github.com/kipyegonk" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href="https://linkedin.com/in/kevin-kipyegon-langat" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
              <div className="contact-form">
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Subject" required />
                  </div>
                  <div className="form-group">
                    <textarea rows="6" placeholder="Your Message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
  <div className="container">
    <p>&copy; {currentYear} Kevin Kipyegon Langat. All rights reserved.</p>
    <p>Designed & Built with React</p>
  </div>
</footer>
    </div>
  );
}

// Skill Category Component
const SkillCategory = ({ icon, title, skills }) => (
  <motion.div 
    className="skill-category"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5 }}
  >
    <div className="skill-header">
      <span className="skill-icon">{icon}</span>
      <h3>{title}</h3>
    </div>
    <div className="skill-list">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          {skill.icon && <span className="skill-item-icon">{skill.icon}</span>}
          <span className="skill-name">{skill.name}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

// Experience Item Component
const ExperienceItem = ({ period, title, company, description, achievements }) => (
  <motion.div 
    className="timeline-item"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="timeline-marker"></div>
    <div className="timeline-content">
      <span className="timeline-period">{period}</span>
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p>{description}</p>
      <ul className="achievements">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);

// Project Card Component
const ProjectCard = ({ title, description, tech, achievements, link }) => (
  <motion.div 
    className="project-card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -10 }}
  >
    <h3>{title}</h3>
    <p className="project-description">{description}</p>
    <div className="project-tech">
      {tech.map((t, index) => (
        <span key={index} className="tech-tag">{t}</span>
      ))}
    </div>
    <div className="project-achievements">
      {achievements.map((achievement, index) => (
        <div key={index} className="achievement-item">
          <span className="check-icon">✓</span>
          <span>{achievement}</span>
        </div>
      ))}
    </div>
    {link !== '#' && (
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        View Project →
      </a>
    )}
  </motion.div>
);

export default App;
