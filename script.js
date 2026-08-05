const root = document.documentElement;
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const themeButton = document.getElementById('themeToggle');
const themeIcon = themeButton?.querySelector('.theme-icon');
const topButton = document.getElementById('scrollTop');

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

// 프로젝트 카테고리 필터링 기능
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('#projectList .timeline-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectItems.forEach(item => {
        const category = item.getAttribute('data-category') || '';
        if (filterValue === 'all' || category.includes(filterValue)) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });
});

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

window.addEventListener('scroll', () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
    setActive('contact');
  }
}, { passive: true });

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

      track.addEventListener('scrollend', correct);
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