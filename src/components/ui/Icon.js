const icons = {
  // Navigation & UI
  menu: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  close: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  arrowRight: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  chevronRight: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
  check: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  search: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  quote: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  ),
  // Services icons
  strategy: (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="24" cy="24" r="20" stroke="#E87A2E" fill="rgba(232,122,46,0.08)" />
      <path d="M16 32l4-8 4 4 4-12 4 8" stroke="#E87A2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  financial: (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" stroke="#E87A2E" fill="rgba(232,122,46,0.08)" strokeWidth="2" />
      <path d="M24 14v20M18 20h12M18 26h12M20 32h8" stroke="#E87A2E" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  operations: (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" stroke="#E87A2E" fill="rgba(232,122,46,0.08)" strokeWidth="2" />
      <circle cx="24" cy="24" r="8" stroke="#E87A2E" strokeWidth="2.5" fill="none" />
      <circle cx="24" cy="24" r="3" fill="#E87A2E" />
      <line x1="24" y1="12" x2="24" y2="16" stroke="#E87A2E" strokeWidth="2.5" />
      <line x1="24" y1="32" x2="24" y2="36" stroke="#E87A2E" strokeWidth="2.5" />
      <line x1="12" y1="24" x2="16" y2="24" stroke="#E87A2E" strokeWidth="2.5" />
      <line x1="32" y1="24" x2="36" y2="24" stroke="#E87A2E" strokeWidth="2.5" />
    </svg>
  ),
  risk: (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" stroke="#E87A2E" fill="rgba(232,122,46,0.08)" strokeWidth="2" />
      <path d="M24 16v8M24 28v2" stroke="#E87A2E" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 14l10 18H14L24 14z" stroke="#E87A2E" strokeWidth="2" fill="none" strokeLinejoin="round" />
    </svg>
  ),
  technology: (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" stroke="#E87A2E" fill="rgba(232,122,46,0.08)" strokeWidth="2" />
      <rect x="16" y="16" width="16" height="12" rx="2" stroke="#E87A2E" strokeWidth="2.5" fill="none" />
      <line x1="20" y1="32" x2="28" y2="32" stroke="#E87A2E" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="28" x2="24" y2="32" stroke="#E87A2E" strokeWidth="2.5" />
    </svg>
  ),
  // Industry icons
  banking: (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <path d="M8 20l16-10 16 10" stroke="#E87A2E" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
      <rect x="12" y="22" width="4" height="12" stroke="#E87A2E" strokeWidth="2" fill="rgba(232,122,46,0.08)" />
      <rect x="22" y="22" width="4" height="12" stroke="#E87A2E" strokeWidth="2" fill="rgba(232,122,46,0.08)" />
      <rect x="32" y="22" width="4" height="12" stroke="#E87A2E" strokeWidth="2" fill="rgba(232,122,46,0.08)" />
      <line x1="8" y1="36" x2="40" y2="36" stroke="#E87A2E" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  healthcare: (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <rect x="18" y="10" width="12" height="28" rx="2" stroke="#E87A2E" strokeWidth="2.5" fill="rgba(232,122,46,0.08)" />
      <rect x="10" y="18" width="28" height="12" rx="2" stroke="#E87A2E" strokeWidth="2.5" fill="rgba(232,122,46,0.08)" />
    </svg>
  ),
  retail: (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <path d="M10 18h28l-3 18H13L10 18z" stroke="#E87A2E" strokeWidth="2.5" fill="rgba(232,122,46,0.08)" strokeLinejoin="round" />
      <path d="M16 18V14a8 8 0 0116 0v4" stroke="#E87A2E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  ),
  manufacturing: (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <path d="M8 36V20l8 6V20l8 6V20l8 6V12h8v24H8z" stroke="#E87A2E" strokeWidth="2.5" fill="rgba(232,122,46,0.08)" strokeLinejoin="round" />
    </svg>
  ),
  tech: (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <rect x="8" y="10" width="32" height="22" rx="3" stroke="#E87A2E" strokeWidth="2.5" fill="rgba(232,122,46,0.08)" />
      <line x1="16" y1="36" x2="32" y2="36" stroke="#E87A2E" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="32" x2="24" y2="36" stroke="#E87A2E" strokeWidth="2.5" />
      <circle cx="24" cy="21" r="5" stroke="#E87A2E" strokeWidth="2" fill="none" />
    </svg>
  ),
  energy: (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <path d="M28 8L18 24h8l-6 16 16-20h-8L28 8z" stroke="#E87A2E" strokeWidth="2.5" fill="rgba(232,122,46,0.08)" strokeLinejoin="round" />
    </svg>
  ),
  education: (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <path d="M24 10L6 20l18 10 18-10L24 10z" stroke="#E87A2E" strokeWidth="2.5" fill="rgba(232,122,46,0.08)" strokeLinejoin="round" />
      <path d="M12 24v10l12 6 12-6V24" stroke="#E87A2E" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
      <line x1="42" y1="20" x2="42" y2="34" stroke="#E87A2E" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  government: (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <path d="M24 8l16 10v4H8v-4L24 8z" stroke="#E87A2E" strokeWidth="2.5" fill="rgba(232,122,46,0.08)" strokeLinejoin="round" />
      <line x1="14" y1="24" x2="14" y2="34" stroke="#E87A2E" strokeWidth="2.5" />
      <line x1="22" y1="24" x2="22" y2="34" stroke="#E87A2E" strokeWidth="2.5" />
      <line x1="30" y1="24" x2="30" y2="34" stroke="#E87A2E" strokeWidth="2.5" />
      <line x1="38" y1="24" x2="38" y2="34" stroke="#E87A2E" strokeWidth="2.5" />
      <rect x="8" y="34" width="32" height="4" stroke="#E87A2E" strokeWidth="2" fill="rgba(232,122,46,0.08)" />
    </svg>
  ),
  // Stats icons
  clients: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E87A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  projects: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E87A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  experience: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E87A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  countries: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E87A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  industries: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E87A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20M6 20V8l6 4V8l6 4V4h2v16" />
    </svg>
  ),
  // Approach icons
  discover: (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" stroke="#E87A2E" fill="rgba(232,122,46,0.08)" strokeWidth="2" />
      <circle cx="22" cy="22" r="7" stroke="#E87A2E" strokeWidth="2.5" fill="none" />
      <line x1="27" y1="27" x2="34" y2="34" stroke="#E87A2E" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  diagnose: (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" stroke="#E87A2E" fill="rgba(232,122,46,0.08)" strokeWidth="2" />
      <path d="M16 28l4-8 4 4 4-8 4 4" stroke="#E87A2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  design: (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" stroke="#E87A2E" fill="rgba(232,122,46,0.08)" strokeWidth="2" />
      <path d="M18 30l-2 2 4 0 0-4 2-2" stroke="#E87A2E" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 26l8-8 4 4-8 8-4-4z" stroke="#E87A2E" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
    </svg>
  ),
  deliver: (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" stroke="#E87A2E" fill="rgba(232,122,46,0.08)" strokeWidth="2" />
      <path d="M16 24l6 6 10-12" stroke="#E87A2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  impact: (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" stroke="#E87A2E" fill="rgba(232,122,46,0.08)" strokeWidth="2" />
      <path d="M24 16v6l4 2" stroke="#E87A2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M16 30l4-2 4 2 4-2 4 2" stroke="#E87A2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  // Social icons
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  facebook: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  x: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  youtube: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
      <polygon points="9.545,15.568 15.818,12 9.545,8.432" fill="white" />
    </svg>
  ),
  // Contact icons
  email: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E87A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
    </svg>
  ),
  phone: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E87A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  location: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E87A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  website: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E87A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  linkedinContact: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E87A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  ),
  // Benefits/Career icons
  growth: (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" stroke="#E87A2E" fill="rgba(232,122,46,0.08)" strokeWidth="2" />
      <path d="M14 34l6-10 6 6 8-16" stroke="#E87A2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <polyline points="30,14 34,14 34,18" stroke="#E87A2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  learning: (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" stroke="#E87A2E" fill="rgba(232,122,46,0.08)" strokeWidth="2" />
      <rect x="16" y="14" width="16" height="20" rx="2" stroke="#E87A2E" strokeWidth="2.5" fill="none" />
      <line x1="20" y1="20" x2="28" y2="20" stroke="#E87A2E" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="24" x2="28" y2="24" stroke="#E87A2E" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="28" x2="24" y2="28" stroke="#E87A2E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  culture: (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" stroke="#E87A2E" fill="rgba(232,122,46,0.08)" strokeWidth="2" />
      <circle cx="18" cy="20" r="4" stroke="#E87A2E" strokeWidth="2" fill="none" />
      <circle cx="30" cy="20" r="4" stroke="#E87A2E" strokeWidth="2" fill="none" />
      <path d="M12 34c0-4 3-6 6-6h12c3 0 6 2 6 6" stroke="#E87A2E" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  ),
  flexibility: (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" stroke="#E87A2E" fill="rgba(232,122,46,0.08)" strokeWidth="2" />
      <circle cx="24" cy="24" r="10" stroke="#E87A2E" strokeWidth="2.5" fill="none" />
      <path d="M24 18v6l4 4" stroke="#E87A2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  global: (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" stroke="#E87A2E" fill="rgba(232,122,46,0.08)" strokeWidth="2" />
      <circle cx="24" cy="24" r="10" stroke="#E87A2E" strokeWidth="2" fill="none" />
      <line x1="14" y1="24" x2="34" y2="24" stroke="#E87A2E" strokeWidth="2" />
      <path d="M24 14a14 14 0 0 1 4 10 14 14 0 0 1-4 10 14 14 0 0 1-4-10 14 14 0 0 1 4-10z" stroke="#E87A2E" strokeWidth="2" fill="none" />
    </svg>
  ),
  play: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="22" fill="rgba(232,122,46,0.9)" />
      <polygon points="20,16 34,24 20,32" fill="white" />
    </svg>
  ),
  collaborate: (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="#555" strokeWidth="2">
      <circle cx="16" cy="18" r="5" /><circle cx="32" cy="18" r="5" />
      <path d="M6 36c0-5.5 4.5-10 10-10h4" /><path d="M28 26h4c5.5 0 10 4.5 10 10" />
      <path d="M24 24v10" strokeLinecap="round" /><path d="M20 30h8" strokeLinecap="round" />
    </svg>
  ),
  solve: (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="#555" strokeWidth="2">
      <circle cx="24" cy="20" r="12" /><path d="M20 36h8" strokeLinecap="round" /><path d="M22 32h4v4h-4z" />
      <path d="M24 14v4" strokeLinecap="round" /><circle cx="24" cy="22" r="2" fill="#555" />
    </svg>
  ),
  results: (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="#555" strokeWidth="2">
      <rect x="8" y="10" width="32" height="28" rx="2" /><path d="M14 26l6 6 14-14" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  partnerships: (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="#555" strokeWidth="2">
      <path d="M14 24l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" /><path d="M34 24l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 14h8v8h-8z" rx="1" /><line x1="24" y1="22" x2="24" y2="30" />
    </svg>
  ),
};

export default function Icon({ name, size, className, style }) {
  const icon = icons[name];
  if (!icon) return null;

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        ...style,
      }}
      aria-hidden="true"
    >
      {icon}
    </span>
  );
}
