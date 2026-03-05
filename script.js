const tabButtons = document.querySelectorAll('.tab-button');
const tabSections = document.querySelectorAll('.tab-section');
const modalBackdrop = document.querySelector('[data-modal-backdrop]');
const modalCloseButton = document.querySelector('[data-modal-close]');

const modalTitle = document.querySelector('[data-modal-title]') || document.getElementById('modal-title');
const modalTimeline = document.querySelector('[data-modal-timeline]');
const modalRole = document.querySelector('[data-modal-role]');
const modalBody = document.querySelector('[data-modal-body]');
const modal = document.querySelector('.modal');

let lastFocusedElement = null;

// Simple project data – customize with your real content/images
const projects = {
  'faca-parte': {
    title: 'FAÇA PARTE',
    timeline: 'Mar 2022 – Jan 2025',
    role: 'Co‑founder and President',
    description:
      "After seeing my grandmother struggle to navigate the digital world, unable to perform simple tasks on her phone that my generation takes for granted, I decided to take action. Week after week, I found myself fixing her technology issues, but I wasn’t truly teaching her how to solve them independently. I realized I wasn’t addressing the root problem: confidence and digital literacy. That’s when the idea for Faça Parte was born: an organization dedicated to offering technology workshops for older adults, led by teenage volunteers.",
    images: [
      'imgs/evento.png',
      'imgs/fp.png',
      'imgs/cpm.png',
      'imgs/ls.png',
    ],
    sections: [
      { type: 'idea', heading: 'THE IDEA', body: "After seeing my grandmother struggle to navigate the digital world, unable to perform simple tasks on her phone that my generation takes for granted, I decided to take action. Week after week, I found myself fixing her technology issues, but I wasn't truly teaching her how to solve them independently. I realized I wasn't addressing the root problem: confidence and digital literacy. That's when the idea for Faça Parte was born: an organization dedicated to offering technology workshops for older adults, led by teenage volunteers."},
      { type: 'text-images', heading: 'The Early Stages', body: "I started small, inviting my grandparents and my friends' grandparents to weekend sessions at my house or at school. What began as a few informal gatherings quickly grew. Soon, grandparents of students I didn't even know were expressing interest. It became clear that this wasn't just my grandmother's challenge — it was a widespread generational gap. What started as a personal solution evolved into a growing community built on empowerment and meaningful inter-generational connection." ,images: ['imgs/evento.png', 'imgs/fp.png'] },
      { type: 'text-images', heading: 'Expansion & Growth', body: "We developed partnerships with external organizations and NGOs to broaden our reach, including Instituto Velho Amigo, a nonprofit dedicated to the well-being of older adults, and Clube Paineiras do Morumby, a country club in São Paulo where we ran workshops for members and the local community.", images: ['imgs/va.png', 'imgs/cpm.png'], galleryTall: true },
      { type: 'text-images', heading: 'Corporate Partnerships', body: "We partnered with companies like SAP for their 'Bring Your Parents to Work' day, hosting a dedicated Faça Parte technology workshop at their São Paulo office and reaching new audiences through corporate social responsibility initiatives.", images: ['imgs/corp.png', 'imgs/sap.png'] },
      { type: 'side-by-side', heading: 'Finalist, SXSW EDU Student Impact Challenge', body: "Selected to pitch at one of the biggest stages for technology and impact innovation in the world. We were the only non-American team selected, making the experience even more special.", image: 'imgs/sxsw.png', newsSnippet: { source: 'ESTADÃO', headline: "Brazil is on the podium: Brazilian students are among the finalists at the world's largest innovation event: SXSW EDU!", link: 'https://www.soseducacao.com.br/post/tem-brasil-no-p%C3%B3dio-estudantes-brasileiros-entre-os-finalistas-no-maior-evento-de-inova%C3%A7%C3%A3o-do-mundo', linkLabel: 'featured' } },
      { type: 'text-images', heading: 'Brazilian Internet Congress', body: "Invited to speak at the 'Technologies for Social Transformation' panel. It was a privilege to learn more about the initiatives of the other panelists, who are using technology to drive solutions for a better and more equitable Brazil.", images: ['imgs/mic.png', 'imgs/congresso.png'] },
    ],
  },
  gait: {
    title: 'GAIT',
    timeline: 'Nov 2025 – Present',
    role: 'Co‑founder · Product & GTM',
    description:
      'Gait is an early-stage health technology startup focused on transforming everyday movement into actionable health insights. Using computer vision and machine learning, Gait analyzes a person’s walking pattern through simple smartphone video to detect subtle deviations that may signal early neurological or mobility-related decline. By turning gait — a deeply personal and often overlooked biometric — into a scalable, accessible screening tool, we aim to make early detection more proactive, affordable, and effortless. Our vision is to shift healthcare from reactive intervention to continuous, passive monitoring, empowering individuals, caregivers, and clinicians with meaningful data before symptoms become severe.',
    images: ['assets/Screenshot_2026-02-22_at_8.21.31_PM-fbc16484-2d32-4d25-a019-c4dd1ecc964f.png'],
    sections: [
      { type: 'idea', heading: 'THE IDEA', body: "Gait was developed during a one-semester startup incubator at the University of Southern California, where our team won the Audience Choice Award at Demo Day. The idea emerged after discovering compelling research showing strong correlations between changes in gait and early neurocognitive decline. We were struck by a simple but powerful insight: the way we walk may reveal neurological changes years before traditional symptoms appear. This led us to explore how gait could become an accessible, early-detection signal rather than a metric confined to clinical labs.",images: ['imgs/demo.png',] },
      { type: 'text-images', heading: 'The Technology', body: "Gait uses computer vision and machine learning to analyze walking patterns through standard smartphone or camera video. By leveraging pose estimation and time-series modeling, the system tracks metrics such as stride length, variability, and balance, comparing them against an individual’s baseline over time. Instead of requiring wearables or specialized hardware, Gait is designed to be passive and hardware-light—turning everyday movement into structured, analyzable data." ,images: ['imgs/gait.png'] },
      { type: 'text-images', heading: 'Expansion & Growth', body: "We developed partnerships with external organizations and NGOs to broaden our reach, including Instituto Velho Amigo, a nonprofit dedicated to the well-being of older adults, and Clube Paineiras do Morumby, a country club in São Paulo where we ran workshops for members and the local community.", images: ['imgs/va.png', 'imgs/cpm.png'], galleryTall: true },
      { type: 'text-images', heading: 'The Impact', body: "Our long-term vision is to shift healthcare from reactive intervention to proactive monitoring. By detecting subtle deviations in gait earlier, Gait has the potential to provide families, caregivers, and clinicians with meaningful insights before severe symptoms emerge. We believe accessible movement intelligence can expand healthy years of life and fundamentally change how we approach aging and neurological health.", images: ['imgs/demo2.png'] },
    ],
  },
  rumo: {
    title: 'RUMO',
    timeline: 'Sep 2025 – Nov 2025',
    role: 'Co-founder · Product & GTM',
    description: 'As an international student from Brazil, I experienced firsthand how overwhelming and fragmented the U.S. college application process can be. Meet Rumo, an AI-powered platform that consolidates timelines, essays, and college research into one intuitive space.',
    images: ['imgs/rumo.png'],
    externalUrl: 'https://findrumo.com',
    sections: [
      { type: 'idea', heading: 'THE IDEA', body: "As an international student from Brazil, I experienced firsthand how overwhelming and fragmented the U.S. college application process can be. After navigating multiple tools and limited guidance, I realized that many students (especially those without access to private advisors) struggle to stay organized and highlight their strengths. Through hundreds of customer discovery calls with students and counselors, I learned exactly where the bottlenecks and pain points are. Meet Rumo, an AI-powered platform that consolidates timelines, essays, and college research into one intuitive space, helping students stay on track while giving counselors an easy way to provide guidance and feedback.", },
      { type: 'feature', heading: 'Personalized Onboarding Experience', body: 'Streamlined, adaptive onboarding flow. Intakes students\' interests, goals, and academic background.', image: 'imgs/rumo1.png' },
      { type: 'feature', heading: 'AI-Generated Application Roadmap', body: 'Leveraging AI to deconstruct complex application cycles into manageable milestones. Integrated reminders and progress checkpoints to keep students on track.', image: 'imgs/rumo2.png' },
      { type: 'feature', heading: 'Smart College Search Engine', body: 'Dynamic college and program discovery engine that helps students identify aligned academic pathways based on preferences and strengths.', image: 'imgs/rumo3.png' },
      { type: 'feature', heading: 'Essay Prompts', body: 'Pulls real-time essay prompts, word count and other application requirements through web scraping + Gemini API.', image: 'imgs/rumo4.png' },
    ],
  },
  brasa: {
    title: 'BRASA Webpage',
    timeline: '2025 – Present',
    role: 'Web Developer · UI/UX',
    description: 'Designed and coded BRASA USC\'s webpage using HTML/CSS/JavaScript, improving accessibility and centralizing communication for 100+ members.',
    externalUrl: 'https://brasausc.com',
    sections: [
      { type: 'idea', heading: 'OVERVIEW', body: 'Designed and coded BRASA USC\'s webpage using HTML/CSS/JavaScript, improving accessibility and centralizing communication for 100+ members.' },
    ],
  },
};

