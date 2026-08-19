/* ==========================================================================
   ELECT — MULTIFACETED CREATIVE PORTFOLIO ENGINE
   Vanilla JavaScript | Zero External Dependencies
   ========================================================================== */

'use strict';

/* ==========================================================================
   PORTFOLIO CONTENT SETTINGS
   All site data and user editable options are placed here.
   ========================================================================== */
const PORTFOLIO_SETTINGS = {

  // Direct Contact Details
  contact: {
    email: "[ADD EMAIL]",
    whatsapp: "[ADD WHATSAPP]",
  },

  // Social Media Channels
  socials: [
    { name: "INSTAGRAM", url: "https://www.instagram.com/user_elect?igsh=Y2xiOXlieXIwOTFx", label: "@elect" },
    { name: "LINKEDIN", url: "www.linkedin.com/in/elect-okezie", label: "Elect O." },
    { name: "GITHUB", url: "https://github.com/elect64/", label: "github/elect" },
    { name: "X / TWITTER", url: "https://x.com/OkezieElect", label: "@elect" }
  ],

  // 03 — Featured Projects
  featuredProjects: [
    {
      id: "feat-01",
      title: "FAVOURS ESTATE",
      category: "Real Estate",
      description: "A comprehensive 360 aerial web real estate view system.",
      year: "2025",
      role: "Web Designer & Front-End Developer",
      tools: ["HTML","CSS", "JAVASCRIPT", "Marzipiano", "Design System", "Vanilla JS", "Netlify"],
      image: "assets/graphics/project-01.png",
      link: "https://favors-estate.netlify.app/"
    },
    {
      id: "feat-02",
      title: "PEE NAILS & PEE EXPRESS",
      category: "Beauty & Logistics",
      description: "Interactive architecture exploring threat vectors, user awareness, and secure interface design.",
      year: "2025",
      role: "Brand Designer",
      tools: ["Canva", "Lightroom", "OpenAI"],
      image: "assets/graphics/project-pee.jpg",
      link: "#"
    },
    {
      id: "feat-02",
      title: "Sampson Destiny Football Agency",
      category: "Sports Management",
      description: "Online contract management system for football players and agents.",
      year: "2026",
      role: "Web Designer & Developer",
      tools: ["VS Code", "OpenAI"],
      image: "assets/graphics/project-sampson.png",
      link: "https://sampson-destiny-football-agency-dasvmo24b.vercel.app/"
    }
  ],

  // 04 — Graphic Design Projects (Carousel)
  graphicProjects: [
    {
      title: "Student Shop Nigeria",
      category: "GADGET STORE ",
      image: "assets/graphics/104.png",
      year: "2024 - 2026"
    },
    {
      title: "Syndicate Wears",
      category: "FASHION DESIGN",
      image: "assets/graphics/project-syndicate.png",
      year: "2026"
    },
    {
      title: "DECRYPT 1.0",
      category: "COMMUNITY BRANDING",
      image: "assets/graphics/project-decrypt_v1.png",
      year: "2025 - till date"
    },
    {
      title: "NewDay Feeds",
      category: "Poultry",
      image: "assets/graphics/project-ndf.png",
      year: "2026"
    },
    {
      title: "RIKTIGT RENT",
      category: "Deep cleaning services in Sweden",
      image: "assets/graphics/project-riktigt.png",
      year: "2025"
    },
    {
      title: "C LEGACY OIL AND GAS",
      category: "PMS Dealer",
      image: "assets/graphics/project-cleg.png",
      year: "2024 - till date"
    },
    {
      title: "WCCCF UNIPORT",
      category: "Campus Fellowship",
      image: "assets/graphics/project-wcf4k.png",
      year: "2024 - till date"
    }
  ],

  // 05 — Video Editing Projects
  videoProjects: [
    {
      title: "THE MACEDONIA CALL",
      platform: "Short Film Trailer",
      description: "High-impact narrative motion design, multi-million view pacing, and color grading.",
      thumbnail: "assets/videos/thumb-mc.png",
      videoUrl: "https://vimeo.com/1186659892?share=copy&fl=sv&fe=ci"
    },
    {
      title: "Media BTS @ HTE2026",
      platform: "Highlight reel",
      description: "Dynamic typographic rhythm, sound design sync, and visual flow.",
      thumbnail: "assets/videos/thumb-hte_media.png",
      videoUrl: "https://vimeo.com/1219228373?share=copy&fl=sv&fe=ci"
    },
    {
      title: "Student Shop Nigeria New Location Opening",
      platform: "Promotional Video",
      description: "Dynamic typographic rhythm, sound design sync, and visual flow.",
      thumbnail: "assets/videos/thumb-ssnod.png",
      videoUrl: "https://vimeo.com/1219231701?share=copy&fl=sv&fe=ci"
    },
    {
      title: "HOLY MATRIMONY OF DORIS AND EMEKA OLUMATI",
      platform: "Wedding Cinematic",
      description: "Story-first post-production with immersive pacing and color atmosphere.",
      thumbnail: "assets/videos/thumb-wed.png",
      videoUrl: "https://vimeo.com/1219231982?fl=tl&fe=ec"
    }
  ],

  // 06 — Other Technical & Creative Work
  otherWork: [
    {
      span: "span-7",
      iconTag: "01 / WEB DEVELOPMENT",
      title: "Framework-Free Web Architecture",
      description: "Building ultra-fast, zero-dependency web experiences using semantic HTML5, custom CSS ITCSS architecture, and performant Vanilla ES6+ engines."
    },
    {
      span: "span-5",
      iconTag: "02 / CYBERSECURITY",
      title: "Security & Threat Research",
      description: "Analyzing digital vulnerabilities, advocating security literacy, and designing resilient digital communication pipelines."
    },
    {
      span: "span-6",
      iconTag: "03 / VIDEOGRAPHY",
      title: "Cinematic Camera Work",
      description: "Capturing dynamic visual assets with intentional framing, lighting composition, and lens movement built for post-production flexibility."
    },
    {
      span: "span-6",
      iconTag: "04 / HARDWARE & LAPTOP ENG",
      title: "Hardware Optimization",
      description: "Troubleshooting, upgrading, and custom tuning high-performance laptop systems for intensive media editing and security workflows."
    }
  ],

  // 09 — About Section Stats
  aboutStats: [
    { number: "5M+", label: "VIDEO VIEWS PRODUCED" },
    { number: "100+", label: "DESIGN PROJECTS DELIVERED" },
    { number: "MULTI", label: "DISCIPLINARY ARCHITECTURE" },
    { number: "DECRYPT", label: "COMMUNITY MOVEMENT" }
  ],

  // 10 — Capabilities Typographic List
  capabilities: [
    { title: "VIDEO EDITING", detail: "→ VISUAL STORYTELLING / SOUND DESIGN / COLOR GRADING" },
    { title: "GRAPHIC DESIGN", detail: "→ BRAND IDENTITY / PEAK  VISUALS " },
    { title: "WEB DEVELOPMENT", detail: "→ VANILLA JS / HTML & CSS / Prompt Engineering" },
    { title: "JUNIOR CYBERSECURITY ANALYST", detail: "→ SECURITY EDUCATION / SYSTEM AUDITING / ADVOCACY" },
    { title: "VIDEOGRAPHY", detail: "→ DIRECTION / LIGHTING / COMPOSITION" },
    { title: "LAPTOP ENGINEERING", detail: "→ HARDWARE TUNING / DIAGNOSTICS / PERFORMANCE" }
  ]
};


