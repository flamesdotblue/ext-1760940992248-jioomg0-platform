import { User } from 'lucide-react'

const PRESETS = [
  {
    name: 'Spring Breeze',
    skinTone: '#f7d3c2',
    hairColor: '#2f2a28',
    hairStyle: 'medium',
    bg: { from: '#fdf2f8', to: '#e0f2fe' },
    accent: '#8b5cf6',
  },
  {
    name: 'Sunset Reader',
    skinTone: '#e7b89d',
    hairColor: '#5a3e36',
    hairStyle: 'long',
    bg: { from: '#fff7ed', to: '#fef2f2' },
    accent: '#ef4444',
  },
  {
    name: 'Cool Morning',
    skinTone: '#c98e6d',
    hairColor: '#1f2937',
    hairStyle: 'short',
    bg: { from: '#ecfeff', to: '#f0fdfa' },
    accent: '#0ea5e9',
  },
]

export default function Gallery({ onSelect }) {
  return (
    <section className="mt-8">
      <div className="flex items-center gap-2 mb-3">
        <User className="text-slate-600" size={18} />
        <h3 className="text-sm font-semibold tracking-tight">Quick Presets</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {PRESETS.map((p) => (
          <button
            key={p.name}
            onClick={() => onSelect(p)}
            className="group rounded-xl border border-slate-200 bg-white overflow-hidden text-left hover:shadow-sm transition"
          >
            <div className="h-20 w-full" style={{ backgroundImage: `linear-gradient(135deg, ${p.bg.from}, ${p.bg.to})` }} />
            <div className="p-3">
              <div className="flex items-center gap-2">
                <span className="inline-block h-4 w-4 rounded-full border" style={{ background: p.skinTone }} />
                <span className="inline-block h-4 w-4 rounded-full border" style={{ background: p.hairColor }} />
                <span className="inline-block h-4 w-4 rounded-full border" style={{ background: p.accent }} />
              </div>
              <p className="mt-2 text-xs text-slate-600">{p.name}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
