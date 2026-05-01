import React from "react";

const logoSamples = [
  { initials: "AL", name: "Aurelian Luxe", type: "Luxury Monogram", style: "luxury", symbol: "◆" },
  { initials: "VC", name: "Velvet Crown", type: "Premium Boutique", style: "crown", symbol: "◆" },
  { initials: "NX", name: "Nexify", type: "Modern Startup", style: "tech", symbol: "N" },
  { initials: "CE", name: "CloudEdge", type: "Cloud Technology", style: "cloud", symbol: "☁" },
  { initials: "AS", name: "Artify Studio", type: "Creative Studio", style: "paint", symbol: "✦" },
  { initials: "CN", name: "ColorNest", type: "Colorful Design", style: "color", symbol: "C" },
  { initials: "TB", name: "Titan Builders", type: "Construction", style: "builder", symbol: "▰" },
  { initials: "PE", name: "Prime Estates", type: "Real Estate", style: "estate", symbol: "⌂" },
  { initials: "LB", name: "Lushia Beauty", type: "Beauty Brand", style: "beauty", symbol: "L" },
  { initials: "AW", name: "Aurora Wellness", type: "Wellness Brand", style: "wellness", symbol: "✿" },
  { initials: "BH", name: "BiteHub", type: "Food Delivery", style: "food", symbol: "☕" },
  { initials: "ST", name: "SpiceTrail", type: "Restaurant", style: "spice", symbol: "S" },
  { initials: "SP", name: "ShieldPro", type: "Security", style: "shield", symbol: "⬟" },
  { initials: "MN", name: "Monoline", type: "Minimal Line Art", style: "minimal", symbol: "M" },
  { initials: "VS", name: "Vertex Solutions", type: "Corporate", style: "corporate", symbol: "V" },
  { initials: "LD", name: "Linea Design", type: "Typography", style: "linea", symbol: "L" },
  { initials: "BS", name: "Belleza Skin", type: "Skincare", style: "skin", symbol: "B" },
  { initials: "GB", name: "GreenBite", type: "Healthy Food", style: "green", symbol: "☘" },
  { initials: "IC", name: "IronClad", type: "Industrial", style: "industrial", symbol: "⬢" },
  { initials: "DC", name: "DreamCanvas", type: "Art Brand", style: "canvas", symbol: "✺" },
];

const services = [
  "Custom logo design based on your brand idea",
  "Multiple logo concepts to choose from",
  "Modern, luxury, minimal, and creative styles",
  "Revisions to improve the final design",
  "High-quality files for social media, website, and print",
  "Simple branding kit with colors and style guidance",
];

