import React from 'react'
export default function Navbar({theme,setTheme}){
  return (
    <nav className="py-4">
      <div className="container flex items-center justify-between">
        <a className="flex items-center gap-3" href="#">
          <div className="rounded-md p-2" style={{background:'linear-gradient(90deg,#071433,#081223)'}}>
            <span className="font-bold text-cyber-400">AS</span>
          </div>
          <div>
            <div className="font-semibold">Muhammed Aslah K</div>
            <div className="text-xs text-slate-400">Cybersecurity Student</div>
          </div>
        </a>

        <div className="flex items-center gap-4">
          <a href="#projects" className="text-sm text-slate-300 hover:text-cyber-400">Projects</a>
          <a href="#contact" className="text-sm text-slate-300 hover:text-cyber-400">Contact</a>
          <button onClick={()=> setTheme(t=> t==='dark'?'light':'dark') } className="p-2 rounded-md card">{theme==='dark'? '🌙':'🌤'}</button>
        </div>
      </div>
    </nav>
  )
}
