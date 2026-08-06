const root = document.documentElement;
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const themeButton = document.getElementById('themeToggle');
const themeIcon = themeButton?.querySelector('.theme-icon');
const topButton = document.getElementById('scrollTop');

// Supabase 글로벌 객체 확인 및 안전한 초기화
const SUPABASE_URL = 'https://kzsjeisbzznqpmeagzii.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6c2plaXNienpucXBtZWFnemlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU4OTcyNzIsImV4cCI6MjEwMTQ3MzI3Mn0.Igy1BAnZ1zuWre2vFSVVhSSuZe0-RUY_YtQQKgO1X8Y';

let _supabase = null;
if (typeof supabase !== 'undefined') {
  _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
  console.warn('Supabase 라이브러리가 로드되지 않았습니다.');
}

// ==========================================
// 1. 다국어 지원 (i18n) & 플로팅 언어 전환
// ==========================================
const i18nData = {
  ko: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_practice: "Practice",
    nav_ongoing: "Ongoing",
    nav_archive: "Archive",
    nav_contact: "Contact",
    hero_eyebrow: "Personal Archive",
    hero_slogan: "보고, 기록하고, 연결하는 문화예술 아카이브",
    hero_lead: "전시와 영화제의 현장에서 사람과 콘텐츠가 만나는 순간을 기록합니다. 관람객이 더 쉽게 이해하고 더 오래 기억할 수 있도록 홍보, 운영, 아카이브의 접점을 설계하는 일에 관심이 있습니다.",
    hero_btn_projects: "View Projects",
    hero_btn_portfolio: "Download Portfolio",
    hero_scroll: "Scroll to explore",
    about_title: "영향력 있는 삶을 기획하고 도전하는 기록가",
    about_intro_p: "문화예술 현장의 작은 맥락을 놓치지 않으려 합니다. 관람객의 질문과 동선, 팀의 운영 방식, 콘텐츠가 남기는 인상을 관찰하고 더 나은 경험으로 연결합니다.",
    about_sticker_desc: "오늘의 작업 리듬을 가볍게 기록합니다.",
    skill_figma: "카드뉴스, 웹 상세페이지 디자인",
    skill_writing: "보도자료 작성 및 문서 사무",
    skill_photo: "DSLR, 필름카메라 기반 기록사진",
    edu_1_title: "동국대학교 WISE캠퍼스",
    edu_1_desc: "국어국문학과 / 문화콘텐츠기획전공",
    edu_2_title: "부산외국어고등학교",
    edu_2_desc: "영중국어과",
    exp_1: "2023 무대크루로 일하기 (부산경남편)",
    exp_2: "부산공연장전문인력양성사업 (공연기획)",
    exp_3: "인문실험공모전 선정 및 활동",
    exp_4: "연극잡지 <파이플> 기획자 및 에디터",
    projects_title: "예술과 행정을 디자인하는 올라운더",
    search_placeholder: "프로젝트명, 역할, 키워드 검색...",
    meta_role: "Role",
    meta_scale: "Scale",
    meta_result: "Result",
    p1_role: "공연·전시 홍보 콘텐츠",
    p1_scale: "지역 문화공간 운영",
    p1_result: "공간 인지도와 방문 정보 강화",
    p1_desc: "공연과 전시의 정보를 관람객 언어로 정리하고, 현장 분위기가 전달되는 홍보 콘텐츠를 기획했습니다.",
    p2_role: "현장 운영 · 관람객 안내",
    p2_scale: "국제 현대미술 행사",
    p2_result: "관람 동선 안내 안정화",
    p2_desc: "여러 전시장과 프로그램을 오가는 관람객이 필요한 정보를 빠르게 찾도록 현장 안내와 운영 흐름을 지원했습니다.",
    p3_role: "가이드맵 · 웹사이트 · 홍보물",
    p3_scale: "35만 명 규모",
    p3_result: "정보 접근성 개선",
    p3_desc: "흩어진 행사 정보를 가이드맵과 디지털 콘텐츠로 연결해, 관람객이 스스로 동선을 계획할 수 있도록 도왔습니다.",
    p4_role: "관객 응대 · 현장 운영",
    p4_scale: "국제 영화제",
    p4_result: "현장 안내 경험 개선",
    p4_desc: "관객의 질문이 가장 많이 모이는 접점에서 상영과 프로그램 정보를 정확히 전달하고, 현장 흐름을 안정적으로 지원했습니다.",
    no_results: "검색 결과가 없습니다.",
    practice_title: "직무 밖에서도 이어지는 창작의 태도",
    prac1_p: "시간과 공간의 결을 사진으로 기록합니다.",
    prac1_conn: "전시 현장의 시선과 기록 감각으로 연결됩니다.",
    prac2_p: "아이디어를 읽기 쉬운 콘텐츠로 완성합니다.",
    prac2_conn: "가이드맵과 홍보물 기획 감각으로 연결됩니다.",
    prac3_p: "생각과 경험을 짧은 글과 에세이로 남깁니다.",
    prac3_conn: "관람객에게 정보를 전달하는 언어 감각으로 연결됩니다.",
    ongoing_title: "지금도 차분히 쌓아가는 과정",
    archive_title: "필요한 자료를 한곳에 정리했습니다.",
    arc_1_p: "주요 프로젝트와 역할을 한눈에 보는 포트폴리오.",
    arc_2_p: "경력, 역량, 협업 경험을 담은 이력 자료.",
    arc_3_p: "관람객 정보 경험을 설계한 가이드맵 아카이브.",
    arc_4_p: "웹사이트와 홍보 콘텐츠의 기록을 모았습니다.",
    contact_title: "함께 더 오래 기억될 경험을 만들어요.",
    contact_p: "문화예술 프로젝트, 전시·영화제 운영, 홍보 콘텐츠 제작, 아카이브 및 기록 기반의 협업을 환영합니다.",
    contact_btn: "Send Email"
  },
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_practice: "Practice",
    nav_ongoing: "Ongoing",
    nav_archive: "Archive",
    nav_contact: "Contact",
    hero_eyebrow: "Personal Archive",
    hero_slogan: "A cultural archive observing, recording, and connecting",
    hero_lead: "I archive moments where people and cultural content meet at exhibitions and film festivals. I design touchpoints for PR, operation, and archiving so visitors can understand easily and remember longer.",
    hero_btn_projects: "View Projects",
    hero_btn_portfolio: "Download Portfolio",
    hero_scroll: "Scroll to explore",
    about_title: "A recorder planning and challenging an impactful life",
    about_intro_p: "I try not to miss small contexts in culture and arts fields. I observe visitors' paths, team operations, and the impression content leaves, connecting them into better experiences.",
    about_sticker_desc: "Lightly recording today's working rhythm.",
    skill_figma: "Card news & web detail page design",
    skill_writing: "Press release writing & document administration",
    skill_photo: "DSLR & film camera photography",
    edu_1_title: "Dongguk University WISE Campus",
    edu_1_desc: "Korean Language & Literature / Culture Content Planning",
    edu_2_title: "Busan Foreign Language High School",
    edu_2_desc: "English & Chinese Department",
    exp_1: "2023 Working as Stage Crew (Busan/Gyeongnam)",
    exp_2: "Busan Venue Specialist Program (Performance Planning)",
    exp_3: "Humanities Experiment Contest Selected & Activity",
    exp_4: "Theater Magazine <PIPLE> Planner & Editor",
    projects_title: "An all-rounder designing arts and administration",
    search_placeholder: "Search project, role, keywords...",
    meta_role: "Role",
    meta_scale: "Scale",
    meta_result: "Result",
    p1_role: "Performance/Exhibition PR Content",
    p1_scale: "Local Cultural Venue Operation",
    p1_result: "Enhanced Venue Awareness & Information",
    p1_desc: "Organized performance & exhibition info into visitor-friendly language and created PR contents delivering field atmosphere.",
    p2_role: "On-site Operation · Audience Guidance",
    p2_scale: "International Contemporary Art Event",
    p2_result: "Stabilized Visitor Wayfinding & Guidance",
    p2_desc: "Supported field guidance and operations so visitors moving across venues and programs could quickly find needed information.",
    p3_role: "Guide Map · Website · PR Materials",
    p3_scale: "350k Visitors Scale",
    p3_result: "Improved Information Accessibility",
    p3_desc: "Connected scattered event info into guide maps and digital contents, helping visitors plan their own routes.",
    p4_role: "Audience Service · Field Operation",
    p4_scale: "International Film Festival",
    p4_result: "Improved Field Guidance Experience",
    p4_desc: "Accurately delivered screening and program info where visitor questions concentrated, supporting smooth on-site operations.",
    no_results: "No search results found.",
    practice_title: "Creative attitude extending beyond job roles",
    prac1_p: "Recording textures of time and space through photography.",
    prac1_conn: "Connects to observational and archival senses in exhibition fields.",
    prac2_p: "Transforming ideas into readable content.",
    prac2_conn: "Connects to planning skills for guide maps and PR materials.",
    prac3_p: "Leaving thoughts and experiences in short essays.",
    prac3_conn: "Connects to language sensitivity for delivering information.",
    ongoing_title: "A steady process in progress",
    archive_title: "Necessary materials organized in one place.",
    arc_1_p: "Portfolio summarizing key projects and roles.",
    arc_2_p: "Resume containing experience, skills, and collaboration.",
    arc_3_p: "Guide map archive designing visitor info experience.",
    arc_4_p: "Collected records of website and PR content.",
    contact_title: "Let’s create experiences remembered longer.",
    contact_p: "Welcome collaboration for cultural projects, exhibition/film festival operations, PR content, and archives.",
    contact_btn: "Send Email"
  }
};