function LogoArtwork({ logo }) {
  const base = "relative w-full h-full min-h-[230px] rounded-3xl flex flex-col items-center justify-center text-center overflow-hidden p-6";

  if (logo.style === "luxury") {
    return <div className={`${base} bg-black text-yellow-500 border border-yellow-500/40`}><div className="absolute inset-5 rounded-full border border-yellow-500/30" /><p className="text-5xl mb-2">{logo.symbol}</p><p className="font-serif text-6xl">{logo.initials}</p><p className="tracking-[0.35em] text-xs mt-4">{logo.name}</p></div>;
  }
  if (logo.style === "crown") {
    return <div className={`${base} bg-gradient-to-br from-zinc-950 to-yellow-950 text-white`}><div className="text-yellow-400 text-5xl mb-3">♕</div><div className="font-serif text-5xl text-yellow-400">{logo.initials}</div><div className="w-24 h-px bg-yellow-400 my-4" /><p className="uppercase tracking-widest text-sm">{logo.name}</p></div>;
  }
  if (logo.style === "tech") {
    return <div className={`${base} bg-gradient-to-br from-blue-50 to-cyan-100 text-slate-900`}><div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white font-black text-5xl rotate-6">N</div><p className="text-3xl font-black mt-5 lowercase">{logo.name}</p><p className="text-xs tracking-widest text-blue-700">DIGITAL STARTUP</p></div>;
  }
  if (logo.style === "cloud") {
    return <div className={`${base} bg-white text-blue-700 border border-blue-100`}><div className="text-7xl mb-2">☁</div><p className="text-3xl font-bold tracking-wide">CloudEdge</p><p className="text-xs tracking-[0.3em] text-slate-500">TECHNOLOGIES</p></div>;
  }
  if (logo.style === "paint") {
    return <div className={`${base} bg-white text-white`}><div className="absolute w-56 h-24 bg-fuchsia-500 rounded-full rotate-[-14deg]" /><div className="absolute w-56 h-24 bg-blue-600 rounded-full rotate-[12deg] opacity-90" /><div className="absolute w-48 h-20 bg-purple-700 rounded-full rotate-[2deg] opacity-90" /><p className="relative font-serif text-4xl">Artify</p><p className="relative text-xs tracking-[0.3em]">STUDIO</p></div>;
  }
  if (logo.style === "color") {
    return <div className={`${base} bg-white`}><div className="relative w-28 h-28 mb-5"><div className="absolute inset-0 rounded-full border-[18px] border-orange-400" /><div className="absolute inset-3 rounded-full border-[18px] border-pink-500 rotate-45" /><div className="absolute inset-6 rounded-full border-[14px] border-blue-500" /></div><p className="text-3xl font-bold text-slate-900">ColorNest</p><p className="text-xs text-slate-500 tracking-widest">CREATIVE HUB</p></div>;
  }
  if (logo.style === "builder") {
    return <div className={`${base} bg-zinc-950 text-white`}><div className="w-28 h-28 border-[10px] border-yellow-500 rounded-t-3xl flex items-end justify-center pb-4"><p className="text-4xl font-black">T</p></div><p className="text-3xl font-black mt-5">TITAN</p><p className="text-yellow-400 tracking-[0.3em] text-xs">BUILDERS</p></div>;
  }
  if (logo.style === "estate") {
    return <div className={`${base} bg-white text-zinc-900`}><div className="flex items-end gap-2 mb-5"><div className="w-10 h-24 bg-yellow-600" /><div className="w-10 h-16 bg-black" /><div className="w-10 h-28 bg-yellow-500" /></div><p className="font-serif text-3xl tracking-wider">PRIME</p><p className="text-yellow-700 tracking-[0.3em] text-xs">ESTATES</p></div>;
  }
  if (logo.style === "beauty") {
    return <div className={`${base} bg-pink-50 text-pink-500`}><p className="font-serif italic text-7xl">L</p><div className="w-24 h-px bg-pink-300 my-3" /><p className="font-serif text-3xl">Lushia</p><p className="tracking-[0.3em] text-xs">BEAUTY</p></div>;
  }
  if (logo.style === "wellness") {
    return <div className={`${base} bg-white text-teal-700`}><div className="relative w-32 h-24 mb-4"><div className="absolute left-6 top-6 w-20 h-16 rounded-full border-4 border-purple-400 rotate-45" /><div className="absolute left-10 top-2 w-20 h-16 rounded-full border-4 border-teal-400 rotate-[-45deg]" /><div className="absolute left-2 top-8 w-20 h-16 rounded-full border-4 border-cyan-400 rotate-[20deg]" /></div><p className="font-serif text-3xl">Aurora</p><p className="tracking-widest text-xs">WELLNESS</p></div>;
  }
  if (logo.style === "food") {
    return <div className={`${base} bg-orange-50 text-orange-600`}><div className="text-7xl mb-3">☕</div><p className="text-3xl font-black text-zinc-900">BiteHub</p><p className="text-xs tracking-widest">GOOD FOOD, GOOD MOOD</p></div>;
  }
  if (logo.style === "spice") {
    return <div className={`${base} bg-red-50 text-red-600`}><div className="w-28 h-28 rounded-full border-8 border-red-500 flex items-center justify-center text-6xl font-serif italic">S</div><p className="text-3xl font-bold mt-5">SpiceTrail</p><p className="text-xs tracking-widest text-orange-700">FLAVORS OF INDIA</p></div>;
  }
  if (logo.style === "shield") {
    return <div className={`${base} bg-zinc-950 text-white`}><div className="w-28 h-32 bg-blue-600 clip-shield flex items-center justify-center text-5xl font-black">S</div><p className="text-3xl font-black mt-5">SHIELDPRO</p><p className="text-blue-300 tracking-widest text-xs">SECURITY</p></div>;
  }
  if (logo.style === "minimal") {
    return <div className={`${base} bg-white text-black`}><div className="w-32 h-32 border-l-8 border-t-8 border-black rotate-45 mb-4" /><p className="tracking-[0.45em] text-lg">MONOLINE</p></div>;
  }
  if (logo.style === "corporate") {
    return <div className={`${base} bg-slate-900 text-white`}><div className="w-0 h-0 border-l-[48px] border-r-[48px] border-b-[90px] border-l-transparent border-r-transparent border-b-yellow-500 mb-5" /><p className="text-3xl font-bold">VERTEX</p><p className="tracking-widest text-xs text-slate-300">SOLUTIONS</p></div>;
  }
  if (logo.style === "linea") {
    return <div className={`${base} bg-white text-zinc-900`}><div className="w-32 h-32 border-r-8 border-b-8 border-zinc-900 rounded-br-3xl mb-5" /><p className="tracking-[0.5em] text-xl">LINEA</p></div>;
  }
  if (logo.style === "skin") {
    return <div className={`${base} bg-rose-50 text-rose-700`}><div className="w-28 h-28 rounded-full border-4 border-rose-300 flex items-center justify-center font-serif text-6xl">B</div><p className="font-serif text-3xl mt-5">Belleza</p><p className="tracking-widest text-xs">SKINCARE</p></div>;
  }
  if (logo.style === "green") {
    return <div className={`${base} bg-green-50 text-green-700`}><div className="text-7xl mb-2">☘</div><p className="text-3xl font-bold">GreenBite</p><p className="tracking-widest text-xs">HEALTHY LIVING</p></div>;
  }
  if (logo.style === "industrial") {
    return <div className={`${base} bg-zinc-900 text-white`}><div className="w-32 h-24 bg-gradient-to-br from-red-700 to-zinc-700 rotate-45 flex items-center justify-center mb-8"><span className="-rotate-45 text-4xl font-black">IC</span></div><p className="font-serif text-3xl">IronClad</p><p className="tracking-widest text-xs text-zinc-400">SOLUTIONS</p></div>;
  }
  return <div className={`${base} bg-purple-50 text-purple-700`}><div className="text-7xl mb-3">✺</div><p className="font-serif text-3xl">DreamCanvas</p><p className="tracking-widest text-xs">ART & DESIGN</p></div>;
}

