import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'pSOC — Personal Security Operations Center',
    description: 'Lightweight Windows endpoint monitoring. Collects system events, applies rule-based detection, stores encrypted records in SQLite with tamper-evident hashes, and visualizes events on a Flask dashboard.',
    tags: ['Python','Flask','Windows','SQLite','Rule Engine'],
    github: 'https://github.com/ASLAH-K/psoc'
  },
  {
    title: 'AI-Driven Malicious URL Detection',
    description: 'Real-time URL classifier using lexical features + Random Forest model; provides probability & weight-based risk scores with >98% accuracy.',
    tags: ['Python','Flask','Random Forest','AI/ML'],
    github: 'https://github.com/ASLAH-K/Malicious_URL_Detector'
  },
  {
    title: 'ClipGuardian — Clipboard Monitor',
    description: 'Windows clipboard monitor that detects sensitive data, phishing URLs, and leaked credentials; supports alerts and GUI themes.',
    tags: ['Python','Tkinter','pywin32','OSINT'],
    github: 'https://github.com/ASLAH-K/ClipGuardian'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(p=> <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}
