
// ============================================================
//  BRIDGE UP — app.js  (Shared utilities & auth state)
// ============================================================
"use strict";

// ── Session helpers ───────────────────────────────────────
const Auth = {
  save(data)  { localStorage.setItem("bridgeup_session", JSON.stringify(data)); },
  get()       { try { return JSON.parse(localStorage.getItem("bridgeup_session")); } catch(e){ return null; } },
  clear()     { localStorage.removeItem("bridgeup_session"); },
  isLoggedIn(){ return !!this.get(); },
  getRole()   { const s=this.get(); return s?s.role:null; },
  getId()     { const s=this.get(); return s?s.id:null; },
  logout()    { this.clear(); window.location.href="login.html"; },
  requireAuth(allowedRoles=[]) {
    const s = this.get();
    if(!s) { window.location.href="login.html"; return null; }
    if(allowedRoles.length && !allowedRoles.includes(s.role)) {
      window.location.href = s.role==="student" ? "student-dashboard.html" : s.role==="recruiter" ? "recruiter-dashboard.html" : "university-dashboard.html";
      return null;
    }
    return s;
  },
};

// ── Toast notifications ──────────────────────────────────
function showToast(msg, type="info", duration=3500) {
  let container = document.getElementById("toast-container");
  if(!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  container.appendChild(toast);
  requestAnimationFrame(()=>{ requestAnimationFrame(()=>{ toast.classList.add("show"); }); });
  setTimeout(()=>{
    toast.classList.remove("show");
    setTimeout(()=>toast.remove(), 400);
  }, duration);
}

// ── Modal helpers ─────────────────────────────────────────
function openModal(id)  { document.getElementById(id)?.classList.add("open"); }
function closeModal(id) { document.getElementById(id)?.classList.remove("open"); }

// ── Avatar initials ────────────────────────────────────────
function avatarInitials(name="") {
  const parts = name.trim().split(" ");
  return (parts[0]?.[0]||"") + (parts[1]?.[0]||"");
}

// ── Relative time ──────────────────────────────────────────
function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const d = Math.floor(diff/86400000);
  if(d===0) return "Today";
  if(d===1) return "Yesterday";
  if(d<30)  return `${d} days ago`;
  if(d<365) return `${Math.floor(d/30)} months ago`;
  return `${Math.floor(d/365)} years ago`;
}

// ── XP progress percentage ────────────────────────────────
function xpProgress(xp) {
  const level = BridgeDB.getLevel(xp);
  const range = level.max - level.min;
  const progress = xp - level.min;
  return Math.min(100, Math.round((progress/range)*100));
}

