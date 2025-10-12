const projects = [
  {
    name: "Car Rental Management System",
    description: "A web app to manage car rentals, bookings, and customers.",
    githubUrl: "https://github.com/Shaista45/Car_Rental_Management_System",
    imageUrl: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "GitWrap Visualizer",
    description: "An interactive GitHub activity visualizer dashboard.",
    githubUrl: "https://github.com/Shaista45/Gitwrap-visualizer",
    imageUrl: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Flight Management System",
    description: "A system to manage flight schedules, bookings, and passengers.",
    githubUrl: "https://github.com/Shaista45/Flight_Management_system",
    imageUrl: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "E-commerce Site",
    description: "An e-commerce platform with cart and payment integration.",
    githubUrl: "https://github.com/example/ecommerce-site",
    imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "File Organizer",
    description: "Desktop app to organize files based on type and date.",
    githubUrl: "https://github.com/Shaista45/File-Organizer",
    imageUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Frequently Accessed Queries Predictor",
    description: "Predicts and caches frequently accessed queries using MongoDB, Python, JavaScript, HTML, and CSS.",
    githubUrl: "https://github.com/Shaista45/Predicting_Frequently_Accessed_Queries",
    imageUrl: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Forest Type Prediction",
    description: "An ML/AI project for predicting forest types using machine learning algorithms and data analysis.",
    githubUrl: "https://github.com/Shaista45/Forest-Type-Mapping",
    imageUrl: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

const titles = [
  "Python Developer",
  "Full-Stack Web Developer",
  "AI Enthusiast",
  "Aspiring ML Engineer"
];

let currentTitleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeTitle() {
  const typingText = document.querySelector('.typing-text');
  if (!typingText) return;

  const currentTitle = titles[currentTitleIndex];

  if (isDeleting) {
    typingText.textContent = currentTitle.substring(0, currentCharIndex - 1);
    currentCharIndex--;
  } else {
    typingText.textContent = currentTitle.substring(0, currentCharIndex + 1);
    currentCharIndex++;
  }

  if (!isDeleting && currentCharIndex === currentTitle.length) {
    setTimeout(() => isDeleting = true, 2000);
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false;
    currentTitleIndex = (currentTitleIndex + 1) % titles.length;
  }

  const typingSpeed = isDeleting ? 50 : 100;
  setTimeout(typeTitle, typingSpeed);
}

function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 80;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }

    draw() {
      ctx.fillStyle = '#58A6FF';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.strokeStyle = `rgba(88, 166, 255, ${1 - distance / 100})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animateParticles);
  }

  animateParticles();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

function renderProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projects.map(project => `
    <div class="project-card">
      <div class="project-image">
        <img src="${project.imageUrl}" alt="${project.name}">
        <a href="${project.githubUrl}" target="_blank" rel="noopener" class="github-overlay">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
          <span>View on GitHub</span>
        </a>
      </div>
      <div class="project-info">
        <h4>${project.name}</h4>
        <p>${project.description}</p>
        <a href="${project.githubUrl}" target="_blank" rel="noopener" class="project-link">
          View on GitHub →
        </a>
      </div>
    </div>
  `).join('');
}

function handleNavbar() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 200) {
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

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
      }

      const navMenu = document.querySelector('.nav-menu');
      const hamburger = document.querySelector('.hamburger');
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
}

function handleHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
}

function handleThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';

  document.body.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
}

function handleIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
  });

  const cards = document.querySelectorAll('.about-card, .skill-item, .timeline-item, .project-card, .leadership-card, .education-card');
  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });
}

function handleContactForm() {
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (form && formStatus) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (name && email && message) {
        formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
        formStatus.className = 'form-status success';
        form.reset();

        setTimeout(() => {
          formStatus.className = 'form-status';
        }, 5000);
      } else {
        formStatus.textContent = 'Please fill in all fields.';
        formStatus.className = 'form-status error';
      }
    });
  }
}

function handleResumeDownload() {
  // Resume download is now handled directly by the anchor tag with download attribute
}

function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const cursorDot = document.querySelector('.custom-cursor-dot');

  if (!cursor || !cursorDot) return;

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let dotX = 0;
  let dotY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    const delay = 0.15;
    const dotDelay = 0.05;

    cursorX += (mouseX - cursorX) * delay;
    cursorY += (mouseY - cursorY) * delay;

    dotX += (mouseX - dotX) * (delay + dotDelay);
    dotY += (mouseY - dotY) * (delay + dotDelay);

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    cursorDot.style.left = dotX + 'px';
    cursorDot.style.top = dotY + 'px';

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card, .skill-item, .leadership-card, input, textarea');

  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('expand');
    });

    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('expand');
    });
  });

  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
  });

  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });
}

function init() {
  typeTitle();
  initParticles();
  renderProjects();
  handleNavbar();
  handleHamburger();
  handleThemeToggle();
  handleIntersectionObserver();
  handleContactForm();
  handleResumeDownload();
  initCustomCursor();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
