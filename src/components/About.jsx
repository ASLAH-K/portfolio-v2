import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="mt-12">
      <motion.h2 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className="text-2xl font-bold mb-3">About</motion.h2>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} className="text-slate-300 max-w-3xl">
        I am a final-year B.Tech–M.Tech student in Cybersecurity (2021–2026). I develop lightweight, practical security tools focused on detection and local privacy: pSOC — a Personal Security Operations Center for Windows, an AI-driven malicious URL detector built with Random Forest and lexical features, and ClipGuardian, a clipboard monitoring tool for Windows. I completed a one-month internship at Kerala Police Cyber Crime unit and hold certifications including Cisco Ethical Hacker and IBM Python 101.
      </motion.p>
    </section>
  )
}
