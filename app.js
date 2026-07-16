'use strict';

const CONFIG = {
  SUBJECT: 'Новая заявка с сайта стоматологии'
};

const ic = {
  tooth: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 2c-2.5 0-3.5 1.2-5.2 1.2C4.8 3.2 3 4.6 3 7.5c0 3 1 5.4 1.8 8.3.7 2.6 1.2 4.7 2.4 4.7 1.3 0 1.5-1.8 2-3.9.4-1.8.9-3.1 1.8-3.1s1.4 1.3 1.8 3.1c.5 2.1.7 3.9 2 3.9 1.2 0 1.7-2.1 2.4-4.7C21 12.9 22 10.5 22 7.5c0-2.9-1.8-4.3-3.8-4.3C16.5 3.2 15.5 2 12 2Z" stroke="currentColor" stroke-width="1.6"/></svg>',
  implant: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3v6m0 0-2 3h4l-2 3m0 0-1.5 6M12 15l1.5 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 20s-7-4.5-7-9.5A3.5 3.5 0 0 1 12 8a3.5 3.5 0 0 1 7 2.5C19 15.5 12 20 12 20Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M16 12h2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'
};

const services = [
  { title: 'Хирургия', items: [
    { name: 'Удаление зуба', price: 'от 2 000 руб' },
    { name: 'Удаление зуба второй степени сложности', price: 'от 4 500 руб' },
    { name: 'Сложное удаление', price: 'от 6 000 руб' },
    { name: 'Имплантация одного зуба', price: '45 000 руб' },
    { name: 'Имплантация четырех зубов', price: '200 000 руб' },
    { name: 'Наращивание костной ткани', price: '45 000 руб' },
    { name: 'Наращивание десны', price: '25 000 руб' }
  ]},
  { title: 'Терапия', items: [
    { name: 'Лечение одного канала', price: '4 000 руб' },
    { name: 'Лечение двух каналов', price: '8 000 руб' },
    { name: 'Лечение трех каналов', price: '12 000 руб' },
    { name: 'Лечение четырех каналов', price: '16 000 руб' },
    { name: 'Постановка пломбы', price: '4 000 руб' },
    { name: 'Художественная реставрация зуба', price: '8 000 руб' },
    { name: 'Комплексное лечение десен', price: '10 000 руб (курс из 10 посещений)' },
    { name: 'Профессиональная чистка зубов', price: '5 000 руб' }
  ]},
  { title: 'Ортопедия', items: [
    { name: 'Металлокерамическая коронка', price: '10 000 руб' },
    { name: 'Коронка из диоксида циркония', price: '20 000 руб' },
    { name: 'Керамическая коронка (E-max)', price: '20 000 руб' },
    { name: 'Нейлоновый съемный протез (Бюгельный)', price: '40 000 руб' },
    { name: 'Акриловый съемный протез (Бюгельный)', price: '35 000 руб' },
    { name: 'Протезирование одной челюсти (постоянное)', price: 'от 100 000 руб' },
    { name: 'Протезирование новой челюсти (цирконий, постоянное)', price: '200 000 руб' }
  ]}
];

const advantages = [
  { icon: ic.shield, title: 'Стерильность 100%', text: 'Одноразовые инструменты и стерилизация европейского класса B.' },
  { icon: ic.heart, title: 'Лечение без боли', text: 'Современная анестезия и седация для комфорта на каждом этапе.' },
  { icon: ic.clock, title: 'Без ожидания', text: 'Приём строго по записи — вы не ждёте в очереди.' },
  { icon: ic.wallet, title: 'Честные цены', text: 'Фиксируем стоимость в договоре. Прозрачно и понятно.' }
];

const doctors = [
  { emoji: '👨‍⚕️', name: 'Тагиров Сейяд Сафаралиевич', role: 'Главный врач · Терапевт · Ортопед' },
  { emoji: '👨‍⚕️', name: 'Тагиров Руслан Сафаралиевич', role: 'Хирург-имплантолог' },
  { emoji: '👩‍⚕️', name: 'Пашаева Эльвира Нусратовна', role: 'Хирург-имплантолог · Челюстно-лицевой хирург' }
];

const reviews = [
  { text: 'Впервые лечила зубы без страха. Врач всё объяснял на каждом шаге, совсем не было больно. Клиника чистая и уютная!', name: 'Екатерина П.', meta: 'Имплантация · 2 месяца назад', avatar: '🙂' },
  { text: 'Поставил импланты — результат превзошёл ожидания. Приживаемость идеальная, цена честная, рассрочку оформили за 10 минут.', name: 'Алексей Т.', meta: 'Имплантация · 1 месяц назад', avatar: '😄' },
  { text: 'Вожу сюда обоих детей. Врач находит подход даже к самым капризным. Дети сами просятся на приём — это чудо!', name: 'Ольга М.', meta: 'Детская стоматология · 3 недели назад', avatar: '😊' },
  { text: 'Отбеливание сделали за один визит, зубы посветлели на несколько тонов. Никакой чувствительности после процедуры.', name: 'Виктория С.', meta: 'Отбеливание · 2 недели назад', avatar: '😁' }
];