const creativeWork = [
  {
    title: 'OIL PAINTING',
    description: 'Black and white painting inspired by the Barra do Sahy 2024 landslides',
    media: 'imgs/boy.png',
  },
  {
    title: 'ROBOTIC TURTLE',
    description: 'Made a robotic turtle using 3D printer, lego pieces, servo motors and clay',
    media: 'imgs/turtle.mp4',
  },
  {
    title: 'ACRYLIC PAINTING',
    description: 'I named this painting "State of Mind"',
    media: 'imgs/paint.png',
  },
  {
    title: 'CHARCOAL',
    description: 'Self-portrait - upside down',
    media: 'imgs/me.png',
    tall: true,
  },
];

function isVideo(src) {
  return typeof src === 'string' && (src.toLowerCase().endsWith('.mp4') || src.toLowerCase().endsWith('.webm'));
}

function renderCreativeWork() {
  const grid = document.getElementById('creative-work-grid');
  if (!grid || !Array.isArray(creativeWork)) return;
  grid.innerHTML = creativeWork
    .map((item) => {
      let mediaHtml = '';
      const thumbClass = item.tall ? 'creative-thumb creative-thumb--tall' : 'creative-thumb';
      if (item.media) {
        if (isVideo(item.media)) {
          mediaHtml = `<div class="${thumbClass}"><video src="${escapeHtml(item.media)}" autoplay loop muted playsinline></video></div>`;
        } else {
          mediaHtml = `<div class="${thumbClass}"><img src="${escapeHtml(item.media)}" alt="" /></div>`;
        }
      } else {
        mediaHtml = `<div class="${thumbClass} creative-thumb--placeholder"></div>`;
      }
      return `<article class="creative-card">${mediaHtml}<h3 class="creative-card__title">${escapeHtml(item.title || '')}</h3><p class="creative-card__summary">${escapeHtml(item.description || '')}</p></article>`;
    })
    .join('');
}

