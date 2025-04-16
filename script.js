
// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  themeToggle.innerHTML = newTheme === 'dark' 
    ? '<i class="fas fa-moon"></i>' 
    : '<i class="fas fa-sun"></i>';
});

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('nav') && !event.target.closest('.hamburger')) {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    }
});


// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.innerHTML = savedTheme === 'dark' 
  ? '<i class="fas fa-moon"></i>' 
  : '<i class="fas fa-sun"></i>';

// ===== 3D Floating Shapes =====
const floatingShapes = document.getElementById('floatingShapes');
for (let i = 0; i < 15; i++) {
  const shape = document.createElement('div');
  shape.classList.add('shape');
  shape.classList.add(Math.random() > 0.5 ? 'circle' : 'triangle');
  
  // Random properties
  const size = Math.random() * 30 + 10;
  shape.style.width = `${size}px`;
  shape.style.height = `${size}px`;
  shape.style.left = `${Math.random() * 100}%`;
  shape.style.top = `${Math.random() * 100}%`;
  shape.style.animationDuration = `${Math.random() * 20 + 10}s`;
  shape.style.animationDelay = `${Math.random() * 5}s`;
  
  if (shape.classList.contains('circle')) {
    shape.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
  } else {
    shape.style.borderBottomColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
  }
  
  floatingShapes.appendChild(shape);
}

// ===== Interactive Demo =====
const demoSteps = {
  1: `<div class="demo-state">
        <h3>Data Collection</h3>
        <div class="data-flow">
          <div class="source">CRM</div>
          <div class="source">Database</div>
          <div class="processor">Kite Engine</div>
        </div>
      </div>`,
  2: `<div class="demo-state">
        <h3>Process Automation</h3>
        <div class="automation-flow">
          <div class="step">1. Input</div>
          <div class="step">2. Process</div>
          <div class="step">3. Output</div>
        </div>
      </div>`,
  3: `<div class="demo-state">
        <h3>AI Analysis</h3>
        <div class="ai-flow">
          <div class="ai-process">Analyzing Data</div>
          <div class="ai-output">Generating Insights</div>
        </div>
      </div>`
};



document.querySelectorAll('.step-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const step = item.getAttribute('data-step');
    document.getElementById('demoScreen').innerHTML = demoSteps[step];
    
    // Highlight active step
    document.querySelectorAll('.step-item').forEach(i => {
      i.style.background = 'rgba(76, 201, 240, 0.1)';
    });
    item.style.background = 'rgba(76, 201, 240, 0.3)';
  });
});

// Initialize with first step
document.getElementById('demoScreen').innerHTML = demoSteps[1];
document.querySelector('.step-item').style.background = 'rgba(76, 201, 240, 0.3)';

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