const statsData = [
  { num: 1000, suffix: '+', label: 'довольных пациентов' },
  { num: 4.9, suffix: '', label: 'рейтинг на картах' },
  { num: 100, suffix: '%', label: 'гарантия качества' }
];

const pricelist = [
  { icon: '🔪', title: 'Хирургия', items: [
    { name: 'Удаление зуба', price: 'от 2 000 руб' },
    { name: 'Удаление зуба второй степени сложности', price: 'от 4 500 руб' },
    { name: 'Сложное удаление', price: 'от 6 000 руб' },
    { name: 'Имплантация одного зуба', price: '45 000 руб' },
    { name: 'Имплантация четырех зубов', price: '200 000 руб' },
    { name: 'Установка формирователя десны', price: '5 000 руб' },
    { name: 'Наращивание костной ткани', price: '45 000 руб' },
    { name: 'Наращивание десны', price: '25 000 руб' }
  ]},
  { icon: '🦷', title: 'Терапия', items: [
    { name: 'Лечение одного канала', price: '4 000 руб' },
    { name: 'Лечение двух каналов', price: '8 000 руб' },
    { name: 'Лечение трех каналов', price: '12 000 руб' },
    { name: 'Лечение четырех каналов', price: '16 000 руб' },
    { name: 'Постановка пломбы', price: '4 000 руб' },
    { name: 'Художественная реставрация зуба', price: '8 000 руб' },
    { name: 'Комплексное лечение десен', price: '10 000 руб (курс из 10 посещений)' },
    { name: 'Профессиональная чистка зубов', price: '5 000 руб' }
  ]},
  { icon: '👑', title: 'Ортопедия', items: [
    { name: 'Металлокерамическая коронка', price: '10 000 руб' },
    { name: 'Коронка из диоксида циркония', price: '20 000 руб' },
    { name: 'Керамическая коронка (E-max)', price: '20 000 руб' },
    { name: 'Нейлоновый съемный протез (Бюгельный)', price: '40 000 руб' },
    { name: 'Акриловый съемный протез (Бюгельный)', price: '35 000 руб' },
    { name: 'Протезирование одной челюсти (постоянное)', price: 'от 100 000 руб' },
    { name: 'Протезирование новой челюсти (цирконий, постоянное)', price: '200 000 руб' }
  ]}
];

const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];

// ===== TOAST =====
function toast(msg, type = 'info') {
  const c = $('#toastContainer');
  if (!c) return;
  const el = document.createElement('div');
  el.className = `toast toast--${type}`;
  el.textContent = msg;
  c.appendChild(el);
  setTimeout(() => { el.remove(); }, 3500);
}

// ===== COOKIE CONSENT =====
function acceptCookies() {
  localStorage.setItem('cookies_accepted', '1');
  $('#cookieBanner')?.classList.remove('is-visible');
}
function showPrivacy() {
  document.getElementById('privacyOverlay')?.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}
function initCookieBanner() {
  if (!localStorage.getItem('cookies_accepted')) {
    $('#cookieBanner')?.classList.add('is-visible');
  }
  const privacyOverlay = $('#privacyOverlay');
  const privacyClose = $('#privacyClose');
  if (privacyClose) privacyClose.addEventListener('click', () => { privacyOverlay?.classList.remove('is-open'); document.body.style.overflow = ''; });
  if (privacyOverlay) privacyOverlay.addEventListener('click', e => { if (e.target === privacyOverlay) { privacyOverlay.classList.remove('is-open'); document.body.style.overflow = ''; } });
}