let currentLang = localStorage.getItem('lang') || 'ko';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  // 플로팅 버튼 텍스트 변경
  const langBtnText = document.getElementById('langBtnText');
  if (langBtnText) {
    langBtnText.textContent = lang === 'ko' ? 'EN' : 'KO';
  }

  const dict = i18nData[lang] || i18nData.ko;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });
}

const langToggleBtn = document.getElementById('langToggle');
langToggleBtn?.addEventListener('click', () => {
  const nextLang = currentLang === 'ko' ? 'en' : 'ko';
  applyLanguage(nextLang);
});

// 모바일 햄버거 메뉴 토글
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

// 활성 메뉴 표시 업데이트 함수
const navLinks = [...document.querySelectorAll('.nav-links a')];
const sections = navLinks.map(link => document.querySelector(link.hash)).filter(Boolean);

const setActive = id => {
  navLinks.forEach(link => {
    const isTarget = link.hash === `#${id}`;
    link.classList.toggle('active', isTarget);
  });
};

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const targetId = link.hash.replace('#', '');
    setActive(targetId);
    nav?.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

// 다크모드 설정 및 해/달 아이콘 변경
const updateThemeIcon = (theme) => {
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
  }
};

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  root.dataset.theme = savedTheme;
  updateThemeIcon(savedTheme);
} else {
  updateThemeIcon('light');
}