/* ==========================================================================
   INITIALIZATION & CORE CONTROLLERS
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initCustomCursor();
  initNavigation();
  
  // 1. Render the content FIRST
  renderDynamicContent(); 
  
  // 2. Initialize observers AFTER the content is in the DOM
  initScrollObservers(); 
  
  initCarousel();
  initContactCopy();
  initVideoModal();
});


/* ==========================================================================
   TEXT UNSCRAMBLE EFFECT CLASS
   ========================================================================== */
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      this.queue.push({ from, to, start, end, char: '' });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;

    for (let i = 0; i < this.queue.length; i++) {
      let { from, to, start, end, char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="scramble-glyph">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

/* --------------------------------------------------------------------------
   HERO TITLE REVEAL CONTROLLER
   -------------------------------------------------------------------------- */
function triggerHeroScramble() {
  const heroTitle = document.querySelector('.hero-title[data-scramble]');
  const heroSub = document.querySelector('.hero-subtitle[data-scramble]');

  if (heroTitle) {
    const fxTitle = new TextScramble(heroTitle);
    fxTitle.setText(heroTitle.getAttribute('data-scramble'));
  }

  if (heroSub) {
    setTimeout(() => {
      const fxSub = new TextScramble(heroSub);
      fxSub.setText(heroSub.getAttribute('data-scramble'));
    }, 400);
  }
}

/* --------------------------------------------------------------------------
   UPDATED PRELOADER ENGINE
   -------------------------------------------------------------------------- */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const progress = document.getElementById('preloader-progress');
  const counter = document.getElementById('preloader-counter');

  if (!preloader) return;

  let count = 0;
  const interval = setInterval(() => {
    count += Math.floor(Math.random() * 12) + 5;
    if (count >= 100) {
      count = 100;
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add('fade-out');
        // Trigger the text unscramble animation right after preloader fades out
        triggerHeroScramble();
      }, 300);
    }
    if (progress) progress.style.width = `${count}%`;
    if (counter) counter.textContent = `${count < 10 ? '0' + count : count}%`;
  }, 40);
}