// ===== RENDER STATIC CONTENT =====
function render() {
  const servicesEl = $('#servicesGrid');
  if (servicesEl) {
    servicesEl.innerHTML = `
      <div class="services__tabs" id="servicesTabs">
        ${services.map((s, i) => `<button class="services__tab${i === 0 ? ' is-active' : ''}" data-idx="${i}">${s.title}</button>`).join('')}
      </div>
      <div class="services__content" id="servicesContent">
        ${services[0] ? `
          <div class="services__list">
            <div class="services__list-divider"></div>
            ${services[0].items.map(it => `
              <div class="services__item">
                <span class="services__item-name">${it.name}</span>
                <span class="services__item-dots"></span>
                <span class="services__item-price">${it.price}</span>
              </div>`).join('')}
          </div>` : ''}
      </div>
      <div class="services__contacts" id="servicesContacts">
        <strong>г. Счастье:</strong> ул. Мира, 7 &nbsp;|&nbsp;
        <strong>г. Северодонецк:</strong> ул. Курчатова, 7 &nbsp;|&nbsp;
        <strong>Телефон:</strong> +7 (959) 021-15-07 &nbsp;|&nbsp; +7 (959) 229-99-59
      </div>`;
    const tabs = $$('.services__tab');
    const content = $('#servicesContent');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('is-active'));
        tab.classList.add('is-active');
        const idx = parseInt(tab.dataset.idx);
        const s = services[idx];
        if (!s) return;
        content.innerHTML = `
          <div class="services__list">
            <div class="services__list-divider"></div>
            ${s.items.map(it => `
              <div class="services__item">
                <span class="services__item-name">${it.name}</span>
                <span class="services__item-dots"></span>
                <span class="services__item-price">${it.price}</span>
              </div>`).join('')}
          </div>`;
      });
    });
  }
  $('#advList').innerHTML = advantages.map(a => `
    <li class="about__item">
      <span class="about__item-ic">${a.icon}</span>
      <div><h4>${a.title}</h4><p>${a.text}</p></div>
    </li>`).join('');
  $('#doctorsGrid').innerHTML = doctors.map(d => `
    <article class="doctor reveal">
      <div class="doctor__photo">${d.emoji}<span class="doctor__photo-badge">Ведущий специалист</span></div>
      <div class="doctor__body">
        <h3>${d.name}</h3>
        <div class="doctor__role">${d.role}</div>
      </div>
    </article>`).join('');
  $('#statsGrid').innerHTML = statsData.map(s => `
    <div class="stats__item reveal" style="transition-delay:${100}ms">
      <div class="stats__num"><span class="counter" data-target="${s.num}">0</span>${s.suffix}</div>
      <div class="stats__label">${s.label}</div>
    </div>`).join('');
  $('#reviewsTrack').innerHTML = reviews.map(r => `
    <div class="review">
      <div class="review__card">
        <div class="review__stars" aria-label="5 из 5">★★★★★</div>
        <p class="review__text">«${r.text}»</p>
        <div class="review__author">
          <div class="review__avatar">${r.avatar}</div>
          <div><div class="review__name">${r.name}</div><div class="review__meta">${r.meta}</div></div>
        </div>
      </div>
    </div>`).join('');
  $('#reviewsDots').innerHTML = reviews.map((_, i) => `<button class="${i === 0 ? 'is-active' : ''}" aria-label="Отзыв ${i + 1}"></button>`).join('');
  const pl = $('#pricelistGrid');
  if (pl) {
    pl.innerHTML = pricelist.map(cat => `
      <div class="pricelist__cat">
        <div class="pricelist__cat-title"><span>${cat.icon}</span>${cat.title}</div>
        <div class="pricelist__items">
          ${cat.items.map(it => `
            <div class="pricelist__item">
              <span class="pricelist__item-name">${it.name}</span>
              <span class="pricelist__item-price">${it.price} <small>₽</small></span>
            </div>`).join('')}
        </div>
      </div>`).join('');
  }
}

// ===== HEADER =====
function initHeader() {
  const header = $('#header');
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
    $('#scrollTop')?.classList.toggle('is-visible', window.scrollY > 400);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  $('#scrollTop')?.addEventListener('click', e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
}

function initMenu() {
  const burger = $('#burger'), nav = $('#nav');
  const close = () => { nav?.classList.remove('is-open'); burger?.classList.remove('is-open'); burger?.setAttribute('aria-expanded', 'false'); };
  burger?.addEventListener('click', () => {
    const open = nav?.classList.toggle('is-open');
    burger?.classList.toggle('is-open', open);
    burger?.setAttribute('aria-expanded', String(open));
  });
  $$('.nav__link', nav).forEach(l => l.addEventListener('click', close));
}

function initScrollSpy() {
  const links = $$('.nav__link');
  const map = new Map(links.map(l => [l.getAttribute('href').slice(1), l]));
  const sections = [...map.keys()].map(id => document.getElementById(id)).filter(Boolean);
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('is-active'));
        map.get(e.target.id)?.classList.add('is-active');
      }
    });
  }, { rootMargin: '-40% 0px -30% 0px' });
  sections.forEach(s => obs.observe(s));
}

function initReveal() {
  const els = $$('.reveal');
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); o.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.target);
      if (isNaN(target)) return;
      const isDecimal = target % 1 !== 0;
      const steps = 30;
      const inc = target / steps;
      let cur = 0;
      const tick = () => {
        cur += inc;
        if (cur >= target) { el.textContent = target; return; }
        el.textContent = isDecimal ? cur.toFixed(1) : Math.round(cur);
        requestAnimationFrame(tick);
      };
      tick();
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  $$('.counter').forEach(el => obs.observe(el));
}

function initBeforeAfter() {
  const range = $('#baRange'), before = $('#baBefore'), handle = $('#baHandle');
  const update = v => { if (before) before.style.width = v + '%'; if (handle) handle.style.left = v + '%'; };
  if (range) { range.addEventListener('input', () => update(range.value)); update(range.value); }
}

