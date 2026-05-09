// =================================================
//  DYNAMIC RENDERER — reads DATA object
//  Auto-builds all sections, cards, timelines
// =================================================

// Helper: DOM elements
const $ = id => document.getElementById(id);

// ----- Navigation Building -----
const navSections = ["skills", "experience", "vulnerabilities", "projects", "certifications", "achievements", "education", "contact"];
const navContainer = $("#nav-links");
const mobileMenu = $("#mobileMenu");

navSections.forEach(section => {
  const link = document.createElement("a");
  link.href = `#${section}`;
  link.textContent = section.charAt(0).toUpperCase() + section.slice(1);
  navContainer.appendChild(link);

  const mobileLink = document.createElement("a");
  mobileLink.href = `#${section}`;
  mobileLink.textContent = section.charAt(0).toUpperCase() + section.slice(1);
  mobileMenu.appendChild(mobileLink);
});

// Mobile toggle
$("#mobileToggle").addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  mobileMenu.style.display = mobileMenu.classList.contains("open") ? "flex" : "none";
});

// Active link highlight + scroll progress
window.addEventListener("scroll", () => {
  const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  $("#scroll-progress").style.width = scrollPercent + "%";
  let current = "";
  document.querySelectorAll("section[id]").forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) current = section.getAttribute("id");
  });
  document.querySelectorAll(".nav-links a, .mobile-menu a").forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) a.classList.add("active");
  });
});

// --- Hero Section ---
function buildHero() {
  const p = DATA.profile;
  const heroHtml = `
    <div class="hero-left">
      <div class="badge"><span class="live-dot"></span> ${p.badge}</div>
      <h1 class="hero-name">Bilawal <em>Ali</em></h1>
      <div class="hero-role">${p.titleLine}</div>
      <p class="hero-bio">${p.bio}</p>
      <div class="hero-btns">
        <a href="${p.resume}" download class="btn btn-primary">📄 Download Resume</a>
        <a href="${p.github}" target="_blank" class="btn btn-outline">GitHub ↗</a>
        <a href="${p.linkedin}" target="_blank" class="btn btn-outline">LinkedIn ↗</a>
      </div>
      <div class="stats-grid">
        ${p.stats.map(s => `<div class="stat-card"><h3>${s.num}</h3><p>${s.label}</p></div>`).join("")}
      </div>
    </div>
    <div class="profile-card">
      <div class="profile-img">
        <img src="${p.photo}" alt="${p.name}" onerror="this.src='https://placehold.co/200x200?text=BA'">
      </div>
      <div class="profile-name">${p.name.toUpperCase()}</div>
      <div class="profile-title">${p.roleMono}</div>
      <div class="contact-links">
        <a href="${p.github}" target="_blank">🐙 GH</a>
        <a href="${p.linkedin}" target="_blank">🔗 IN</a>
        <a href="mailto:${p.email}">✉️ Mail</a>
      </div>
    </div>
  `;
  $("#hero-root").innerHTML = heroHtml;
}