/* --------------------------------------------------------------------------
   02. CUSTOM CURSOR CONTROLLER
   -------------------------------------------------------------------------- */
function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  const label = document.getElementById('cursor-label');

  if (!cursor || window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (dot) {
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    }
  });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.2;
    ringY += (mouseY - ringY) * 0.2;
    if (ring) {
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
    }
    if (label) {
      label.style.left = `${ringX}px`;
      label.style.top = `${ringY}px`;
    }
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Handle interactive element hover
  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('.interactive');
    if (target) {
      document.body.classList.add('cursor-active');
      const text = target.getAttribute('data-cursor') || 'VIEW';
      if (label) label.textContent = text;
    }
  });

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('.interactive');
    if (target) {
      document.body.classList.remove('cursor-active');
    }
  });
}


/* --------------------------------------------------------------------------
   03. STICKY NAV & MOBILE MENU
   -------------------------------------------------------------------------- */
function initNavigation() {
  const header = document.getElementById('site-header');
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('is-scrolled');
    } else {
      header?.classList.remove('is-scrolled');
    }
  });

  navToggle?.addEventListener('click', () => {
    const isOpen = mobileMenu?.classList.contains('is-open');
    if (isOpen) {
      mobileMenu?.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    } else {
      mobileMenu?.classList.add('is-open');
      navToggle.setAttribute('aria-expanded', 'true');
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });
}


/* --------------------------------------------------------------------------
   04. SCROLL OBSERVERS (REVEAL ANIMATIONS)
   -------------------------------------------------------------------------- */
function initScrollObservers() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-text, .reveal-up, .reveal-fade').forEach(el => {
    observer.observe(el);
  });
}


/* --------------------------------------------------------------------------
   05. DYNAMIC CONTENT RENDERING
   -------------------------------------------------------------------------- */