function initReviews() {
  const track = $('#reviewsTrack'), dots = $$('#reviewsDots button');
  if (!track) return;
  let idx = 0, timer;
  const go = i => {
    idx = (i + reviews.length) % reviews.length;
    track.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle('is-active', di === idx));
  };
  const auto = () => { timer = setInterval(() => go(idx + 1), 6000); };
  const reset = () => { clearInterval(timer); auto(); };
  const nextBtn = $('#revNext'), prevBtn = $('#revPrev');
  if (nextBtn) nextBtn.addEventListener('click', () => { go(idx + 1); reset(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { go(idx - 1); reset(); });
  dots.forEach((d, di) => d.addEventListener('click', () => { go(di); reset(); }));
  auto();
}

function phoneMask(input) {
  if (!input) return;
  input.addEventListener('input', () => {
    let d = input.value.replace(/\D/g, '');
    if (d.startsWith('8')) d = '7' + d.slice(1);
    if (!d.startsWith('7')) d = '7' + d;
    d = d.slice(0, 11);
    let out = '+7';
    if (d.length > 1) out += ' (' + d.slice(1, 4);
    if (d.length >= 4) out += ') ' + d.slice(4, 7);
    if (d.length >= 7) out += '-' + d.slice(7, 9);
    if (d.length >= 9) out += '-' + d.slice(9, 11);
    input.value = out;
  });
}

function initForm() {
  const form = $('#bookingForm');
  if (!form) return;
  const success = $('#bookingSuccess'), btn = form.querySelector('button[type=submit]');
  const setError = (id, msg) => {
    const field = document.getElementById(id)?.closest('.field');
    if (!field) return;
    field.classList.toggle('is-invalid', !!msg);
    const err = field.querySelector('.field__error');
    if (err) err.textContent = msg || '';
  };
  const citySel = $('#bf-city'), addrSel = $('#bf-address');
  const addresses = { 'Счастье': ['ул. Мира, 7'], 'Северодонецк': ['ул. Курчатова, 7'] };
  const syncAddr = () => {
    const city = citySel?.value;
    const addrs = addresses[city] || [];
    if (addrSel) addrSel.innerHTML = addrs.map(a => `<option value="${a}">${a}</option>`).join('');
  };
  if (citySel) citySel.addEventListener('change', syncAddr);
  syncAddr();
  phoneMask($('#bf-phone'));
  // Min date = today
  const dateInput = $('#bf-date');
  if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];
  form.addEventListener('submit', async e => {
    e.preventDefault();
    let ok = true;
    const name = $('#bf-name'), phone = $('#bf-phone'), service = $('#bf-service'), date = $('#bf-date'), city = $('#bf-city'), address = $('#bf-address'), doctor = $('#bf-doctor'), time = $('#bf-time');
    if (!name?.value?.trim() || name.value.trim().length < 2) { setError('bf-name', 'Введите имя'); ok = false; } else setError('bf-name', '');
    if ((phone?.value?.replace(/\D/g, '') || '').length < 11) { setError('bf-phone', 'Введите корректный телефон'); ok = false; } else setError('bf-phone', '');
    if (!ok) return;
    if (btn) { btn.disabled = true; btn.textContent = 'Отправка…'; }
    const data = { name: name?.value?.trim() || '', phone: phone?.value?.trim() || '', service: service?.value || '', city: city?.value || '', address: address?.value || '', date: date?.value || 'не выбрана', doctor: doctor?.value || 'Любой', time: time?.value || 'Не выбрано', subject: CONFIG.SUBJECT };
    if (CONFIG.TELEGRAM_TOKEN && CONFIG.TELEGRAM_CHAT_ID) {
      const msg = `📩 ${CONFIG.SUBJECT}\n👤 Имя: ${data.name}\n📞 Телефон: ${data.phone}\n🏙 Город: ${data.city}\n📍 Адрес: ${data.address}\n🦷 Услуга: ${data.service}\n👨‍⚕️ Врач: ${data.doctor}\n⏰ Время: ${data.time}\n📅 Дата: ${data.date}`;
      try { await fetch(`https://api.telegram.org/bot${CONFIG.TELEGRAM_TOKEN}/sendMessage`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ chat_id: CONFIG.TELEGRAM_CHAT_ID, text: msg }) }); } catch {}
    }
    if (success) success.classList.add('is-visible');
    form.reset();
    setTimeout(() => {
      if (success) success.classList.remove('is-visible');
      if (btn) { btn.disabled = false; btn.textContent = 'Отправить заявку'; }
    }, 4000);
  });
}

function initBookingServices() {
  const sel = $('#bf-service');
  if (!sel) return;
  const seen = new Set();
  const options = ['<option value="Консультация">Консультация</option>'];
  pricelist.forEach(cat => cat.items.forEach(it => {
    if (!seen.has(it.name)) { seen.add(it.name); options.push(`<option value="${it.name}">${it.name}</option>`); }
  }));
  sel.innerHTML = options.join('');
}

// ===== SHOP =====
let shopProducts = [];
let cart = JSON.parse(localStorage.getItem('tagdent_cart') || '[]');
let sortMode = 'default';

function saveCart() { localStorage.setItem('tagdent_cart', JSON.stringify(cart)); updateCartCount(); }

function updateCartCount() {
  const count = cart.reduce((s, i) => s + i.quantity, 0);
  const el = $('#cartCount');
  if (el) { el.textContent = count; el.classList.toggle('is-visible', count > 0); }
}

const emojiMap = { 'Щётки': '🪥', 'Гигиена': '🧴', 'Пасты': '🦷', 'Аксессуары': '🛠️' };
function getProductEmoji(cat) { return emojiMap[cat] || '📦'; }