// Skills
function buildSkills() {
  $("#skills-grid").innerHTML = DATA.skills.map(skill => `
    <div class="skill-card reveal">
      <h3>${skill.icon} ${skill.title}</h3>
      <div class="skill-items">
        ${skill.items.map(item => `<span class="skill-tag">${item}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// Experience with badges
function buildExperience() {
  const badgeColors = { green: "bp-green", cyan: "bp-cyan", amber: "bp-amber", red: "bp-red" };
  $("#timeline-root").innerHTML = DATA.experience.map(exp => `
    <div class="exp-card reveal">
      <div class="exp-header">
        <div><div class="exp-role">${exp.role}</div><div class="exp-company">${exp.company} · ${exp.location}</div></div>
        <div><span class="badge-pill ${badgeColors[exp.badgeColor] || "bp-green"}">${exp.badge}</span><div class="exp-date">${exp.date}</div></div>
      </div>
      <ul class="exp-points">${exp.points.map(p => `<li>${p}</li>`).join("")}</ul>
    </div>
  `).join("");
}

// Generic card builder for projects, vulns, certs, achievements
function buildCardGrid(containerId, items, type) {
  const container = $(containerId);
  if (!container) return;
  container.innerHTML = items.map((item, idx) => {
    let ribbonHtml = "";
    if (item.ribbon) ribbonHtml = `<div class="ribbon" style="background:${item.ribbonColor === 'amber' ? '#ffaa33' : item.ribbonColor === 'green' ? '#00ff88' : '#00eaff'}; color:#000;">🏆 ${item.ribbon}</div>`;
    let medalBadge = item.medal ? `<div class="ribbon" style="background:#ffcc00; left:auto; right:12px;">⭐ CEH Medal</div>` : "";
    let linkHtml = item.link ? `<a href="${item.link}" target="_blank" class="card-link">Explore →</a>` : (item.verify ? `<a href="${item.verify}" target="_blank" class="card-link">Verify →</a>` : "");
    let imageHtml = `<div class="card-img"><img src="${item.image}" alt="${item.title}" onerror="this.src='https://placehold.co/400x200?text=${encodeURIComponent(item.title)}'"></div>`;
    return `
      <div class="card reveal" data-lb-group="${type}" data-lb-src="${item.image}" data-lb-cap="${item.title}" onclick="openLightbox(this, '${type}', event)">
        ${ribbonHtml}
        ${medalBadge}
        ${imageHtml}
        <div class="card-content">
          <h3>${item.title}</h3>
          <p>${item.desc || (item.issuer ? item.issuer : "")}</p>
          <div class="tag-group">${(item.tags || []).map(t => `<span class="tag">${t}</span>`).join("")}</div>
          ${linkHtml}
        </div>
      </div>
    `;
  }).join("");
}

// Education
function buildEducation() {
  const e = DATA.education;
  $("#education-root").innerHTML = `
    <div class="edu-card reveal">
      <div class="edu-banner"><img src="${e.bannerImg}" alt="campus" onerror="this.style.display='none'"><span style="position:absolute; font-size:2rem;">🎓</span></div>
      <div class="edu-content">
        <div class="edu-degree">${e.degree}</div>
        <div class="edu-meta"><span class="edu-pill">${e.university}</span><span class="edu-pill">CGPA ${e.cgpa}</span><span class="edu-pill">${e.year}</span></div>
        <p>${e.desc}</p>
      </div>
    </div>
  `;
}

// Currently Learning
function buildLearning() {
  $("#learning-grid").innerHTML = DATA.currentlyLearning.map(item => `<div class="learn-item reveal">${item}</div>`).join("");
}

// Volunteer Events
function buildEvents() {
  $("#events-grid").innerHTML = DATA.volunteer.map(ev => `
    <div class="event-card reveal" data-lb-group="events" data-lb-src="${ev.image}" data-lb-cap="${ev.title}" onclick="openLightbox(this, 'events', event)">
      <div class="card-img"><img src="${ev.image}" alt="${ev.title}" onerror="this.src='https://placehold.co/400x200?text=Event'"></div>
      <div class="card-content"><h3>${ev.title}</h3><p>${ev.org}</p><small>${ev.desc}</small></div>
    </div>
  `).join("");
}

// Contact Section
function buildContact() {
  const p = DATA.profile;
  const contacts = [
    { icon: "✉️", title: "Email", value: p.email, link: `mailto:${p.email}` },
    { icon: "💼", title: "LinkedIn", value: "linkedin.com/in/bilawal", link: p.linkedin },
    { icon: "🐙", title: "GitHub", value: "github.com/Bila-Ali", link: p.github },
    { icon: "📞", title: "Phone", value: p.phone, link: `tel:${p.phone}` },
    { icon: "📍", title: "Location", value: p.location, link: "#" }
  ];
  $("#contact-grid").innerHTML = contacts.map(c => `
    <div class="contact-item reveal">
      <div class="emoji">${c.icon}</div>
      <h3>${c.title}</h3>
      <a href="${c.link}" target="_blank">${c.value}</a>
    </div>
  `).join("");
  $("#footer-social").innerHTML = `<a href="${p.github}" target="_blank">GitHub</a> • <a href="${p.linkedin}" target="_blank">LinkedIn</a> • <a href="mailto:${p.email}">Email</a>`;
}

// Lightbox System (global)
window.openLightbox = function(el, group, event) {
  const allCards = Array.from(document.querySelectorAll(`[data-lb-group="${group}"]`));
  const index = allCards.indexOf(el);
  window.lbItems = allCards;
  window.lbIndex = index;
  const lb = $("#lightbox");
  const img = $("#lbImg");
  const cap = $("#lbCaption");
  img.src = el.dataset.lbSrc;
  cap.innerText = el.dataset.lbCap;
  lb.style.display = "flex";
  document.body.style.overflow = "hidden";
};

function closeLightbox() {
  $("#lightbox").style.display = "none";
  document.body.style.overflow = "auto";
}

function navigateLb(direction) {
  if (!window.lbItems) return;
  window.lbIndex = (window.lbIndex + direction + window.lbItems.length) % window.lbItems.length;
  const nextCard = window.lbItems[window.lbIndex];
  $("#lbImg").src = nextCard.dataset.lbSrc;
  $("#lbCaption").innerText = nextCard.dataset.lbCap;
}

// Event listeners for lightbox
$("#closeLb").addEventListener("click", closeLightbox);
$("#lbPrev").addEventListener("click", () => navigateLb(-1));
$("#lbNext").addEventListener("click", () => navigateLb(1));
$("#lightbox").addEventListener("click", (e) => { if (e.target === $("#lightbox")) closeLightbox(); });

// Intersection Observer for reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("in"); });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Particle Canvas effect
function initParticles() {
  const canvas = $("#particles-canvas");
  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  function resize() {
    width = window.innerWidth; height = window.innerHeight;
    canvas.width = width; canvas.height = height;
  }
  function createParticles() {
    particles = [];
    for (let i=0; i<80; i++) {
      particles.push({
        x: Math.random() * width, y: Math.random() * height,
        radius: Math.random() * 2 + 1, alpha: Math.random() * 0.4,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.2
      });
    }
  }
  function draw() {
    if (!ctx) return;
    ctx.clearRect(0,0,width,height);
    ctx.fillStyle = "#00ff88";
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
      ctx.fillStyle = `rgba(0, 255, 136, ${p.alpha})`;
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = width; if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height; if (p.y > height) p.y = 0;
    });
    requestAnimationFrame(draw);
  }
  window.addEventListener("resize", () => { resize(); createParticles(); });
  resize(); createParticles(); draw();
}

// INITIALIZE RENDER
function init() {
  buildHero();
  buildSkills();
  buildExperience();
  buildCardGrid("vuln-grid", DATA.vulnerabilities, "vulns");
  buildCardGrid("projects-grid", DATA.projects, "projects");
  buildCardGrid("certs-grid", DATA.certifications, "certs");
  buildCardGrid("achievements-grid", DATA.achievements, "achievements");
  buildEducation();
  buildLearning();
  buildEvents();
  buildContact();
  initParticles();
}
init();
