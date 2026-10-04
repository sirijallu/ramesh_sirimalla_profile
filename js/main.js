// Mark that JS is running so CSS can switch to one-section-at-a-time
document.documentElement.classList.add('js');

// ---------------------------------------------------------
// Theme (light/dark) toggle, persisted in localStorage
// ---------------------------------------------------------
function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  try {
    const stored = localStorage.getItem('theme');
    if (stored) root.setAttribute('data-theme', stored);
  } catch (e) { /* storage unavailable */ }

  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
  });
}

// ---------------------------------------------------------
// Mobile sidebar toggle
// ---------------------------------------------------------
function initMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const toggle = document.getElementById('mobile-menu-toggle');
  const backdrop = document.getElementById('sidebar-backdrop');

  const setOpen = (open) => {
    sidebar.classList.toggle('open', open);
    backdrop.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => setOpen(!sidebar.classList.contains('open')));
  backdrop.addEventListener('click', () => setOpen(false));
  sidebar.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
}

// ---------------------------------------------------------
// Section switching: the hero stays on top and one content
// section shows below it. "Welcome" shows the About section.
// ---------------------------------------------------------
function initSections() {
  const panels = document.querySelectorAll('[data-panel]');
  const links = document.querySelectorAll('.sidebar-menu a');

  const show = (id, scroll) => {
    const target = document.getElementById(id) && document.getElementById(id).hasAttribute('data-panel') ? id : 'about';
    panels.forEach((p) => p.classList.toggle('is-visible', p.id === target));

    const activeLink = id === 'welcome' || !document.getElementById(id) ? 'welcome' : target;
    links.forEach((l) => l.classList.toggle('active', l.dataset.section === activeLink));

    if (scroll) {
      const el = activeLink === 'welcome' ? document.body : document.getElementById(target);
      window.scrollTo({ top: activeLink === 'welcome' ? 0 : el.offsetTop - 16, behavior: 'smooth' });
    }
  };

  document.querySelectorAll('[data-section]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.dataset.section;
      show(id, true);
      try { history.replaceState(null, '', '#' + id); } catch (err) { /* e.g. file:// previews */ }
    });
  });

  window.addEventListener('hashchange', () => show(location.hash.slice(1) || 'welcome', true));
  show(location.hash.slice(1) || 'welcome', false);
}

// ---------------------------------------------------------
// Tabs inside a section (About topics, Projects)
// ---------------------------------------------------------
function initTabs() {
  document.querySelectorAll('.tab-nav').forEach((nav) => {
    const tabs = Array.from(nav.querySelectorAll('.tab-btn'));

    const select = (tab) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(t.getAttribute('aria-controls'));
        panel.hidden = !on;
        panel.classList.toggle('active', on);
      });
    };

    tabs.forEach((tab, i) => {
      tab.tabIndex = tab.classList.contains('active') ? 0 : -1;
      tab.addEventListener('click', () => select(tab));
      tab.addEventListener('keydown', (e) => {
        const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!dir) return;
        const next = tabs[(i + dir + tabs.length) % tabs.length];
        next.focus();
        select(next);
      });
    });
  });
}

// ---------------------------------------------------------
// Hero "Email" / "Phone" buttons reveal the details
// ---------------------------------------------------------
function initContactReveal() {
  ['email', 'phone'].forEach((kind) => {
    const btn = document.getElementById(kind + '-btn');
    const display = document.getElementById(kind + '-display');
    btn.addEventListener('click', () => {
      display.hidden = !display.hidden;
      btn.setAttribute('aria-expanded', String(!display.hidden));
    });
  });
}

// ---------------------------------------------------------
// Footer year
// ---------------------------------------------------------
function initYear() {
  document.getElementById('year').textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileSidebar();
  initSections();
  initTabs();
  initContactReveal();
  initYear();
});