function renderDynamicContent() {
  
  // 1. Render Featured Projects
  const featuredContainer = document.getElementById('featured-projects-container');
  if (featuredContainer && PORTFOLIO_SETTINGS.featuredProjects) {
    featuredContainer.innerHTML = PORTFOLIO_SETTINGS.featuredProjects.map(proj => `
      <article class="project-featured-item reveal-up">
        <div class="project-media-frame interactive" data-cursor="PROJECT">
          <img src="${proj.image}" alt="${proj.title}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'800\' height=\'450\' viewBox=\'0 0 800 450\'><rect width=\'100%\' height=\'100%\' fill=\'%230f0f0f\'/><text x=\'50%\' y=\'50%\' fill=\'%2300FF66\' font-family=\'sans-serif\' font-size=\'20\' text-anchor=\'middle\'>${proj.title}</text></svg>';">
        </div>
        <div class="project-info-frame">
          <div class="project-meta-top">
            <span class="project-cat">${proj.category}</span>
            <span class="project-year">${proj.year}</span>
          </div>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.description}</p>
          <div class="project-specs">
            <div class="spec-item">
              <span>ROLE</span>
              ${proj.role}
            </div>
            <div class="spec-item">
              <span>STACK</span>
              ${proj.tools.join(' • ')}
            </div>
          </div>
          <a href="${proj.link}" class="c-btn-hero interactive" data-cursor="VIEW">EXPLORE CASE STUDY</a>
        </div>
      </article>
    `).join('');
  }

  // 2. Render Graphic Design Carousel Cards
  const carouselTrack = document.getElementById('graphic-carousel-track');
  if (carouselTrack && PORTFOLIO_SETTINGS.graphicProjects) {
    carouselTrack.innerHTML = PORTFOLIO_SETTINGS.graphicProjects.map(item => `
      <div class="graphic-card interactive" data-cursor="INSPECT">
        <div class="graphic-img-wrapper">
          <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'500\' viewBox=\'0 0 400 500\'><rect width=\'100%\' height=\'100%\' fill=\'%230a0a0a\'/><text x=\'50%\' y=\'50%\' fill=\'%2300FF66\' font-family=\'sans-serif\' font-size=\'16\' text-anchor=\'middle\'>${item.title}</text></svg>';">
        </div>
        <div class="graphic-info">
          <div>
            <h4 class="graphic-title">${item.title}</h4>
            <span class="graphic-cat">${item.category}</span>
          </div>
          <span class="project-year">${item.year}</span>
        </div>
      </div>
    `).join('');
  }

  // 3. Render Video Projects
  const videoContainer = document.getElementById('video-projects-container');
  if (videoContainer && PORTFOLIO_SETTINGS.videoProjects) {
    videoContainer.innerHTML = PORTFOLIO_SETTINGS.videoProjects.map((vid, idx) => `
      <div class="video-card interactive" data-cursor="PLAY" data-video-index="${idx}">
        <div class="video-thumb-frame">
          <img src="${vid.thumbnail}" alt="${vid.title}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'600\' height=\'337\' viewBox=\'0 0 600 337\'><rect width=\'100%\' height=\'100%\' fill=\'%230a0a0a\'/><text x=\'50%\' y=\'50%\' fill=\'%2300FF66\' font-family=\'sans-serif\' font-size=\'18\' text-anchor=\'middle\'>${vid.title}</text></svg>';">
          <div class="play-overlay">
            <div class="play-btn-circle">▶</div>
          </div>
        </div>
        <div class="video-details">
          <span class="video-platform">${vid.platform}</span>
          <h4 class="video-title">${vid.title}</h4>
          <p class="video-desc">${vid.description}</p>
        </div>
      </div>
    `).join('');
  }

  // 4. Render Other Technical Work Cards
  const otherContainer = document.getElementById('other-work-container');
  if (otherContainer && PORTFOLIO_SETTINGS.otherWork) {
    otherContainer.innerHTML = PORTFOLIO_SETTINGS.otherWork.map(card => `
      <div class="tech-card ${card.span} reveal-up">
        <span class="tech-icon-tag">${card.iconTag}</span>
        <h3 class="tech-title">${card.title}</h3>
        <p class="tech-desc">${card.description}</p>
      </div>
    `).join('');
  }

  // 5. Render About Stats
  const statsContainer = document.getElementById('about-stats-container');
  if (statsContainer && PORTFOLIO_SETTINGS.aboutStats) {
    statsContainer.innerHTML = PORTFOLIO_SETTINGS.aboutStats.map(st => `
      <div class="stat-card">
        <span class="stat-number">${st.number}</span>
        <span class="stat-label">${st.label}</span>
      </div>
    `).join('');
  }

  // 6. Render Capabilities List
  const capContainer = document.getElementById('capabilities-container');
  if (capContainer && PORTFOLIO_SETTINGS.capabilities) {
    capContainer.innerHTML = PORTFOLIO_SETTINGS.capabilities.map(cap => `
      <div class="capability-item interactive" data-cursor="SCOPE">
        <span class="cap-name">${cap.title}</span>
        <span class="cap-expansion">${cap.detail}</span>
      </div>
    `).join('');
  }

  // 7. Render Social Links
  const socialsContainer = document.getElementById('contact-socials-container');
  if (socialsContainer && PORTFOLIO_SETTINGS.socials) {
    socialsContainer.innerHTML = PORTFOLIO_SETTINGS.socials.map(soc => `
      <li>
        <a href="${soc.url}" target="_blank" rel="noopener noreferrer" class="social-item-link interactive" data-cursor="LINK">
          <span>${soc.name}</span>
          <span class="c-tag-green">${soc.label}</span>
        </a>
      </li>
    `).join('');
  }
}


