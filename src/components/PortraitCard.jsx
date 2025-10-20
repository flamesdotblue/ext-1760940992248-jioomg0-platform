import { BookOpen } from 'lucide-react'

function Hair({ style, color }) {
  // Simple, friendly shapes for hair styles
  if (style === 'short') {
    return (
      <g>
        <path d="M50 55 C 30 60, 30 95, 50 100 L 150 100 C 170 95, 170 60, 150 55 Z" fill={color} />
      </g>
    )
  }
  if (style === 'long') {
    return (
      <g>
        <path d="M45 55 C 25 70, 25 140, 55 160 C 75 175, 125 175, 145 160 C 175 140, 175 70, 155 55 Z" fill={color} />
        <path d="M60 160 C 80 180, 120 180, 140 160" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" />
      </g>
    )
  }
  // medium default
  return (
    <g>
      <path d="M50 55 C 30 70, 35 120, 60 130 L 140 130 C 165 120, 170 70, 150 55 Z" fill={color} />
    </g>
  )
}

export default function PortraitCard({ skinTone, hairColor, hairStyle, bg, accent }) {
  return (
    <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-sm bg-white">
      <div
        className="relative h-[520px] w-full"
        style={{ backgroundImage: `linear-gradient(135deg, ${bg.from}, ${bg.to})` }}
      >
        <svg viewBox="0 0 200 220" className="absolute inset-0 h-full w-full">
          {/* Subtle backdrop circle */}
          <circle cx="100" cy="110" r="90" fill="rgba(255,255,255,0.6)" />

          {/* Shoulders and torso (hoodie) */}
          <path d="M40 180 C 60 150, 140 150, 160 180 L 160 210 L 40 210 Z" fill={accent} />
          <path d="M85 135 C 80 150, 120 150, 115 135" fill="#ffffff" opacity="0.6" />

          {/* Neck */}
          <rect x="90" y="120" width="20" height="18" rx="6" fill={skinTone} />

          {/* Face */}
          <ellipse cx="100" cy="95" rx="35" ry="40" fill={skinTone} />

          {/* Hair */}
          <Hair style={hairStyle} color={hairColor} />

          {/* Eyes */}
          <circle cx="87" cy="95" r="3" fill="#1f2937" />
          <circle cx="113" cy="95" r="3" fill="#1f2937" />

          {/* Brows */}
          <path d="M78 90 C 84 85, 90 85, 96 90" stroke="#1f2937" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M104 90 C 110 85, 116 85, 122 90" stroke="#1f2937" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Nose */}
          <path d="M100 95 C 100 105, 97 106, 96 108" stroke="#7c6f64" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Smile */}
          <path d="M88 114 C 95 120, 105 120, 112 114" stroke="#7c6f64" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Book accessory for wholesome vibe */}
          <g transform="translate(60,168)">
            <rect x="0" y="0" width="80" height="20" rx="4" fill="#ffffff" opacity="0.9" />
            <rect x="3" y="2" width="74" height="16" rx="3" fill="#e2e8f0" />
          </g>

          {/* Subtle blush */}
          <ellipse cx="82" cy="108" rx="6" ry="3" fill="#f8cdd1" opacity="0.5" />
          <ellipse cx="118" cy="108" rx="6" ry="3" fill="#f8cdd1" opacity="0.5" />
        </svg>

        <div className="absolute left-4 top-4 px-2.5 py-1.5 rounded-full bg-white/80 border border-white text-[10px] font-medium tracking-wide text-slate-700 backdrop-blur-sm">
          Friendly portrait
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-slate-600 text-sm">
          <BookOpen size={16} />
          <span>Study break with a smile</span>
        </div>
      </div>
    </div>
  )
}
