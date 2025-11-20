import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({title, description, tags, github}){
  return (
    <motion.article whileHover={{y:-6}} className="p-5 rounded-lg card shadow-glow">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <a href={github} target="_blank" rel="noreferrer" className="text-sm text-cyber-400 underline">GitHub</a>
      </div>
      <p className="mt-3 text-slate-300 text-sm">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map(t=> <span key={t} className="text-xs px-2 py-1 rounded-md" style={{background:'rgba(255,255,255,0.02)'}}>{t}</span>)}
      </div>
    </motion.article>
  )
}