function getFilteredProducts() {
  const search = $('#shopSearch')?.value?.toLowerCase() || '';
  const activeCat = $('.shop__cat.is-active');
  const cat = activeCat?.dataset?.cat || 'all';
  let filtered = shopProducts.filter(p => {
    if (cat !== 'all' && p.category !== cat) return false;
    if (search && !p.name.toLowerCase().includes(search) && !p.description?.toLowerCase().includes(search)) return false;
    return true;
  });
  if (sortMode === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (sortMode === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if (sortMode === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
  return filtered;
}

function renderShop() {
  const grid = $('#shopGrid');
  const empty = $('#shopEmpty');
  const loading = $('#shopLoading');
  if (!grid) return;
  loading?.classList.remove('is-visible');
  if (!shopProducts.length) { grid.innerHTML = ''; if (empty) empty.style.display = 'block'; return; }
  if (empty) empty.style.display = 'none';
  const filtered = getFilteredProducts();
  if (!filtered.length) { grid.innerHTML = '<div class="shop__empty" style="display:block">Ничего не найдено</div>'; return; }
  grid.innerHTML = filtered.map(p => {
    const inCart = cart.find(i => i.id === p.id);
    const added = inCart ? 'is-added' : '';
    return `<div class="shop-card reveal">
      <div class="shop-card__img" data-emoji="${getProductEmoji(p.category)}" data-id="${p.id}"></div>
      <div class="shop-card__body">
        <div class="shop-card__cat">${p.category}</div>
        <div class="shop-card__name">${p.name}</div>
        <div class="shop-card__desc">${p.description || ''}</div>
        <div class="shop-card__bottom">
          <div class="shop-card__price">${p.price.toLocaleString()} <small>руб</small></div>
          ${p.inStock
            ? `<button class="shop-card__add ${added}" data-id="${p.id}" aria-label="Добавить в корзину">
                ${added ? '<svg viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
                       : '<svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'}</button>`
            : '<span class="shop-card__out">Нет в наличии</span>'}
        </div>
      </div>
    </div>`;
  }).join('');
  initReveal();
  grid.querySelectorAll('.shop-card__img').forEach(el => {
    el.addEventListener('click', () => openProductModal(Number(el.dataset.id)));
    el.style.cursor = 'pointer';
  });
  grid.querySelectorAll('.shop-card__add').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); addToCart(Number(btn.dataset.id)); });
  });
}

function addToCart(id) {
  const existing = cart.find(i => i.id === id);
  if (existing) existing.quantity++;
  else { const p = shopProducts.find(pp => pp.id === id); if (p) cart.push({ id: p.id, name: p.name, price: p.price, quantity: 1 }); }
  saveCart();
  renderShop();
  toast('Товар добавлен в корзину', 'success');
}

function initShopCats() {
  const cats = [...new Set(shopProducts.map(p => p.category))];
  const el = $('#shopCats');
  if (!el) return;
  el.innerHTML = `<button class="shop__cat shop__cat--all is-active" data-cat="all">Все</button>
    ${cats.map(c => `<button class="shop__cat" data-cat="${c}">${c}</button>`).join('')}`;
  el.addEventListener('click', e => {
    const btn = e.target.closest('.shop__cat');
    if (!btn) return;
    el.querySelectorAll('.shop__cat').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    renderShop();
    toast(`Категория: ${btn.dataset.cat === 'all' ? 'все товары' : btn.textContent}`, 'info');
  });
}

function initShopSearch() {
  const input = $('#shopSearch');
  const clear = $('#shopSearchClear');
  if (!input) return;
  let timer;
  input.addEventListener('input', () => {
    clear?.classList.toggle('is-visible', input.value.length > 0);
    clearTimeout(timer);
    timer = setTimeout(renderShop, 250);
  });
  clear?.addEventListener('click', () => { input.value = ''; clear.classList.remove('is-visible'); renderShop(); });
}

function initShopSort() {
  const sel = $('#shopSort');
  if (!sel) return;
  sel.addEventListener('change', () => { sortMode = sel.value; renderShop(); });
}

// ===== PRODUCT MODAL =====
function openProductModal(id) {
  const p = shopProducts.find(x => x.id === id);
  if (!p) return;
  const overlay = $('#productModalOverlay');
  const body = $('#productModalBody');
  const nameEl = $('#productModalName');
  if (!overlay || !body) return;
  nameEl.textContent = p.name;
  const inCart = cart.find(i => i.id === id);
  body.innerHTML = `
    <div class="pmodal__img">${getProductEmoji(p.category)}</div>
    <div class="pmodal__cat">${p.category}</div>
    <div class="pmodal__price">${p.price.toLocaleString()} <small>руб</small></div>
    <div class="pmodal__desc">${p.description || 'Нет описания'}</div>
    ${p.inStock
      ? `<button class="pmodal__add ${inCart ? 'is-added' : ''}" id="pmodalAddBtn">
           ${inCart ? '✅ В корзине' : '🛒 Добавить в корзину'}
         </button>`
      : '<div class="pmodal__out">Нет в наличии</div>'}`;
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  const addBtn = $('#pmodalAddBtn');
  if (addBtn) addBtn.addEventListener('click', () => { addToCart(id); addBtn.textContent = '✅ В корзине'; addBtn.classList.add('is-added'); });
}