// ── Render navbar logo ────────────────────────────────────
function renderLogo(dark=false) {
  /* return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 80" fill="none" style="height:38px">
    <defs>
      <linearGradient id="gLogo" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FACC15"/><stop offset="100%" stop-color="#F97316"/>
      </linearGradient>
    </defs>
    <path d="M10 55 Q22 20 38 55" stroke="url(#gLogo)" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M28 55 Q44 10 62 55" stroke="url(#gLogo)" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M50 55 Q70 5 90 55" stroke="url(#gLogo)" stroke-width="5.5" fill="none" stroke-linecap="round"/>
    <text x="10" y="75" font-family="Montserrat,sans-serif" font-weight="700" font-size="22" fill="${dark?"#0F172A":"#F1F5F9"}">Bridge</text>
    <text x="82" y="75" font-family="Montserrat,sans-serif" font-weight="700" font-size="22" fill="url(#gLogo)">Up</text>
  </svg>`; */

  return `
    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1708.12 444.99" style="height:38px; padding-top:8px;">
  <defs>
    <style>
      .cls-1 {
        fill: url(#linear-gradient-2);
      }

      .cls-2 {
        letter-spacing: 0em;
      }

      .cls-3 {
        fill: url(#linear-gradient-3);
      }

      .cls-4 {
        fill: #fff;
        font-family: Montserrat-Bold, Montserrat;
        font-size: 200px;
        font-weight: 700;
      }

      .cls-5 {
        fill: url(#linear-gradient);
      }
    </style>
    <linearGradient id="linear-gradient" x1="0" y1="150.65" x2="498.5" y2="150.65" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fed10e"/>
      <stop offset="1" stop-color="#f36129"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="1434.32" y1="187.85" x2="1708.12" y2="187.85" xlink:href="#linear-gradient"/>
    <linearGradient id="linear-gradient-3" x1="1434.32" y1="187.85" x2="1708.12" y2="187.85" xlink:href="#linear-gradient"/>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <path class="cls-5" d="M349.91,0c-54.11,0-94.7,102.27-113.15,171.58-20.82,0-41.27,5.66-60.2,11.63,15.29-43.63,36.17-84.38,61-84.38,3.62.04,7.22.9,10.77,2.4l13.68-31.37c-8.55-3.64-18.01-6.3-27.44-5.43-39.2,0-67.96,45.59-87.91,96.77-13.16-10.53-27.54-17.2-43.02-17.2-59.38,0-87.34,91.85-103.64,157.3h44.26s27.57-37.09,79.44-66.33c-9.36,37.52-13.63,66.33-13.63,66.33h36.22s5.56-32.58,15.87-71.59c11.4,18.3,23.33,41.86,35.04,71.59h46.78S297.02,41.73,349.45,39.9c37.92-1.33,76.59,130.55,94.43,206-33.86-25.15-61.58-44.21-92.58-56.74h-.01c-10.82-24.02-24.7-52.56-41.52-76.3l-15.06,40.63c7.04,12.46,11.35,22.23,11.53,22.66-5.75-1.04-11.69-1.92-17.87-2.61l-8.13,30.17c109.45,16.21,164.68,97.59,164.68,97.59h53.58C456.08,102.27,404.94,0,349.91,0ZM133.5,199.45c-55.17,28.8-92.37,69.59-92.37,69.59,11.29-37.37,33.2-93.85,62.51-93.85,7.28,0,18.35,5.64,31.48,19.04.92.94,1.86,1.93,2.81,2.95-1.49.75-2.96,1.5-4.43,2.27ZM213.71,255.52c-7.31-14.18-16.16-30.66-26.42-46.52,12.83-3.4,26.48-5.97,40.92-7.42-5.66,20.61-10.46,39.31-14.5,53.94Z"/>
      <text class="cls-4" transform="translate(612.04 238.45)"><tspan x="0" y="0">B</tspan><tspan class="cls-2" x="153" y="0">r</tspan><tspan x="238.4" y="0">idge</tspan></text>
      <g>
        <path class="cls-1" d="M1497.72,240.85c-19.87,0-35.4-5.53-46.6-16.6-11.2-11.07-16.8-26.87-16.8-47.4v-78.4h32.4v77.2c0,13.33,2.73,22.93,8.2,28.8,5.46,5.87,13.13,8.8,23,8.8s17.53-2.93,23-8.8c5.46-5.87,8.2-15.47,8.2-28.8v-77.2h32v78.4c0,20.53-5.6,36.33-16.8,47.4-11.2,11.07-26.73,16.6-46.6,16.6Z"/>
        <path class="cls-3" d="M1590.92,277.25v-146.4h29.8v22l-.6,32,2,31.8v60.6h-31.2ZM1654.52,240.05c-9.07,0-17-2-23.8-6s-12.1-10.1-15.9-18.3-5.7-18.57-5.7-31.1,1.8-23.07,5.4-31.2c3.6-8.13,8.8-14.2,15.6-18.2,6.8-4,14.93-6,24.4-6,10.13,0,19.23,2.3,27.3,6.9,8.07,4.6,14.47,11.03,19.2,19.3,4.73,8.27,7.1,18,7.1,29.2s-2.37,21.13-7.1,29.4c-4.73,8.27-11.13,14.67-19.2,19.2-8.07,4.53-17.17,6.8-27.3,6.8ZM1649.12,214.45c5.2,0,9.83-1.2,13.9-3.6,4.07-2.4,7.33-5.83,9.8-10.3,2.47-4.46,3.7-9.77,3.7-15.9s-1.23-11.6-3.7-16c-2.47-4.4-5.73-7.8-9.8-10.2-4.07-2.4-8.7-3.6-13.9-3.6s-9.87,1.2-14,3.6c-4.13,2.4-7.4,5.8-9.8,10.2-2.4,4.4-3.6,9.73-3.6,16s1.2,11.43,3.6,15.9c2.4,4.47,5.67,7.9,9.8,10.3,4.13,2.4,8.8,3.6,14,3.6Z"/>
      </g>
    </g>
  </g>
</svg>
  `
}

