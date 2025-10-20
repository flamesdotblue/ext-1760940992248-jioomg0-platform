import { Palette, Settings, Wand2 } from 'lucide-react'

const SKIN_PRESETS = ['#f8e0d2', '#f7d3c2', '#e7b89d', '#c98e6d', '#9c6a4d', '#744c33']
const HAIR_PRESETS = ['#2f2a28', '#5a3e36', '#7a523a', '#b4834a', '#1f2937', '#0f172a']
const BG_PRESETS = [
  { from: '#fdf2f8', to: '#e0f2fe' },
  { from: '#f1f5f9', to: '#e2e8f0' },
  { from: '#ecfeff', to: '#f0fdfa' },
  { from: '#fff7ed', to: '#fef2f2' },
]
const ACCENT_PRESETS = ['#8b5cf6', '#ef4444', '#10b981', '#0ea5e9', '#f59e0b']

export default function StyleControls({
  skinTone,
  setSkinTone,
  hairColor,
  setHairColor,
  hairStyle,
  setHairStyle,
  bg,
  setBg,
  accent,
  setAccent,
}) {
  const randomize = () => {
    const r = (arr) => arr[Math.floor(Math.random() * arr.length)]
    setSkinTone(r(SKIN_PRESETS))
    setHairColor(r(HAIR_PRESETS))
    setHairStyle(r(['short', 'medium', 'long']))
    setBg(r(BG_PRESETS))
    setAccent(r(ACCENT_PRESETS))
  }

  return (
    <section id="controls" className="bg-white/80 border border-slate-200 rounded-2xl p-4 lg:p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Settings className="text-slate-600" size={18} />
        <h2 className="text-sm font-semibold tracking-tight">Style Controls</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="text-xs font-medium text-slate-600">Hair Style</label>
          <div className="mt-2 flex gap-2">
            {['short', 'medium', 'long'].map((s) => (
              <button
                key={s}
                onClick={() => setHairStyle(s)}
                className={`px-3 py-1.5 rounded-full text-xs border transition ${
                  hairStyle === s
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white hover:bg-slate-50 border-slate-300'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-slate-600">Skin Tone</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {SKIN_PRESETS.map((c) => (
              <button
                key={c}
                onClick={() => setSkinTone(c)}
                className={`h-8 w-8 rounded-full border ${skinTone === c ? 'ring-2 ring-slate-900' : ''}`}
                style={{ backgroundColor: c }}
                aria-label={`Set skin tone ${c}`}
              />
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-slate-600">Hair Color</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {HAIR_PRESETS.map((c) => (
              <button
                key={c}
                onClick={() => setHairColor(c)}
                className={`h-8 w-8 rounded-full border ${hairColor === c ? 'ring-2 ring-slate-900' : ''}`}
                style={{ backgroundColor: c }}
                aria-label={`Set hair color ${c}`}
              />
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-slate-600">Background</label>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {BG_PRESETS.map((g, i) => (
              <button
                key={i}
                onClick={() => setBg(g)}
                className={`h-10 rounded-lg border ${bg.from === g.from && bg.to === g.to ? 'ring-2 ring-slate-900' : ''}`}
                style={{
                  backgroundImage: `linear-gradient(135deg, ${g.from}, ${g.to})`,
                }}
                aria-label={`Set background ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="text-xs font-medium text-slate-600">Accent</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {ACCENT_PRESETS.map((c) => (
              <button
                key={c}
                onClick={() => setAccent(c)}
                className={`h-8 px-3 rounded-full border text-xs ${accent === c ? 'ring-2 ring-slate-900' : ''}`}
                style={{ backgroundColor: c, color: '#fff', borderColor: 'rgba(0,0,0,0.1)' }}
              >
                <div className="flex items-center gap-2">
                  <Palette size={14} />
                  {c}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={randomize}
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white text-sm px-3 py-2 hover:bg-slate-800 active:translate-y-px transition"
        >
          <Wand2 size={16} />
          Surprise me
        </button>
      </div>
    </section>
  )
}