function initProductModal() {
  const overlay = $('#productModalOverlay');
  const close = $('#productModalClose');
  if (close) close.addEventListener('click', () => { overlay?.classList.remove('is-open'); document.body.style.overflow = ''; });
  if (overlay) overlay.addEventListener('click', e => { if (e.target === overlay) { overlay.classList.remove('is-open'); document.body.style.overflow = ''; } });
}

async function loadShopProducts() {
  const loading = $('#shopLoading');
  loading?.classList.add('is-visible');
  try {
    const r = await fetch(API_URL + '/api/products');
    if (r.ok) { shopProducts = await r.json(); }
    else throw new Error();
  } catch {
    shopProducts = [
      { id: 1, name: 'Электрическая зубная щётка Sonic', description: 'Мягкая щетина, 3 режима', price: 2500, category: 'Щётки', inStock: true },
      { id: 2, name: 'Ирригатор полости рта', description: 'Портативный, 200 мл', price: 3200, category: 'Гигиена', inStock: true },
      { id: 3, name: 'Отбеливающая паста', description: '100 мл, фтор + кальций', price: 450, category: 'Пасты', inStock: true }
    ];
  }
  initShopCats();
  renderShop();
  initShopSearch();
  initShopSort();
}

// ===== CART =====
function renderCartItems() {
  const container = $('#cartItems');
  const empty = $('#cartEmpty');
  const total = $('#cartTotal');
  const footer = $('#cartModalFooter');
  const totalSum = $('#cartTotalSum');
  const count = $('#cartModalCount');
  if (!container) return;
  if (!cart.length) { container.innerHTML = ''; if (empty) empty.style.display = 'block'; if (total) total.style.display = 'none'; if (footer) footer.style.display = 'none'; if (count) count.textContent = ''; return; }
  if (empty) empty.style.display = 'none';
  if (total) total.style.display = 'flex';
  if (footer) footer.style.display = 'block';
  if (count) count.textContent = `(${cart.reduce((s, i) => s + i.quantity, 0)})`;
  container.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <div class="cart-item__info">
        <div class="cart-item__name">${item.name}</div>
        <div class="cart-item__price">${item.price.toLocaleString()} руб × ${item.quantity}</div>
      </div>
      <div class="cart-item__qty">
        <button data-action="dec" data-idx="${idx}">−</button>
        <span>${item.quantity}</span>
        <button data-action="inc" data-idx="${idx}">+</button>
      </div>
      <button class="cart-item__del" data-action="del" data-idx="${idx}">&times;</button>
    </div>`).join('');
  const sum = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  if (totalSum) totalSum.textContent = sum.toLocaleString() + ' руб';
  container.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.idx);
      if (btn.dataset.action === 'inc') cart[idx].quantity++;
      else if (btn.dataset.action === 'dec') { cart[idx].quantity--; if (cart[idx].quantity <= 0) cart.splice(idx, 1); }
      else if (btn.dataset.action === 'del') cart.splice(idx, 1);
      saveCart(); renderCartItems(); renderShop();
    });
  });
  // Prefill user data
  const user = JSON.parse(localStorage.getItem('tagdent_user') || '{}');
  if (user.name) { const n = $('#co-name'); if (n && !n.value) n.value = user.name; }
  if (user.phone) { const p = $('#co-phone'); if (p && !p.value) p.value = user.phone; }
}

function initCartModal() {
  const overlay = $('#cartModalOverlay');
  const closeBtn = $('#cartModalClose');
  const openBtn = $('#cartBtn');
  const form = $('#cartForm');
  openBtn?.addEventListener('click', () => { renderCartItems(); overlay?.classList.add('is-open'); document.body.style.overflow = 'hidden'; });
  closeBtn?.addEventListener('click', () => { overlay?.classList.remove('is-open'); document.body.style.overflow = ''; const s = $('#cartSuccess'); if (s) s.classList.remove('is-visible'); });
  overlay?.addEventListener('click', e => { if (e.target === overlay) { overlay.classList.remove('is-open'); document.body.style.overflow = ''; } });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay?.classList.contains('is-open')) { overlay.classList.remove('is-open'); document.body.style.overflow = ''; } });
  phoneMask($('#co-phone'));
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (!cart.length) return;
      const name = $('#co-name'), phone = $('#co-phone'), address = $('#co-address'), comment = $('#co-comment'), success = $('#cartSuccess'), submitBtn = form.querySelector('button[type=submit]');
      let ok = true;
      const setError = (id, msg) => { const f = document.getElementById(id)?.closest('.field'); if (f) { f.classList.toggle('is-invalid', !!msg); const err = f.querySelector('.field__error'); if (err) err.textContent = msg || ''; } };
      if (!name?.value?.trim() || name.value.trim().length < 2) { setError('co-name', 'Введите имя'); ok = false; } else setError('co-name', '');
      if ((phone?.value?.replace(/\D/g, '') || '').length < 11) { setError('co-phone', 'Введите корректный телефон'); ok = false; } else setError('co-phone', '');
      if (!ok) return;
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Отправка...'; }
      try {
        const r = await fetch(API_URL + '/api/order', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items: cart.map(i => ({ name: i.name, price: i.price, quantity: i.quantity })), name: name.value.trim(), phone: phone.value.trim(), address: address?.value?.trim() || '', comment: comment?.value?.trim() || '', token: localStorage.getItem('tagdent_token') || '' })
        });
        if (r.ok) {
          cart = []; saveCart(); renderCartItems(); renderShop();
          if (success) success.classList.add('is-visible');
          toast('Заказ отправлен! Мы свяжемся с вами.', 'success');
          form.reset();
          setTimeout(() => { if (success) success.classList.remove('is-visible'); if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Оформить заказ'; } }, 3000);
        } else { alert('Ошибка отправки заказа.'); if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Оформить заказ'; } }
      } catch { alert('Ошибка отправки заказа.'); if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Оформить заказ'; } }
    });
  }
}

function initPhoneModal() {
  $('#phoneLink')?.addEventListener('click', e => { e.preventDefault(); showPhoneModal(); });
}

function showPhoneModal() {
  const overlay = $('#modalOverlay'), content = $('#modalContent');
  content.innerHTML = `
    <div class="phone-modal">
      <button class="modal__close" id="phoneModalClose" aria-label="Закрыть">&times;</button>
      <h3>Связаться с нами</h3>
      <a href="tel:+79590211507" class="phone-modal__btn phone-modal__call">
        <svg viewBox="0 0 24 24" fill="none" width="22" height="22"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Позвонить +7 959 021 1507
      </a>
      <a href="https://t.me/doctagirovs" target="_blank" rel="noopener" class="phone-modal__btn phone-modal__tg">
        <svg viewBox="0 0 24 24" fill="none" width="22" height="22"><path d="M22 2L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Telegram @doctagirovs
      </a>
      <a href="https://t.me/stomatologiyasever" target="_blank" rel="noopener" class="phone-modal__btn phone-modal__tg">
        <svg viewBox="0 0 24 24" fill="none" width="22" height="22"><path d="M22 2L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Группа Telegram
      </a>
    </div>`;
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  const close = () => { overlay.classList.remove('is-open'); document.body.style.overflow = ''; };
  const keyHandler = (e) => { if (e.key === 'Escape') close(); };
  content.querySelectorAll('.modal__close, .phone-modal__btn').forEach(el => el.addEventListener('click', close));
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', keyHandler);
}

// ===== AUTH =====
let authMode = 'login';

function initAuth() {
  const userBtn = $('#userBtn');
  const overlay = $('#authModalOverlay');
  const closeBtn = $('#authModalClose');
  const authForm = $('#authForm');
  const toggleLink = $('#authToggleLink');
  const authError = $('#authError');
  const authSuccess = $('#authSuccess');
  const userModalOverlay = $('#userModalOverlay');
  const userModalClose = $('#userModalClose');
  const userLogoutBtn = $('#userLogoutBtn');
  const userOrdersBtn = $('#userOrdersBtn');
  const userDeleteBtn = $('#userDeleteBtn');

  const token = localStorage.getItem('tagdent_token');
  if (token && userBtn) {
    fetch(API_URL + '/api/user', { headers: { 'Authorization': token } })
      .then(r => { if (r.ok) userBtn.classList.add('is-logged'); }).catch(() => {});
  }
  userBtn?.addEventListener('click', () => {
    const t = localStorage.getItem('tagdent_token');
    if (t) openUserModal(); else openAuthModal();
  });
  closeBtn?.addEventListener('click', closeAuthModal);
  overlay?.addEventListener('click', e => { if (e.target === overlay) closeAuthModal(); });
  toggleLink?.addEventListener('click', e => { e.preventDefault(); authMode = authMode === 'login' ? 'register' : 'login'; updateAuthForm(); });
  phoneMask($('#authPhone'));
  if (authForm) {
    authForm.addEventListener('submit', async e => {
      e.preventDefault();
      authError?.classList.remove('is-visible');
      authSuccess?.classList.remove('is-visible');
      const name = $('#authName'), phone = $('#authPhone'), password = $('#authPassword'), submitBtn = $('#authSubmitBtn');
      const phoneClean = phone?.value?.replace(/\D/g, '') || '';
      if (phoneClean.length < 10) { if (authError) { authError.textContent = 'Введите корректный телефон'; authError.classList.add('is-visible'); } return; }
      if ((password?.value?.length || 0) < 4) { if (authError) { authError.textContent = 'Пароль минимум 4 символа'; authError.classList.add('is-visible'); } return; }
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Подождите...'; }
      try {
        const body = authMode === 'register'
          ? JSON.stringify({ name: name?.value?.trim() || '', phone: phoneClean, password: password?.value || '' })
          : JSON.stringify({ phone: phoneClean, password: password?.value || '' });
        const endpoint = authMode === 'register' ? '/api/register' : '/api/login';
        const r = await fetch(API_URL + endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body });
        const data = await r.json();
        if (r.ok) {
          localStorage.setItem('tagdent_token', data.token);
          localStorage.setItem('tagdent_user', JSON.stringify({ name: data.name, phone: data.phone }));
          const t = $('#authSuccessText');
          if (t) t.textContent = authMode === 'register' ? 'Регистрация успешна!' : 'Вы вошли!';
          authSuccess?.classList.add('is-visible');
          userBtn?.classList.add('is-logged');
          toast(authMode === 'register' ? 'Регистрация успешна!' : 'Добро пожаловать!', 'success');
          setTimeout(closeAuthModal, 1500);
        } else { if (authError) { authError.textContent = data.error || 'Ошибка'; authError.classList.add('is-visible'); } }
      } catch { if (authError) { authError.textContent = 'Ошибка сети'; authError.classList.add('is-visible'); } }
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = authMode === 'register' ? 'Зарегистрироваться' : 'Войти'; }
    });
  }
  userModalClose?.addEventListener('click', closeUserModal);
  userModalOverlay?.addEventListener('click', e => { if (e.target === userModalOverlay) closeUserModal(); });
  userLogoutBtn?.addEventListener('click', () => {
    localStorage.removeItem('tagdent_token'); localStorage.removeItem('tagdent_user');
    userBtn?.classList.remove('is-logged'); closeUserModal(); toast('Вы вышли из аккаунта', 'info');
  });
  userDeleteBtn?.addEventListener('click', async () => {
    if (!confirm('Удалить аккаунт? Это действие необратимо.')) return;
    const token = localStorage.getItem('tagdent_token');
    try { const r = await fetch(API_URL + '/api/user/delete', { method: 'POST', headers: { 'Authorization': token } }); if (r.ok) { localStorage.removeItem('tagdent_token'); localStorage.removeItem('tagdent_user'); userBtn?.classList.remove('is-logged'); closeUserModal(); toast('Аккаунт удалён', 'info'); } } catch {}
  });
  userOrdersBtn?.addEventListener('click', loadUserOrders);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeAuthModal(); closeUserModal(); } });
}

function updateAuthForm() {
  const title = $('#authTitle'), submitBtn = $('#authSubmitBtn'), nameField = $('#authNameField'), toggleText = $('#authToggleText'), toggleLink = $('#authToggleLink'), authError = $('#authError');
  authError?.classList.remove('is-visible');
  if (authMode === 'register') {
    if (title) title.textContent = 'Регистрация';
    if (submitBtn) submitBtn.textContent = 'Зарегистрироваться';
    if (nameField) nameField.style.display = 'block';
    if (toggleText) toggleText.textContent = 'Уже есть аккаунт?';
    if (toggleLink) toggleLink.textContent = 'Войти';
  } else {
    if (title) title.textContent = 'Вход';
    if (submitBtn) submitBtn.textContent = 'Войти';
    if (nameField) nameField.style.display = 'none';
    if (toggleText) toggleText.textContent = 'Нет аккаунта?';
    if (toggleLink) toggleLink.textContent = 'Зарегистрироваться';
  }
}

function openAuthModal() { const overlay = $('#authModalOverlay'); if (!overlay) return; $('#authSuccess')?.classList.remove('is-visible'); $('#authForm')?.reset(); authMode = 'login'; updateAuthForm(); overlay.classList.add('is-open'); document.body.style.overflow = 'hidden'; }
function closeAuthModal() { const overlay = $('#authModalOverlay'); if (!overlay) return; overlay.classList.remove('is-open'); document.body.style.overflow = ''; }
function openUserModal() {
  const overlay = $('#userModalOverlay'); if (!overlay) return;
  const user = JSON.parse(localStorage.getItem('tagdent_user') || '{}');
  const n = $('#userNameDisplay'), p = $('#userPhoneDisplay'), o = $('#userOrdersList');
  if (n) n.textContent = user.name || ''; if (p) p.textContent = user.phone || ''; if (o) o.style.display = 'none';
  overlay.classList.add('is-open'); document.body.style.overflow = 'hidden';
}
function closeUserModal() { const overlay = $('#userModalOverlay'); if (!overlay) return; overlay.classList.remove('is-open'); document.body.style.overflow = ''; }

async function loadUserOrders() {
  const token = localStorage.getItem('tagdent_token'), container = $('#userOrdersContent'), list = $('#userOrdersList');
  if (!token || !container || !list) return; list.style.display = 'block';
  try {
    const r = await fetch(API_URL + '/api/orders/mine', { headers: { 'Authorization': token } });
    if (!r.ok) throw new Error();
    const orders = await r.json();
    if (!orders.length) { container.innerHTML = '<div class="auth-orders__empty">У вас пока нет заказов</div>'; return; }
    container.innerHTML = orders.reverse().map(o => `
      <div class="auth-order">
        <div class="auth-order__date">${new Date(o.date).toLocaleDateString('ru-RU')}</div>
        <div class="auth-order__items">${o.items.map(it => `${it.name} × ${it.quantity}`).join(', ')}</div>
        <div class="auth-order__total">${o.total.toLocaleString()} руб</div>
      </div>`).join('');
  } catch { container.innerHTML = '<div class="auth-orders__empty">Ошибка загрузки</div>'; }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  render();
  initHeader();
  initMenu();
  initScrollSpy();
  initReveal();
  initBeforeAfter();
  initReviews();
  initForm();
  initBookingServices();
  initCounters();
  initPhoneModal();
  initCartModal();
  initProductModal();
  initAuth();
  initCookieBanner();
  loadShopProducts();
  updateCartCount();
});