// ── Render job card ───────────────────────────────────────
function renderJobCard(job, opts={}) {
  const tags = (job.requiredSkills||[]).slice(0,4).map(s=>`<span class="tag">${s}</span>`).join("");
  return `
  <div class="job-card" onclick="window.location.href='job-listing.html?id=${job.id}'">
    <div class="job-card-header">
      <div>
        <div class="job-card-title">${job.title}</div>
        <div class="job-card-company">${job.company}</div>
      </div>
      <span class="badge ${job.type==='Internship'?'badge-blue':job.type==='Freelance Project'?'badge-orange':'badge-gray'}">${job.type}</span>
    </div>
    <div class="job-card-meta">
      <span>📍 ${job.location}</span>
      <span>⏱ ${job.duration}</span>
      <span>📅 Deadline: ${job.deadline}</span>
    </div>
    <div class="job-card-tags">${tags}</div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-top:4px">
      <span class="job-xp">+${job.xpReward} XP</span>
      <span style="font-size:13px;color:#64748B">${job.applications} applicants</span>
    </div>
  </div>`;
}

// ── Render avatar div ─────────────────────────────────────
function renderAvatar(name, size="md") {
  return `<div class="avatar avatar-${size}" style="display:inline-flex">${avatarInitials(name)}</div>`;
}

// ── Render XP bar ─────────────────────────────────────────
function renderXPBar(xp) {
  const level = BridgeDB.getLevel(xp);
  const pct   = xpProgress(xp);
  return `
  <div>
    <div style="display:flex;justify-content:space-between;margin-bottom:6px">
      <span class="badge badge-yellow">${level.name}</span>
      <span style="font-size:13px;color:#64748B;font-family:'Montserrat',sans-serif;font-weight:600">${xp} XP</span>
    </div>
    <div class="xp-bar-wrap"><div class="xp-bar-fill" style="width:${pct}%"></div></div>
    <div style="font-size:12px;color:#94A3B8;margin-top:4px">🎁 Perk: ${level.perk}</div>
  </div>`;
}

// ── Render notification badge in navbar ───────────────────
function buildNavbar(activePage="", role="") {
  const session = Auth.get();
  if(!session) return "";
  const dashLink = role==="student" ? "student-dashboard.html" : role==="recruiter" ? "recruiter-dashboard.html" : "university-dashboard.html";
  const profileLink = role==="student" ? "student-profile.html" : "#";
  const navItems = role==="student" ? [
    {href:dashLink, label:"Dashboard"},
    {href:"job-listing.html", label:"Explore Jobs"},
    {href:"marketplace.html", label:"Marketplace"},
    {href:"chat.html", label:"Messages"},
  ] : role==="recruiter" ? [
    {href:dashLink, label:"Dashboard"},
    {href:"recruiter-post-job.html", label:"Post a Job"},
    {href:"marketplace.html", label:"Talent Pool"},
    {href:"chat.html", label:"Messages"},
  ] : [
    {href:dashLink, label:"Dashboard"},
    {href:"chat.html", label:"Messages"},
  ];
  const links = navItems.map(n=>`<a href="${n.href}" class="${activePage===n.label?"active":""}" style="text-align: center;" >${n.label}</a>`).join("");
  return `
  <nav class="navbar">
    <a href="${dashLink}" class="nav-brand">${renderLogo()}</a>
    <div class="nav-links">${links}</div>
    <div class="nav-actions">
      <button class="btn btn-ghost btn-sm" style="color:var(--muted);position:relative" onclick="window.location.href='chat.html'">
        🔔 <span class="notif-dot"></span>
      </button>
        ${buildLangToggle()}
        ${role==="student" ? `<a href="student-profile.html"><button class="btn btn-outline btn-sm">My Profile</button></a>` : ""}
        <button class="btn btn-primary btn-sm" onclick="Auth.logout()">Logout</button>
    </div>

  </nav>`;
}