export default function AymberStudioPortfolio() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-8 max-w-7xl mx-auto">
        <nav className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500 text-black flex items-center justify-center font-serif text-xl font-bold">
              AS
            </div>
            <div>
              <h1 className="text-xl font-serif tracking-wide">Aymber Studio</h1>
              <p className="text-xs uppercase tracking-widest text-zinc-400">Logo Design Portfolio</p>
            </div>
          </div>
          <a
            href="mailto:Ambershehzadi912@gmail.com"
            className="hidden sm:inline-block rounded-full border border-yellow-500 px-5 py-2 text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
          >
            Contact Me
          </a>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          <div>
            <p className="text-yellow-400 uppercase tracking-widest text-sm mb-5">Professional Logo Designer</p>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              I create logos that make your brand look professional.
            </h2>
            <p className="mt-6 text-lg text-zinc-300 leading-8 max-w-xl">
              Hi, I am Aymber. At Aymber Studio, I design modern, minimal, luxury, creative, and business logos for clients who want a clean and memorable brand identity.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#portfolio" className="rounded-full bg-yellow-500 text-black px-7 py-4 font-semibold text-center hover:bg-yellow-400 transition">
                View Logo Samples
              </a>
              <a href="mailto:Ambershehzadi912@gmail.com" className="rounded-full border border-white/20 px-7 py-4 font-semibold text-center hover:bg-white/10 transition">
                Discuss Your Logo
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-500/30 bg-zinc-950 p-8 shadow-2xl">
            <div className="aspect-square rounded-3xl border border-yellow-500/30 bg-gradient-to-br from-zinc-950 to-yellow-950 flex flex-col items-center justify-center text-center p-8">
              <p className="font-serif text-8xl text-yellow-500">AS</p>
              <div className="w-32 h-px bg-yellow-500 my-6" />
              <p className="text-4xl font-serif tracking-widest">AYMBER</p>
              <p className="text-yellow-400 tracking-[0.4em] mt-2">STUDIO</p>
              <p className="mt-6 text-zinc-400">Creative Logo Designer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          <div>
            <p className="text-yellow-700 uppercase tracking-widest text-sm font-semibold">About Me</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">Clean logos for serious brands.</h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-lg text-zinc-700 leading-8">
              I help small businesses, startups, beauty brands, restaurants, and service-based companies create professional logo identities. My goal is to understand your idea and turn it into a clean, memorable, and professional design.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="rounded-2xl bg-zinc-100 p-5 border">Creative Design</div>
              <div className="rounded-2xl bg-zinc-100 p-5 border">Client Focused</div>
              <div className="rounded-2xl bg-zinc-100 p-5 border">Professional Delivery</div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-zinc-100 text-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-700 uppercase tracking-widest text-sm font-semibold">Sample Work</p>
            <h2 className="font-serif text-4xl md:text-6xl mt-3">20 Logo Concepts</h2>
            <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
              These logo samples show different styles I can create for clients, including luxury, minimal, startup, creative, beauty, food, real estate, and corporate branding.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {logoSamples.map((logo) => (
              <div key={logo.name} className="rounded-3xl bg-white border border-zinc-200 shadow-sm overflow-hidden hover:shadow-xl transition">
                <div className="aspect-square p-4 bg-gradient-to-br from-white to-zinc-100">
                  <LogoArtwork logo={logo} />
                </div>
                <div className="p-5 border-t border-zinc-100">
                  <p className="font-semibold text-lg">{logo.name}</p>
                  <p className="text-sm text-zinc-500 mt-1">{logo.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .clip-shield {
          clip-path: polygon(50% 0%, 95% 18%, 82% 86%, 50% 100%, 18% 86%, 5% 18%);
        }
      `}</style>

      <section className="bg-white text-black py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-yellow-700 uppercase tracking-widest text-sm font-semibold">Services</p>
            <h2 className="font-serif text-4xl md:text-6xl mt-3">What I can create for you</h2>
          </div>
          <div className="space-y-4">
            {services.map((service) => (
              <div key={service} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-zinc-700">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-yellow-400 uppercase tracking-widest text-sm font-semibold">Branding Kit</p>
            <h2 className="font-serif text-4xl md:text-6xl mt-3">Aymber Studio Identity</h2>
            <p className="mt-5 text-zinc-400 leading-8">
              Aymber Studio uses a luxury black, gold, white, and soft gray identity. This style feels premium, clean, creative, and trustworthy.
            </p>
          </div>
          <div className="rounded-3xl bg-zinc-950 border border-yellow-500/30 p-8">
            <div className="grid grid-cols-4 gap-4">
              <div className="h-24 rounded-2xl bg-yellow-500" />
              <div className="h-24 rounded-2xl bg-black border border-zinc-700" />
              <div className="h-24 rounded-2xl bg-white" />
              <div className="h-24 rounded-2xl bg-zinc-200" />
            </div>
            <div className="mt-8 space-y-4 text-zinc-300">
              <p><strong className="text-white">Colors:</strong> Gold, Black, White, Soft Gray</p>
              <p><strong className="text-white">Style:</strong> Elegant, modern, minimal, and luxury</p>
              <p><strong className="text-white">Best for:</strong> Logos, branding, social media, and business identity</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 text-black py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-yellow-700 uppercase tracking-widest text-sm font-semibold">Let us work together</p>
          <h2 className="font-serif text-4xl md:text-6xl mt-3">Ready to create your logo?</h2>
          <p className="mt-5 text-lg text-zinc-700 leading-8">
            Send me your business name, logo idea, preferred colors, and style. I will help you create a professional logo that represents your brand.
          </p>
          <a href="mailto:Ambershehzadi912@gmail.com" className="mt-8 inline-block rounded-full bg-black text-white px-8 py-4 font-semibold hover:bg-yellow-500 hover:text-black transition">
            Ambershehzadi912@gmail.com
          </a>
        </div>
      </section>

      <footer className="bg-black text-zinc-500 text-center py-8 border-t border-white/10">
        © 2026 Aymber Studio. Creative Logo Design Portfolio.
      </footer>
    </main>
  );
}
