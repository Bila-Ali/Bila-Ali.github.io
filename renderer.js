// renderer.js - Dynamic Portfolio Renderer

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  setupNavbar();
  setupScrollEffects();
});

// Main Render Function
function renderAll() {
  renderHero();
  renderSkills();
  renderExperience();
  renderCertifications();
  renderProjects();
  renderVulnerabilities();
  renderAchievements();
  renderEducation();
  renderCurrentlyLearning();
  renderContact();
}

// ====================== HERO ======================
function renderHero() {
  const p = DATA.profile;
  
  document.getElementById('hero-badge').textContent = p.badge;
  document.getElementById('hero-name').innerHTML = p.name;
  document.getElementById('hero-title').textContent = p.title;
  document.getElementById('hero-bio').innerHTML = p.bio;
  
  // Profile Image
  const img = document.getElementById('profile-img');
  img.src = p.photo;
  img.alt = p.name;

  // Stats
  const statsContainer = document.getElementById('stats-grid');
  statsContainer.innerHTML = p.stats.map(stat => `
    <div class="stat-card">
      <h3>${stat.num}</h3>
      <p>${stat.label}</p>
    </div>
  `).join('');
}

// ====================== SKILLS ======================
function renderSkills() {
  const container = document.getElementById('skills-grid');
  container.innerHTML = Object.entries(DATA.skills).map(([category, items]) => `
    <div class="skill-category">
      <h3>${category}</h3>
      <div class="skill-tags">
        ${items.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ====================== EXPERIENCE ======================
function renderExperience() {
  const container = document.getElementById('experience-timeline');
  container.innerHTML = Object.values(DATA.experience).map(exp => `
    <div class="timeline-item">
      <div class="timeline-header">
        <div>
          <h3>${exp.role}</h3>
          <h4>${exp.company} • ${exp.location}</h4>
        </div>
        <div class="timeline-date">${exp.date}</div>
      </div>
      <span class="badge ${exp.badgeColor}">${exp.badge}</span>
      <ul class="timeline-points">
        ${exp.points.map(point => `<li>${point}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

// ====================== CERTIFICATIONS ======================
function renderCertifications() {
  const container = document.getElementById('cert-grid');
  container.innerHTML = Object.values(DATA.certifications).map(cert => `
    <div class="card cert-card">
      <div class="card-image">
        <img src="${cert.image}" alt="${cert.name}" loading="lazy">
        ${cert.medal ? '<div class="medal">🏅</div>' : ''}
      </div>
      <div class="card-body">
        <h3>${cert.name}</h3>
        <p class="issuer">${cert.issuer} • ${cert.date}</p>
        ${cert.verify ? `<a href="${cert.verify}" target="_blank" class="verify-btn">Verify →</a>` : ''}
      </div>
    </div>
  `).join('');
}

// ====================== PROJECTS ======================
function renderProjects() {
  const container = document.getElementById('projects-grid');
  container.innerHTML = Object.values(DATA.projects).map(proj => `
    <div class="card project-card">
      <div class="card-image">
        <img src="${proj.image}" alt="${proj.title}" loading="lazy">
      </div>
      <div class="card-body">
        <h3>${proj.title}</h3>
        <p>${proj.desc}</p>
        <div class="tags">
          ${proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        ${proj.link ? `<a href="${proj.link}" target="_blank" class="project-link">View on GitHub →</a>` : ''}
      </div>
    </div>
  `).join('');
}

// ====================== VULNERABILITIES ======================
function renderVulnerabilities() {
  const container = document.getElementById('vuln-grid');
  container.innerHTML = Object.values(DATA.vulnerabilities).map(vuln => `
    <div class="card vuln-card">
      <div class="card-image">
        <img src="${vuln.image}" alt="${vuln.title}" loading="lazy">
      </div>
      <div class="card-body">
        <h3>${vuln.title}</h3>
        <p>${vuln.desc}</p>
        <div class="tags">
          ${vuln.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        ${vuln.severity ? `<span class="severity-badge ${vuln.severity.toLowerCase()}">${vuln.severity}</span>` : ''}
      </div>
    </div>
  `).join('');
}

// ====================== ACHIEVEMENTS ======================
function renderAchievements() {
  const container = document.getElementById('ach-grid');
  container.innerHTML = Object.values(DATA.achievements).map(ach => `
    <div class="card ach-card">
      <div class="card-image">
        <img src="${ach.image}" alt="${ach.title}" loading="lazy">
      </div>
      <div class="card-body">
        <h3>${ach.title}</h3>
        <p>${ach.desc}</p>
        ${ach.ribbon ? `<span class="ribbon ${ach.ribbonColor}">${ach.ribbon}</span>` : ''}
      </div>
    </div>
  `).join('');
}

// ====================== EDUCATION ======================
function renderEducation() {
  const edu = DATA.education;
  document.getElementById('education-card').innerHTML = `
    <div class="edu-banner">
      <img src="${edu.banner}" alt="${edu.university}">
    </div>
    <div class="edu-content">
      <h3>${edu.degree}</h3>
      <h4>${edu.university}</h4>
      <p class="cgpa">CGPA: <strong>${edu.cgpa}</strong> | Class of ${edu.year}</p>
      <p>${edu.desc}</p>
    </div>
  `;
}

// ====================== CURRENTLY LEARNING ======================
function renderCurrentlyLearning() {
  const container = document.getElementById('learning-grid');
  container.innerHTML = DATA.currentlyLearning.map(item => `
    <div class="learn-item">
      <span class="dot"></span>
      ${item}
    </div>
  `).join('');
}

// ====================== CONTACT ======================
function renderContact() {
  const p = DATA.profile;
  const container = document.getElementById('contact-grid');
  
  const contacts = [
    { icon: "✉️", title: "Email", value: p.email, link: `mailto:${p.email}` },
    { icon: "📱", title: "Phone", value: p.phone, link: `tel:${p.phone}` },
    { icon: "💼", title: "LinkedIn", value: "linkedin.com/in/bilawal-ali-0b0211245", link: p.linkedin },
    { icon: "🐙", title: "GitHub", value: "github.com/Bila-Ali", link: p.github },
    { icon: "📍", title: "Location", value: p.location }
  ];

  container.innerHTML = contacts.map(c => `
    <div class="contact-card">
      <div class="contact-icon">${c.icon}</div>
      <h3>${c.title}</h3>
      <a href="${c.link}" target="_blank">${c.value}</a>
    </div>
  `).join('');
}

// ====================== NAVBAR ======================
function setupNavbar() {
  const links = [
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certs" },
    { id: "projects", label: "Projects" },
    { id: "vulnerabilities", label: "Research" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" }
  ];

  const navContainer = document.getElementById('nav-links');
  navContainer.innerHTML = links.map(link => `
    <a href="#${link.id}" class="nav-item">${link.label}</a>
  `).join('');

  // Mobile Menu
  const toggle = document.getElementById('nav-toggle');
  toggle.addEventListener('click', () => {
    navContainer.classList.toggle('active');
  });
}

// ====================== SCROLL EFFECTS ======================
function setupScrollEffects() {
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Active nav link
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Simple scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .timeline-item, .skill-category').forEach(el => {
    el.style.transition = 'all 0.6s ease';
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
  });
}
