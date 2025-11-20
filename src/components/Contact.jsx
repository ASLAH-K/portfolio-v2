import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6 rounded-md">
          <h3 className="font-semibold">Get in touch</h3>
          <p className="text-slate-400 mt-2 text-sm">I'm available for internships and collaborations. My 10th-semester internship window starts January 2026.</p>

          <div className="mt-4">
            <p className="text-sm text-slate-300">Email</p>
            <div className="font-medium">mhdaslah.k@gmail.com</div>
            <p className="text-sm text-slate-400 mt-2">Location</p>
            <div className="font-medium">Kozhikode, Kerala, India</div>
          </div>

          <div className="mt-6 flex gap-3">
            <a href="https://github.com/ASLAH-K" target="_blank" rel="noreferrer" className="px-3 py-2 card rounded-md">GitHub</a>
            <a href="https://www.linkedin.com/in/muhammed-aslah-k-86783836a/" target="_blank" rel="noreferrer" className="px-3 py-2 card rounded-md">LinkedIn</a>
          </div>
        </div>

        <form action="https://formsubmit.co/mhdaslah.k@gmail.com" method="POST" className="card p-6 rounded-md">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />

          <label className="block text-sm text-slate-300">Your name</label>
          <input name="name" required className="w-full mt-2 p-2 rounded-md bg-transparent border border-white/5" />

          <label className="block text-sm text-slate-300 mt-4">Your email</label>
          <input name="email" type="email" required className="w-full mt-2 p-2 rounded-md bg-transparent border border-white/5" />

          <label className="block text-sm text-slate-300 mt-4">Message</label>
          <textarea name="message" rows="5" required className="w-full mt-2 p-2 rounded-md bg-transparent border border-white/5"></textarea>

          <button type="submit" className="mt-4 px-4 py-2 rounded-md card btn-ghost">Send message</button>
        </form>
      </div>
    </section>
  )
}
