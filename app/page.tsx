export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
      {/* NAV */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="font-bold text-xl tracking-tight">LAUNCH.</div>
        <div className="hidden md:flex gap-8 text-sm text-zinc-400">
          <span>Work</span><span>Pricing</span><span>About</span>
        </div>
        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium">Start Project</button>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1 text-xs text-zinc-400 mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Available for new projects
        </div>
        <h1 className="text-[12vw] md:text-[9vw] leading-[0.85] font-black tracking-tighter">
          WE BUILD<br />BRANDS<br /><span className="text-zinc-600">THAT LAUNCH.</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-12">
          <p className="text-zinc-400 max-w-md text-lg leading-relaxed">
            Premium landing pages for founders who need to ship fast and look expensive. Delivered in 48 hours.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium">View Recent Work</button>
            <button className="border border-zinc-800 px-8 py-4 rounded-full">Book a Call</button>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="grid md:grid-cols-3 gap-px bg-zinc-800 border-y border-zinc-800">
        {[
          { k: "01", t: "Strategy First", d: "No templates. Every pixel is built to convert your specific audience." },
          { k: "02", t: "Ship in 48h", d: "From idea to live link in two days. No endless revisions." },
          { k: "03", t: "Built to Convert", d: "Copy, design, and animations that make people click buy." },
        ].map(i => (
          <div key={i.k} className="bg-[#0a0a0a] p-12">
            <div className="text-zinc-600 text-sm mb-8">{i.k}</div>
            <h3 className="text-2xl font-semibold mb-4">{i.t}</h3>
            <p className="text-zinc-500 leading-relaxed">{i.d}</p>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 py-12 flex justify-between text-xs text-zinc-600">
        <span>© 2026 LAUNCH — Lagos, NG</span>
        <span>Built for Fiverr Clients</span>
      </footer>
    </main>
  )
}