themeButton?.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
  updateThemeIcon(nextTheme);
});

topButton?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setActive('hero');
});

// ==========================================
// 2. 모바일 전용 FAB 접기/펼치기 토글 핸들러
// ==========================================
const fabMainToggle = document.getElementById('fabMainToggle');
const floatingActions = document.getElementById('floatingActions');

fabMainToggle?.addEventListener('click', () => {
  floatingActions?.classList.toggle('active');
});

// 개별 플로팅 버튼 클릭 시 (탑 이동 제외) 모바일 메뉴 자동 닫기
document.querySelectorAll('.fab-menu-group button:not(#scrollTop)').forEach(btn => {
  btn.addEventListener('click', () => {
    if (window.innerWidth <= 600) {
      floatingActions?.classList.remove('active');
    }
  });
});

// 외부 영역 클릭 시 모바일 플로팅 메뉴 닫기
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 600 && floatingActions?.classList.contains('active')) {
    if (!floatingActions.contains(e.target)) {
      floatingActions.classList.remove('active');
    }
  }
});

// Skill Bar 스크롤 감지 및 차오르는 모션 애니메이션
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);

  const skillSection = document.querySelector('.about-skill-section');
  const skillFills = document.querySelectorAll('.skill-bar .fill');

  if (skillSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          skillFills.forEach(fill => {
            const progress = fill.getAttribute('data-progress');
            fill.style.width = progress;
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(skillSection);
  }

  // 프로젝트 카테고리 필터 + 실시간 검색 연동
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('#projectList .timeline-item');
  const searchInput = document.getElementById('projectSearch');
  const searchClear = document.getElementById('searchClear');
  const noResults = document.getElementById('noSearchResults');

  let currentCategory = 'all';

  function filterProjects() {
    const query = searchInput?.value.trim().toLowerCase() || '';
    let visibleCount = 0;

    projectItems.forEach(item => {
      const category = item.getAttribute('data-category') || '';
      const text = item.textContent.toLowerCase();

      const matchesCategory = (currentCategory === 'all' || category.includes(currentCategory));
      const matchesSearch = query === '' || text.includes(query);

      if (matchesCategory && matchesSearch) {
        item.classList.remove('hide');
        visibleCount++;
      } else {
        item.classList.add('hide');
      }
    });

    if (noResults) {
      noResults.classList.toggle('hidden', visibleCount > 0);
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter') || 'all';
      filterProjects();
    });
  });

  searchInput?.addEventListener('input', () => {
    searchClear?.classList.toggle('hidden', !searchInput.value);
    filterProjects();
  });

  searchClear?.addEventListener('click', () => {
    if (searchInput) {
      searchInput.value = '';
      searchClear.classList.add('hidden');
      searchInput.focus();
      filterProjects();
    }
  });

  // Chatbot Initialization
  initChatbot();
});

