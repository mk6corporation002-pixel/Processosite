/* =========================================================
   BELLAVISTA · scripts
   ========================================================= */

const WHATSAPP_NUMBER = '56965065463'; // número de WhatsApp (somente dígitos, com código do país)

document.addEventListener('DOMContentLoaded', () => {
  markMissingImages();
  initHeader();
  initMobileNav();
  initLanguage();
  initGallery();
  initReveal();
  initBookingForm();
  initWhatsAppFloat();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* ---------- Header: fundo ao rolar + link ativo ---------- */
function initHeader() {
  const header = document.getElementById('header');
  const links = [...document.querySelectorAll('.nav__list a')];
  const sections = links.map(a => document.querySelector(a.getAttribute('href')));

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
    const y = window.scrollY + window.innerHeight * 0.35;
    sections.forEach((sec, i) => {
      if (!sec) return;
      links[i].classList.toggle('is-active', y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight);
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- Menu mobile ---------- */
function initMobileNav() {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  burger.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  nav.querySelectorAll('.nav__list a').forEach(a => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
}

/* ---------- Idiomas ES / EN / PT ---------- */
function initLanguage() {
  const buttons = document.querySelectorAll('.lang__btn');
  let saved = null;
  try { saved = localStorage.getItem('bv-lang'); } catch (e) { /* sem storage */ }

  buttons.forEach(btn => btn.addEventListener('click', () => {
    applyLanguage(btn.dataset.lang);
    try { localStorage.setItem('bv-lang', btn.dataset.lang); } catch (e) { /* sem storage */ }
  }));

  if (saved && saved !== 'es') applyLanguage(saved);
}

function applyLanguage(lang) {
  window.BV_I18N.apply(lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang__btn').forEach(b => b.classList.toggle('is-active', b.dataset.lang === lang));
  updateWhatsAppLink(lang);
}

/* ---------- Galeria + lightbox ---------- */
function initGallery() {
  const items = [...document.querySelectorAll('.g-item')];
  const box = document.getElementById('lightbox');
  const img = box.querySelector('.lightbox__img');
  const cap = box.querySelector('.lightbox__cap');
  let current = 0;

  const show = (i) => {
    current = (i + items.length) % items.length;
    const item = items[current];
    img.src = item.getAttribute('href');
    img.alt = item.querySelector('img').alt;
    cap.textContent = item.querySelector('.g-item__cap span').textContent;
  };
  const open = (i) => {
    show(i);
    box.classList.add('is-open');
    box.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    box.classList.remove('is-open');
    box.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  items.forEach((item, i) => item.addEventListener('click', e => { e.preventDefault(); open(i); }));
  document.getElementById('openTour').addEventListener('click', () => open(0));
  box.querySelector('.lightbox__close').addEventListener('click', close);
  box.querySelector('.lightbox__prev').addEventListener('click', () => show(current - 1));
  box.querySelector('.lightbox__next').addEventListener('click', () => show(current + 1));
  box.addEventListener('click', e => { if (e.target === box) close(); });

  document.addEventListener('keydown', e => {
    if (!box.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });

  // swipe no celular
  let startX = 0;
  box.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
  });
}

/* ---------- Animação ao rolar ---------- */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
}

/* ---------- Formulário → WhatsApp ---------- */
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  const msg = document.getElementById('formMsg');
  const checkin = form.elements.checkin;
  const checkout = form.elements.checkout;

  const today = new Date().toISOString().split('T')[0];
  checkin.min = today;
  checkout.min = today;
  checkin.addEventListener('change', () => {
    checkout.min = checkin.value || today;
    if (checkout.value && checkout.value <= checkin.value) checkout.value = '';
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const t = window.BV_I18N.t;
    let ok = true;

    form.querySelectorAll('[required]').forEach(field => {
      const valid = field.value.trim() !== '' && (field.type !== 'email' || /^\S+@\S+\.\S+$/.test(field.value));
      field.closest('.field').classList.toggle('has-error', !valid);
      if (!valid) ok = false;
    });

    if (!ok) {
      msg.textContent = t('form.error');
      msg.className = 'booking__msg is-error';
      return;
    }

    const d = Object.fromEntries(new FormData(form));
    const fmt = s => s.split('-').reverse().join('/');
    const lines = [
      t('wa.greeting'),
      '',
      `• ${t('form.name')}: ${d.nombre}`,
      `• ${t('form.email')}: ${d.email}`,
      `• Check-in: ${fmt(d.checkin)}`,
      `• Check-out: ${fmt(d.checkout)}`,
    ];
    if (d.mensaje.trim()) lines.push(`• ${t('form.stay')}: ${d.mensaje.trim()}`);

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
    msg.textContent = t('form.success');
    msg.className = 'booking__msg is-success';
  });
}

/* ---------- Botão flutuante do WhatsApp ---------- */
function initWhatsAppFloat() {
  const btn = document.getElementById('waFloat');
  const booking = document.getElementById('consulta');
  // fica laranja quando passa pela seção de consulta (como no original)
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => btn.classList.toggle('is-accent', entry.isIntersecting), { threshold: 0.3 }).observe(booking);
  }
  updateWhatsAppLink('es');
}

function updateWhatsAppLink(lang) {
  const btn = document.getElementById('waFloat');
  const text = window.BV_I18N.t('wa.quick', lang);
  btn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/* ---------- Imagens ainda não adicionadas ---------- */
function markMissingImages() {
  // Troca a imagem que falta por um pixel transparente: fica só o fundo neutro do CSS
  const BLANK = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
  document.querySelectorAll('img').forEach(img => {
    const mark = () => {
      if (img.src === BLANK) return;
      img.classList.add('is-missing');
      img.src = BLANK;
    };
    if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) mark();
    img.addEventListener('error', mark);
  });
}