function setActiveTab(tabId) {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === tabId;
    button.classList.toggle('active', isActive);
  });

  tabSections.forEach((section) => {
    const isActive = section.id === tabId;
    section.classList.toggle('tab-section--active', isActive);
  });
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const tabId = button.dataset.tab;
    setActiveTab(tabId);
  });
});

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function renderProjectBody(project, container) {
  if (!container) return;
  if (project.sections && project.sections.length > 0) {
    let html = project.externalUrl
      ? `<p class="modal-visit-link"><a href="${escapeHtml(project.externalUrl)}" target="_blank" rel="noopener">visit page</a> <span aria-hidden="true">↗</span></p>`
      : '';
    project.sections.forEach((sec, index) => {
      const altClass = index % 2 === 1 ? ' modal-project-section--alt' : '';
      html += `<div class="modal-project-section${altClass}">`;
      if (sec.type === 'idea') {
        html += `<h3 class="modal-section-heading">${escapeHtml(sec.heading)}</h3><p class="modal-section-p">${escapeHtml(sec.body)}</p>`;
        if (sec.images && sec.images.length) {
          const galleryClass = sec.images.length === 1 ? 'modal-gallery--single' : sec.images.length >= 5 ? 'modal-gallery--puzzle' : sec.images.length === 3 ? 'modal-gallery--puzzle-3' : 'modal-gallery--puzzle-2';
          html += `<div class="modal-gallery ${galleryClass}">`;
          sec.images.forEach((src) => { html += `<img src="${escapeHtml(src)}" alt="" />`; });
          html += '</div>';
        }
      } else if (sec.type === 'text') {
        html += `<h3 class="modal-section-heading">${escapeHtml(sec.heading)}</h3><p class="modal-section-p">${escapeHtml(sec.body)}</p>`;
      } else if (sec.type === 'images-first') {
        if (sec.images && sec.images.length) {
          const galleryClass = sec.images.length === 1 ? 'modal-gallery--single' : sec.images.length === 3 ? 'modal-gallery--puzzle-3' : 'modal-gallery--puzzle-2';
          html += `<div class="modal-gallery ${galleryClass}">`;
          sec.images.forEach((src) => { html += `<img src="${escapeHtml(src)}" alt="" />`; });
          html += '</div>';
        }
        html += `<h3 class="modal-section-heading">${escapeHtml(sec.heading)}</h3><p class="modal-section-p">${escapeHtml(sec.body)}</p>`;
      } else if (sec.type === 'side-by-side') {
        html += '<div class="modal-side-by-side">';
        if (sec.image) html += `<div class="modal-side-by-side__img"><img src="${escapeHtml(sec.image)}" alt="" /></div>`;
        html += '<div class="modal-side-by-side__content">';
        html += `<h3 class="modal-section-heading">${escapeHtml(sec.heading)}</h3><p class="modal-section-p">${escapeHtml(sec.body)}</p>`;
        if (sec.newsSnippet) {
          const n = sec.newsSnippet;
          html += `<div class="modal-news-snippet"><span class="modal-news-snippet__source">${escapeHtml(n.source || '')}</span><p class="modal-news-snippet__headline">${escapeHtml(n.headline || '')}</p>${n.snippet ? `<p class="modal-news-snippet__snippet">${escapeHtml(n.snippet)}</p>` : ''}<a href="${escapeHtml(n.link || '#')}" target="_blank" rel="noopener" class="modal-featured-link">${escapeHtml(n.linkLabel || 'featured')}</a></div>`;
        }
        html += '</div></div>';
      } else if (sec.type === 'text-images') {
        html += `<h3 class="modal-section-heading">${escapeHtml(sec.heading)}</h3><p class="modal-section-p">${escapeHtml(sec.body)}</p>`;
        if (sec.images && sec.images.length) {
          const galleryClass = sec.images.length === 1 ? 'modal-gallery--single' : sec.images.length === 3 ? 'modal-gallery--puzzle-3' : 'modal-gallery--puzzle-2';
          const tallClass = sec.galleryTall ? ' modal-gallery--tall' : '';
          html += `<div class="modal-gallery ${galleryClass}${tallClass}">`;
          sec.images.forEach((src) => { html += `<img src="${escapeHtml(src)}" alt="" />`; });
          html += '</div>';
        }
      } else if (sec.type === 'feature') {
        if (sec.image) html += `<div class="modal-feature-img"><img src="${escapeHtml(sec.image)}" alt="" /></div>`;
        html += `<h3 class="modal-section-heading">${escapeHtml(sec.heading)}</h3><p class="modal-section-p">${escapeHtml(sec.body)}</p>`;
      }
      html += '</div>';
    });
    container.innerHTML = html;
  } else {
    let html = project.externalUrl
      ? `<p class="modal-visit-link"><a href="${escapeHtml(project.externalUrl)}" target="_blank" rel="noopener">visit page</a> <span aria-hidden="true">↗</span></p>`
      : '';
    html += '<h3 class="modal-section-heading">THE IDEA</h3>';
    html += `<p class="modal-section-p">${escapeHtml(project.description || '')}</p>`;
    if (project.images && project.images.length > 0) {
      html += '<div class="modal-gallery modal-gallery--grid">';
      project.images.forEach((src) => { html += `<img src="${escapeHtml(src)}" alt="" />`; });
      html += '</div>';
    }
    container.innerHTML = html;
  }
}