// Chatbot 기능 핸들러
function initChatbot() {
  const toggleBtn = document.getElementById('chat-toggle-btn');
  const closeBtn = document.getElementById('chat-close-btn');
  const chatWindow = document.getElementById('chat-window');
  const chatBody = document.getElementById('chat-body');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatContact = document.getElementById('chat-contact');
  const faqContainer = document.getElementById('faq-buttons');

  let cachedFaqs = [];

  toggleBtn?.addEventListener('click', () => chatWindow?.classList.toggle('hidden'));
  closeBtn?.addEventListener('click', () => chatWindow?.classList.add('hidden'));

  function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', `${sender}-message`);
    msgDiv.textContent = text;
    chatBody?.appendChild(msgDiv);
    if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
  }

  function renderFaqButtons(targetContainer, faqs) {
    targetContainer.innerHTML = '';
    faqs.forEach(faq => {
      const btn = document.createElement('button');
      btn.classList.add('faq-btn');
      btn.type = 'button';
      btn.textContent = faq.question;
      btn.addEventListener('click', () => handleFaqClick(faq));
      targetContainer.appendChild(btn);
    });
  }

  function handleFaqClick(faq) {
    appendMessage(faq.question, 'user');
    setTimeout(() => {
      appendMessage(faq.answer, 'bot');
      setTimeout(() => {
        appendMessage("추가로 궁금하신 사항이 있으신가요?", "bot");
        if (cachedFaqs.length > 0) {
          const newFaqBox = document.createElement('div');
          newFaqBox.classList.add('faq-buttons');
          renderFaqButtons(newFaqBox, cachedFaqs);
          chatBody?.appendChild(newFaqBox);
          if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
        }
      }, 400);
    }, 300);
  }

  async function loadFaqs() {
    if (!_supabase) return;
    try {
      const { data: faqs, error } = await _supabase
        .from('faqs')
        .select('question, answer')
        .order('display_order', { ascending: true });

      if (error) throw error;
      cachedFaqs = faqs || [];
      if (faqContainer) renderFaqButtons(faqContainer, cachedFaqs);
    } catch (err) {
      console.error('FAQ 로드 에러:', err.message);
    }
  }

  async function handleUserSubmit(e) {
    e.preventDefault();
    const userMsg = chatInput?.value.trim();
    const contactMsg = chatContact?.value.trim() || '미입력';

    if (!userMsg) return;

    appendMessage(userMsg, 'user');
    if (chatInput) chatInput.value = '';

    if (!_supabase) {
      appendMessage("현재 데이터베이스에 연결할 수 없습니다.", "bot");
      return;
    }

    try {
      const { error } = await _supabase
        .from('messages')
        .insert([{ user_message: userMsg, contact_info: contactMsg }]);

      if (error) throw error;

      setTimeout(() => {
        appendMessage("메시지가 정상적으로 전달되었습니다! 확인 후 답변드리겠습니다.", "bot");
        setTimeout(() => {
          appendMessage("추가로 궁금하신 사항이 있으신가요?", "bot");
          if (cachedFaqs.length > 0) {
            const newFaqBox = document.createElement('div');
            newFaqBox.classList.add('faq-buttons');
            renderFaqButtons(newFaqBox, cachedFaqs);
            chatBody?.appendChild(newFaqBox);
            if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
          }
        }, 400);
      }, 500);

    } catch (err) {
      console.error('메시지 전송 에러:', err.message);
      appendMessage("죄송합니다. 메시지 전송 중 오류가 발생했습니다.", "bot");
    }
  }

  chatForm?.addEventListener('submit', handleUserSubmit);
  loadFaqs();
}

// IntersectionObserver를 이용한 스크롤 감지
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  }, { 
    rootMargin: '-20% 0px -40% 0px',
    threshold: 0.1 
  });

  sections.forEach(section => observer.observe(section));
}