// ─── Sticky Widget ───────────────────────────────────────────

function initStickyWidget() {
  // 1. Inject the HTML
  const widget = document.createElement('div');
  widget.id = 'stickyWidget';
  widget.className = 'sticky-widget';
  widget.innerHTML = `
    <div class="sticky-widget__icon">
      <span>📋</span>
    </div>
    <div class="sticky-widget__content">
      <p>Interested in Bridge Up?</p>
      <a
        href="https://forms.gle/Ga3BMMrb7mSNCXHE9"
        target="_blank"
        class="sticky-widget__btn"
      >
        Give Feedback →
      </a>
    </div>
  `;
  document.body.appendChild(widget);

  // 2. Click toggle
  widget.addEventListener('click', (e) => {
    if (e.target.closest('.sticky-widget__btn')) return;
    widget.classList.toggle('is-open');
  });

  // Close when tapping anywhere else on the page
  document.addEventListener('click', (e) => {
    if (!widget.contains(e.target)) {
      widget.classList.remove('is-open');
    }
  });

  // 3. Auto-wiggle
  function triggerWiggle() {
    if (widget.classList.contains('is-open')) return;
    widget.classList.add('wiggle');
    widget.addEventListener('animationend', () => {
      widget.classList.remove('wiggle');
    }, { once: true });
  }

  setTimeout(() => {
    triggerWiggle();
    setInterval(triggerWiggle, 5000);
  }, 3000);
}

// Run after the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initStickyWidget);
} else {
  initStickyWidget(); // DOM already ready
}


function buildLangToggle() {
  const current = (typeof I18N !== "undefined" ? I18N.lang : "fr");
  return `
    <div id="lang-toggle" style="display:flex;align-items:center;gap:4px;border:1.5px solid rgba(250,204,21,0.4);border-radius:20px;padding:3px 4px;">
      <button 
        class="lang-btn ${current === 'fr' ? 'lang-btn--active' : ''}" 
        data-lang="fr"
        onclick="I18N.setLang('fr')"
        style="border:none;border-radius:16px;padding:3px 10px;font-size:12px;font-weight:700;font-family:Montserrat,sans-serif;cursor:pointer;transition:background .2s,color .2s">
        FR
      </button>
      <button 
        class="lang-btn ${current === 'en' ? 'lang-btn--active' : ''}" 
        data-lang="en"
        onclick="I18N.setLang('en')"
        style="border:none;border-radius:16px;padding:3px 10px;font-size:12px;font-weight:700;font-family:Montserrat,sans-serif;cursor:pointer;transition:background .2s,color .2s">
        EN
      </button>
    </div>`;
}


function buildAuthPageBar() {
  const container = document.getElementById('auth-topbar');
  if (!container) return;

  container.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 24px;background-color:var(--blue);border-bottom:1px solid rgba(255,255,255,0.08);">
      <a href="index.html" style="display:flex;align-items:center;gap:8px;text-decoration:none;color:var(--card);font-family:Montserrat,sans-serif;font-weight:700;font-size:14px;opacity:0.85;transition:opacity .2s;"
         onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.85'">
        ← Bridge Up
      </a>
      <div id="lang-toggle"></div>
    </div>
  `;

  // Inject the lang toggle into the slot we just created
  document.getElementById('lang-toggle').innerHTML = buildLangToggle();
}