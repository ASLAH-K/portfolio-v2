import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="mt-6 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="text-5xl font-extrabold leading-tight">
          Hi, I'm <span className="text-cyber-400">Muhammed Aslah K</span>
        </motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="mt-3 text-slate-300 max-w-xl">
          Cybersecurity student building practical tools — pSOC (Personal SOC), an AI-driven malicious URL detector, and a Windows clipboard security tool. Seeking internship opportunities for my 10th semester starting Jan 2026.
        </motion.p>

        <motion.div className="flex gap-3 mt-6" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}}>
          <a href="https://github.com/ASLAH-K" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md card font-medium btn-ghost">GitHub</a>
          <a href="https://www.linkedin.com/in/muhammed-aslah-k-86783836a/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md card font-medium btn-ghost">LinkedIn</a>
          <a href="/resume.pdf" className="px-4 py-2 rounded-md card font-medium btn-ghost" download>Resume</a>
        </motion.div>
      </div>

      <motion.div initial={{scale:0.98,opacity:0}} animate={{scale:1,opacity:1}} transition={{delay:0.4}} className="card p-6 rounded-lg">
        <div className="text-sm text-slate-400">Contact</div>
        <div className="mt-2 text-lg font-semibold">mhdaslah.k@gmail.com</div>
        <div className="mt-1 text-sm text-slate-400">Kozhikode, Kerala, India</div>

        <div className="mt-4">
          <h4 className="text-sm text-slate-300">Skills</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {['Python','Flask','OSINT','AI/ML','Windows Internals','Random Forest','SQLite'].map(s=> (
              <span key={s} className="text-xs px-2 py-1 rounded-md" style={{background:'rgba(255,255,255,0.02)'}}>{s}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