// ==========================================
// 3. 플로팅 바 푸터 경계 감지 및 멈춤 계산
// ==========================================
function updateFloatingPosition() {
  const floatingActions = document.getElementById('floatingActions');
  const chatContainer = document.getElementById('chatContainer');
  const footer = document.getElementById('footerTicker');

  if (!floatingActions || !footer) return;

  const footerRect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const defaultBottom = window.innerWidth <= 600 ? 16 : 24;

  if (footerRect.top < windowHeight) {
    const overlap = windowHeight - footerRect.top;
    const newBottom = overlap + defaultBottom;
    
    floatingActions.style.bottom = `${newBottom}px`;
    if (chatContainer) chatContainer.style.bottom = `${newBottom}px`;
  } else {
    floatingActions.style.bottom = `${defaultBottom}px`;
    if (chatContainer) chatContainer.style.bottom = `${defaultBottom}px`;
  }
}

window.addEventListener('scroll', () => {
  updateFloatingPosition();

  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
    setActive('contact');
  }
}, { passive: true });

window.addEventListener('resize', () => {
  updateFloatingPosition();
  if (window.innerWidth > 600) {
    floatingActions?.classList.remove('active');
  }
});

document.addEventListener('DOMContentLoaded', updateFloatingPosition);

// Today's Sticker
const stickers = ['observing & organizing', 'field notes first', 'making room for context', 'archive in progress'];
const stickerButton = document.getElementById('stickerButton');
const stickerDisplay = document.getElementById('stickerDisplay');
stickerButton?.addEventListener('click', () => {
  const next = stickers[(stickers.indexOf(stickerButton.textContent) + 1) % stickers.length];
  stickerButton.textContent = next;
  if (stickerDisplay) stickerDisplay.textContent = next;
});

// 갤러리 슬라이드 컨트롤
document.querySelectorAll('.gallery-shell').forEach(shell => {
  const track = shell.querySelector('.gallery-track');
  if (!track) return;

  const isPractice = shell.classList.contains('practice-gallery');

  if (isPractice) {
    const movePractice = direction => {
      const slideWidth = track.clientWidth;
      track.scrollBy({ left: direction * slideWidth, behavior: 'smooth' });
    };
    shell.querySelector('.prev')?.addEventListener('click', () => movePractice(-1));
    shell.querySelector('.next')?.addEventListener('click', () => movePractice(1));

  } else {
    const real = [...track.querySelectorAll('.gallery-image')];
    const visible = 3;

    if (real.length > visible) {
      const clone = slide => {
        const copy = slide.cloneNode(true);
        copy.dataset.clone = 'true';
        copy.tabIndex = -1;
        return copy;
      };

      track.prepend(...real.slice(-visible).map(clone));
      track.append(...real.slice(0, visible).map(clone));

      const first = real[0], last = real.at(-1);
      let timer, correcting = false;

      const jump = left => {
        correcting = true;
        track.scrollTo({ left, behavior: 'auto' });
        requestAnimationFrame(() => correcting = false);
      };

      requestAnimationFrame(() => jump(first.offsetLeft));

      const correct = () => {
        if (correcting) return;
        const start = first.offsetLeft, end = last.offsetLeft + last.offsetWidth;
        if (track.scrollLeft <= start - 4) jump(end - track.clientWidth);
        else if (track.scrollLeft >= end - 4) jump(start);
      };

      track.addEventListener('scroll', () => {
        clearTimeout(timer);
        timer = setTimeout(correct, 90);
      }, { passive: true });

      if ('onscrollend' in window) {
        track.addEventListener('scrollend', correct);
      }
    }

    const moveProjects = direction => {
      const slide = track.querySelector('.gallery-image');
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      track.scrollBy({ left: direction * (slide.offsetWidth + gap), behavior: 'smooth' });
    };

    shell.querySelector('.prev')?.addEventListener('click', () => moveProjects(-1));
    shell.querySelector('.next')?.addEventListener('click', () => moveProjects(1));
  }
});

// 라이트박스 모달
const modal = document.getElementById('lightboxModal');
const modalImage = document.getElementById('lightboxImage');
const closeModal = () => {
  modal?.classList.remove('is-open');
  modal?.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

document.addEventListener('click', event => {
  const galleryButton = event.target.closest('.gallery-image');
  if (galleryButton) {
    const image = galleryButton.querySelector('img');
    if (image && modal && modalImage) {
      modalImage.src = image.currentSrc || image.src;
      modalImage.alt = image.alt;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    return;
  }
  if (event.target === modal?.querySelector('.lightbox-backdrop') || event.target.id === 'lightboxClose') closeModal();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
});