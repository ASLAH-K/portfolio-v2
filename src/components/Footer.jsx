import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 py-6 border-t border-white/5">
      <div className="container flex items-center justify-between">
        <div className="text-sm">© {new Date().getFullYear()} Muhammed Aslah K</div>
        <div className="flex items-center gap-3 text-sm">
          <a href="mailto:mhdaslah.k@gmail.com" className="underline">mhdaslah.k@gmail.com</a>
          <a href="https://github.com/ASLAH-K" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/muhammed-aslah-k-86783836a/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