function openProjectModal(projectId) {
  const project = projects[projectId];
  if (!project) return;

  lastFocusedElement = document.activeElement;
  if (modal) modal.classList.remove('modal--creative');

  if (modalTitle) modalTitle.textContent = project.title || '';
  if (modalTimeline) modalTimeline.textContent = project.timeline || '';
  if (modalRole) modalRole.textContent = project.role || '';

  if (modalBody) renderProjectBody(project, modalBody);

  if (modalBackdrop) {
    modalBackdrop.hidden = false;
    document.body.style.overflow = 'hidden';
  }
}

function openCreativeModal(creativeId) {
  const item = creativeWork[creativeId];
  if (!item) return;

  lastFocusedElement = document.activeElement;
  if (modal) modal.classList.add('modal--creative');

  if (modalTitle) modalTitle.textContent = item.title;
  if (modalTimeline) modalTimeline.textContent = '';
  if (modalRole) modalRole.textContent = '';

  if (modalBody) {
    let html = `<p class="modal-section-p">${escapeHtml(item.description || '')}</p>`;
    if (item.images && item.images.length > 0) {
      html += '<div class="modal-gallery modal-gallery--grid">';
      item.images.forEach((src) => { html += `<img src="${escapeHtml(src)}" alt="" />`; });
      html += '</div>';
    }
    modalBody.innerHTML = html;
  }

  if (modalBackdrop) {
    modalBackdrop.hidden = false;
    document.body.style.overflow = 'hidden';
  }
}

function closeProjectModal() {
  if (modalBackdrop) modalBackdrop.hidden = true;
  document.body.style.overflow = '';
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}

document.querySelectorAll('.project-card').forEach((card) => {
  const projectId = card.dataset.projectId;
  card.addEventListener('click', () => openProjectModal(projectId));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProjectModal(projectId);
    }
  });
});

renderCreativeWork();

if (modalCloseButton) modalCloseButton.addEventListener('click', closeProjectModal);

if (modalBackdrop) {
  modalBackdrop.addEventListener('click', (event) => {
    if (event.target === modalBackdrop) closeProjectModal();
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modalBackdrop && !modalBackdrop.hidden) {
    closeProjectModal();
  }
});
