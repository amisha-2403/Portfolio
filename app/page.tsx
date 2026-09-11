const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

const skillGroups = [
  { label: 'Languages', items: ['C', 'C++', 'Java', 'Python', 'JavaScript'] },
  { label: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'PHP'] },
  { label: 'Databases', items: ['MongoDB', 'MySQL', 'PostgreSQL'] },
  { label: 'CS Core', items: ['DBMS', 'Computer Networks', 'Operating Systems', 'Cryptography'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Docker'] },
]

const projects = [
  {
    number: '01',
    project: 'GramSetu',
    category: 'Full-Stack / AgriTech',
    status: 'Developed / Portfolio Project',
    summary: 'A rural commerce platform connecting farmers, local sellers, delivery partners, and rural households through a digital marketplace.',
    link: 'https://gramsetu-five.vercel.app/',
    tech: ['Full-Stack', 'AgriTech', 'Hyperlocal Delivery'],
  },
  {
    number: '02',
    project: 'Blood Bank',
    category: 'Web Platform',
    status: 'Currently under development',
    summary: 'A web platform focused on connecting blood donors, recipients, and blood-related resources.',
    link: '#',
    tech: ['Web App', 'Donor Network', 'Healthcare'],
  },
  {
    number: '03',
    project: 'Chest Disease Detection',
    category: 'Machine Learning / AI',
    status: 'Currently under development',
    summary: 'An ML-based project focused on detecting chest diseases from medical imaging.',
    link: '#',
    tech: ['ML', 'AI', 'Medical Imaging'],
  },
]

const experiences = [
  { year: '2024', title: 'B.Tech / Computer Science begins', type: 'Education', detail: 'Started B.Tech in Computer Science at SKIT, Jaipur.' },
  { year: '2024', title: '15-Day In-House Internship', type: 'KISTechno Software', detail: 'Worked with HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL.' },
  { year: '2024', title: 'JKLU Hackathon', type: 'Startup�Student�Expert Collaboration Platform', detail: 'Built a hackathon prototype for a broader collaboration idea.' },
  { year: '2025', title: '45-Day Internship', type: 'Amigzo Pvt. Ltd.', detail: 'Practical full-stack development learning and the path toward GramSetu.' },
  { year: '2026', title: 'GramSetu', type: 'Independent / Post-Internship Project', detail: 'Rural commerce and agriculture-focused platform.' },
]

export default function Page() {
  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Amisha Choudhary">
          <span className="brand-mark">AC</span>
          <span className="brand-copy">
            <span className="brand-name">Amisha Choudhary</span>
            <span className="brand-role">Developer Portfolio</span>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} className="nav-link" href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          <span>Let�s Connect</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 12h16M14 4l8 8-8 8" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </a>
      </header>

      <main className="main-content">
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <div className="section-kicker"><span></span>Full-Stack Developer � Computer Science Student</div>
            <h1>
              <span className="hero-heading-line">Amisha</span>
              <span className="hero-heading-line">Choudhary</span>
            </h1>
            <div className="hero-subline"><span>Building ideas into meaningful digital experiences.</span></div>
            <p className="hero-summary">
              I am a 3rd-year Computer Science student learning by building real products,
              exploring full-stack development, and growing my interest in AI and ML.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                <span>Explore My Work</span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 12h16M14 4l8 8-8 8" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </a>
              <a className="button secondary" href="#contact"><span>Let�s Connect</span></a>
              <a className="button tertiary" href="/resume.pdf"><span>View Resume</span></a>
            </div>

            <div className="hero-proof">
              <div><span className="proof-number">3rd Year</span><span className="proof-label">B.Tech CS</span></div>
              <div><span className="proof-number">Full-Stack</span><span className="proof-label">Primary Direction</span></div>
              <div><span className="proof-number">AI/ML</span><span className="proof-label">Exploring</span></div>
            </div>
          </div>

          <aside className="hero-image-wrap" aria-label="Amisha Choudhary portrait">
            <div className="hero-image-frame">
              <div className="image-backdrop-orbit orbit-one"></div>
              <div className="image-backdrop-orbit orbit-two"></div>
              <img src="/placeholder-user.jpg" alt="Amisha Choudhary" className="hero-image" />
              <div className="image-shadow"></div>
              <div className="floating-card floating-card-one">
                <span className="floating-label">Focus</span>
                <span className="floating-text">Full-Stack</span>
              </div>
              <div className="floating-card floating-card-two">
                <span className="floating-label">Exploring</span>
                <span className="floating-text">AI/ML</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading centered">
            <span className="section-tag">Introduction</span>
            <h2>From idea to application.</h2>
          </div>
          <div className="about-grid">
            <article className="about-story">
              <span className="mini-label">About Me</span>
              <h3>I learn by building.</h3>
              <p>I enjoy turning ideas into functional applications and learning through the process of building them. My journey so far has included academic projects, independent work, internships, and hackathons, helping me explore both frontend and backend development.</p>
              <p>I am especially interested in full-stack development and in understanding how AI and ML can become useful parts of software products. My goal is to grow into a strong software developer who can build useful, scalable, and user-focused applications.</p>
              <div className="about-stats">
                <div><span className="stat-label">Education</span><span className="stat-value">2024�2028</span></div>
                <div><span className="stat-label">Degree</span><span className="stat-value">B.Tech CS</span></div>
                <div><span className="stat-label">College</span><span className="stat-value">SKIT</span></div>
              </div>
            </article>

            <aside className="about-panel">
              <div className="about-panel-card">
                <div className="panel-title-row">
                  <span className="panel-title">Developer Journey</span>
                  <span className="panel-icon">?</span>
                </div>
                <div className="timeline-list">
                  <div className="timeline-row"><span className="timeline-point"></span><span><span className="timeline-number">3rd Year</span><span className="timeline-copy">Computer Science</span></span></div>
                  <div className="timeline-row"><span className="timeline-point"></span><span><span className="timeline-number">2024�2028</span><span className="timeline-copy">B.Tech in Computer Science</span></span></div>
                  <div className="timeline-row"><span className="timeline-point"></span><span><span className="timeline-number">Full-Stack</span><span className="timeline-copy">Primary Direction</span></span></div>
                  <div className="timeline-row"><span className="timeline-point"></span><span><span className="timeline-number">AI/ML</span><span className="timeline-copy">Exploring</span></span></div>
                  <div className="timeline-row"><span className="timeline-point"></span><span><span className="timeline-number">2 Internships</span><span className="timeline-copy">Learning through practice</span></span></div>
                  <div className="timeline-row"><span className="timeline-point"></span><span><span className="timeline-number">Hackathon</span><span className="timeline-copy">Prototype experience</span></span></div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section mindset-section">
          <div className="section-heading centered">
            <span className="section-tag">Developer Mindset</span>
            <h2>How I work.</h2>
          </div>
          <div className="mindset-grid">
            <article className="mindset-card"><span className="mindset-index">01</span><span className="mindset-title">Build</span><p>I learn best by turning ideas into working products.</p></article>
            <article className="mindset-card"><span className="mindset-index">02</span><span className="mindset-title">Learn</span><p>I explore technologies through practical development.</p></article>
            <article className="mindset-card"><span className="mindset-index">03</span><span className="mindset-title">Experiment</span><p>I test ideas quickly and improve through iteration.</p></article>
            <article className="mindset-card"><span className="mindset-index">04</span><span className="mindset-title">Solve</span><p>I enjoy using software to solve real-world problems.</p></article>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <span className="section-tag">Technology Stack</span>
            <h2>Technical ecosystem.</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, idx) => (
              <article className="skill-group" key={group.label}>
                <div className="skill-group-head">
                  <span className="skill-group-label">{group.label}</span>
                  <span className="skill-group-index">0{idx + 1}</span>
                </div>
                <div className="skill-tags">
                  {group.items.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading centered">
            <span className="section-tag">Featured Projects</span>
            <h2>Product thinking in motion.</h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.project}>
                <div className="project-top"><span className="project-number">{project.number}</span><span className="project-category">{project.category}</span></div>
                <div className="project-body">
                  <div className="project-content">
                    <div className="project-title-row">
                      <h3>{project.project}</h3>
                      <a className="project-link" href={project.link} aria-label={`Open ${project.project}`}>?</a>
                    </div>
                    <div className="project-status">{project.status}</div>
                    <p>{project.summary}</p>
                    <div className="project-tags">
                      {project.tech.map((tech) => <span className="project-tag" key={tech}>{tech}</span>)}
                    </div>
                    <div className="case-study">
                      <span>Problem</span><span>Idea</span><span>Solution</span><span>Technology</span><span>Contribution</span>
                    </div>
                  </div>
                  <div className="project-image"><span className="project-image-text">{project.project}</span></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading centered">
            <span className="section-tag">Experience Timeline</span>
            <h2>Learning through practice.</h2>
          </div>
          <div className="timeline">
            {experiences.map((item) => (
              <article className="timeline-line" key={item.title}>
                <span className="timeline-dot"></span>
                <span className="timeline-year">{item.year}</span>
                <div className="timeline-detail">
                  <span className="timeline-title">{item.title}</span>
                  <span className="timeline-type">{item.type}</span>
                  <span className="timeline-detail-copy">{item.detail}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-heading">
            <span className="section-tag">Education</span>
            <h2>Academic foundation.</h2>
          </div>
          <div className="education-card">
            <div className="education-meta">
              <span className="education-year">2024�2028</span>
              <span className="education-status">Current: 3rd Year</span>
            </div>
            <div className="education-body">
              <div>
                <span className="education-degree">B.Tech Computer Science</span>
                <span className="education-college">Swami Keshvanand Institute of Technology, Management & Gramothan</span>
                <span className="education-location">Jaipur, Rajasthan</span>
              </div>
              <div className="education-image"><span className="education-icon">SKIT</span></div>
            </div>
          </div>
        </section>

        <section className="section certification-section" id="certifications">
          <div className="section-heading centered">
            <span className="section-tag">Certification</span>
            <h2>Learning path.</h2>
          </div>
          <div className="cert-card">
            <div className="cert-image"><span className="cert-image-label">NPTEL</span></div>
            <div className="cert-content">
              <span className="cert-type">Java NPTEL Certificate</span>
              <div className="cert-meta">
                <span>Certificate ID: <em>[PLACEHOLDER]</em></span>
                <span>Verification URL: <em>[PLACEHOLDER]</em></span>
              </div>
              <a className="button tertiary cert-button" href="#"><span>View Certificate</span></a>
            </div>
          </div>
        </section>

        <section className="section profiles-section">
          <div className="section-heading centered">
            <span className="section-tag">Coding Profiles</span>
            <h2>Things I build.</h2>
          </div>
          <div className="profile-grid">
            <a className="profile-card" href="https://github.com/amisha-2403?tab=repositories">
              <span className="profile-icon">GitHub</span>
              <span className="profile-title">GitHub Repositories</span>
              <span className="profile-link">github.com/amisha-2403</span>
            </a>
            <a className="profile-card" href="https://leetcode.com/u/AMISHA78/">
              <span className="profile-icon">LeetCode</span>
              <span className="profile-title">Problem Solving</span>
              <span className="profile-link">leetcode.com/u/AMISHA78/</span>
            </a>
            <a className="profile-card" href="https://www.linkedin.com/feed/">
              <span className="profile-icon">LinkedIn</span>
              <span className="profile-title">LinkedIn Profile</span>
              <span className="profile-link">linkedin.com/feed</span>
            </a>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-grid">
            <div className="contact-copy">
              <span className="section-tag">Contact</span>
              <h2>Have an idea?<br />Let�s build it.</h2>
              <p>I�m interested in collaborative development, full-stack product work, internships, hackathons, and software ideas that create real value.</p>
              <div className="contact-links">
                <a className="button primary" href="mailto:EMAIL_PLACEHOLDER@example.com"><span>Email Me</span></a>
                <a className="button secondary" href="https://github.com/amisha-2403?tab=repositories"><span>GitHub</span></a>
                <a className="button tertiary" href="https://www.linkedin.com/feed/"><span>LinkedIn</span></a>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Your email" />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell me about your idea"></textarea>
              </div>
              <button className="button primary form-button" type="button">
                <span>Send Message</span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 12h16M14 4l8 8-8 8" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
