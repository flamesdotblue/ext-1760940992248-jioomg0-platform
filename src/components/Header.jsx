import { Sparkles } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-violet-100 text-violet-700">
            <Sparkles size={20} />
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight">Wholesome Portrait Maker</h1>
            <p className="text-xs text-slate-500">Create a tasteful, friendly illustration</p>
          </div>
        </div>
        <a
          className="text-xs text-slate-500 hover:text-slate-700 transition"
          href="#controls"
        >
          Customize
        </a>
      </div>
    </header>
  )
}