/* --------------------------------------------------------------------------
   06. GRAPHIC CAROUSEL DRAG & CONTROLS
   -------------------------------------------------------------------------- */
function initCarousel() {
  const viewport = document.getElementById('carousel-viewport');
  const track = document.getElementById('graphic-carousel-track');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  if (!viewport || !track) return;

  let currentTranslate = 0;
  let isDragging = false;
  let startPos = 0;
  let prevTranslate = 0;

  const step = 340; // Approx card width + gap

  const setPosition = () => {
    track.style.transform = `translateX(${currentTranslate}px)`;
  };

  prevBtn?.addEventListener('click', () => {
    currentTranslate = Math.min(currentTranslate + step, 0);
    setPosition();
  });

  nextBtn?.addEventListener('click', () => {
    const maxScroll = -(track.scrollWidth - viewport.clientWidth);
    currentTranslate = Math.max(currentTranslate - step, maxScroll);
    setPosition();
  });

  // Touch / Mouse Dragging
  viewport.addEventListener('mousedown', dragStart);
  viewport.addEventListener('touchstart', dragStart);

  viewport.addEventListener('mousemove', dragMove);
  viewport.addEventListener('touchmove', dragMove);

  viewport.addEventListener('mouseup', dragEnd);
  viewport.addEventListener('touchend', dragEnd);
  viewport.addEventListener('mouseleave', dragEnd);

  function dragStart(e) {
    isDragging = true;
    startPos = getPositionX(e);
    viewport.style.cursor = 'grabbing';
  }

  function dragMove(e) {
    if (!isDragging) return;
    const currentPosition = getPositionX(e);
    const diff = currentPosition - startPos;
    currentTranslate = prevTranslate + diff;
    setPosition();
  }

  function dragEnd() {
    isDragging = false;
    prevTranslate = currentTranslate;
    viewport.style.cursor = 'grab';
  }

  function getPositionX(e) {
    return e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
  }
}


/* --------------------------------------------------------------------------
   07. CONTACT EMAIL COPY UTILITY
   -------------------------------------------------------------------------- */
function initContactCopy() {
  const emailBtn = document.getElementById('contact-email-btn');
  const toast = document.getElementById('email-toast');

  emailBtn?.addEventListener('click', (e) => {
    const emailText = PORTFOLIO_SETTINGS.contact.email;
    if (emailText && !emailText.includes('[ADD')) {
      navigator.clipboard.writeText(emailText).then(() => {
        if (toast) {
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 2000);
        }
      });
    }
  });
}


/* --------------------------------------------------------------------------
   08. VIDEO MODAL PLAYER
   -------------------------------------------------------------------------- */
function initVideoModal() {
  const modal = document.getElementById('video-modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');
  const modalBackdrop = document.getElementById('modal-backdrop');

  document.addEventListener('click', (e) => {
    const card = e.target.closest('.video-card');
    if (card) {
      const idx = card.getAttribute('data-video-index');
      const vidData = PORTFOLIO_SETTINGS.videoProjects[idx];
      if (vidData && modal && modalBody) {
        modalBody.innerHTML = `
          <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:#fff; text-align:center; padding:20px;">
            <h3 style="font-family:var(--font-heading); font-size:1.8rem; margin-bottom:12px; color:var(--accent-green);">${vidData.title}</h3>
            <p style="margin-bottom:20px; color:var(--text-muted);">${vidData.description}</p>
            <a href="${vidData.videoUrl}" target="_blank" class="c-btn-green">LAUNCH VIDEO LINK ↗</a>
          </div>
        `;
        modal.classList.add('is-active');
        modal.setAttribute('aria-hidden', 'false');
      }
    }
  });

  const closeModal = () => {
    modal?.classList.remove('is-active');
    modal?.setAttribute('aria-hidden', 'true');
    if (modalBody) modalBody.innerHTML = '';
  };

  modalClose?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', closeModal);
}