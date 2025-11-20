import React from 'react'

const IconGitHub = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 2 .7 2.6 1 .1-.8.4-1.4.7-1.7-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.1-3.2-.1-.3-.5-1.6.1-3.4 0 0 .9-.3 3 .1a10.4 10.4 0 015.5 0c2.1-.4 3-.1 3-.1.6 1.8.2 3.1.1 3.4.7.8 1.1 1.9 1.1 3.2 0 4.6-2.8 5.6-5.4 5.9.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0012 .5z" fill="currentColor"/>
  </svg>
)

const IconLinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v11H3zM9 9h3.8v1.6h.1c.5-.9 1.7-1.8 3.4-1.8 3.6 0 4.2 2.4 4.2 5.5V20H16v-5.1c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.4-2 2.7V20H9z" fill="currentColor"/>
  </svg>
)

const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M4 6h16v12H4z" fill="none" stroke="currentColor" strokeWidth="1.2"/><path d="M4 6l8 7 8-7" stroke="currentColor" strokeWidth="1.2" fill="none"/>
  </svg>
)

export default function SocialBar(){
  return (
    <div className="social-bar">
      <a href="https://github.com/ASLAH-K" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
        <IconGitHub />
      </a>
      <a href="https://www.linkedin.com/in/muhammed-aslah-k-86783836a/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
        <IconLinkedIn />
      </a>
      <a href="mailto:mhdaslah.k@gmail.com" aria-label="Email" title="Email">
        <IconMail />
      </a>
    </div>
  )
}
