// Project data
const projects = {
  'rag-chatbot': {
    title: 'AI RAG Chatbot',
    description: 'An intelligent knowledge base assistant that uses Retrieval-Augmented Generation to provide accurate, contextual responses based on company documentation and data sources.',
    technologies: ['OpenAI GPT-4', 'Vector Database', 'LangChain', 'Python', 'FastAPI', 'React'],
    results: ['Reduced support queries by 60%', 'Improved response accuracy by 85%', '24/7 availability for customer support', 'Seamless integration with existing knowledge base']
  },
  'whatsapp-bot': {
    title: 'AI WhatsApp Customer Service Bot',
    description: 'A fully automated WhatsApp customer service solution that handles inquiries, provides instant responses, and escalates complex issues to human agents when needed.',
    technologies: ['WhatsApp Business API', 'OpenAI API', 'Node.js', 'MongoDB', 'Webhook Integration', 'Natural Language Processing'],
    results: ['40% reduction in response time', 'Handles 80% of common inquiries automatically', 'Improved customer satisfaction scores', 'Reduced support team workload']
  },
  'instagram-analytics': {
    title: 'Instagram Analytics & Content Strategy',
    description: 'Comprehensive Instagram analytics platform with automated content scraping, market analysis, and AI-powered content recommendations based on niche-specific insights.',
    technologies: ['Python', 'Selenium', 'Instagram API', 'Data Analysis', 'Machine Learning', 'Content Optimization'],
    results: ['Increased engagement by 45%', 'Optimized posting schedule based on data', 'Market-driven content recommendations', 'Automated competitor analysis']
  },
  'restaurant-website': {
    title: 'Restaurant Website – Baobab Erlebnisbar',
    description: 'Modern, responsive restaurant website with elegant design, online reservation system, menu showcase, and seamless user experience. Features include opening hours, location details, and contact information.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Modern UI/UX', 'Online Booking Integration'],
    results: ['Improved online presence and brand visibility', 'Streamlined reservation process', 'Enhanced customer experience', 'Mobile-optimized design for all devices']
  }
};

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('project-modal');
  const modalOverlay = modal.querySelector('.modal-overlay');
  const modalClose = modal.querySelector('.modal-close');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  // Open modal
  portfolioItems.forEach(item => {
    item.addEventListener('click', function() {
      const projectId = this.getAttribute('data-project');
      const project = projects[projectId];
      
      if (project) {
        modal.querySelector('.project-title').textContent = project.title;
        modal.querySelector('.project-description').textContent = project.description;
        
        // Populate technologies
        const techList = modal.querySelector('.tech-list');
        techList.innerHTML = '';
        project.technologies.forEach(tech => {
          const li = document.createElement('li');
          li.textContent = tech;
          techList.appendChild(li);
        });
        
        // Populate results
        const resultsList = modal.querySelector('.results-list');
        resultsList.innerHTML = '';
        project.results.forEach(result => {
          const li = document.createElement('li');
          li.textContent = result;
          resultsList.appendChild(li);
        });
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close modal
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);

  // Close on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Mobile navigation
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('open');
  });

  // Update year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
});

// Lightweight parallax tilt effect on hover for elements marked with data-tilt
(function(){
  const elements = document.querySelectorAll('[data-tilt]');
  elements.forEach((el)=>{
    let rect;
    const onMove = (e)=>{
      rect = rect || el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `rotateX(${(-y*6).toFixed(2)}deg) rotateY(${(x*6).toFixed(2)}deg) translateY(-4px)`;
    };
    const reset = ()=>{ el.style.transform = 'translateY(-0px) rotateX(0) rotateY(0)'; rect = undefined; };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', reset);
  });
})();


