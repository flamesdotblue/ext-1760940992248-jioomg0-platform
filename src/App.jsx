import { useState } from 'react'
import Header from './components/Header'
import StyleControls from './components/StyleControls'
import PortraitCard from './components/PortraitCard'
import Gallery from './components/Gallery'

function App() {
  const [skinTone, setSkinTone] = useState('#f7d3c2')
  const [hairColor, setHairColor] = useState('#2f2a28')
  const [hairStyle, setHairStyle] = useState('medium')
  const [bg, setBg] = useState({ from: '#fdf2f8', to: '#e0f2fe' })
  const [accent, setAccent] = useState('#8b5cf6')

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-2 lg:order-1">
            <StyleControls
              skinTone={skinTone}
              setSkinTone={setSkinTone}
              hairColor={hairColor}
              setHairColor={setHairColor}
              hairStyle={hairStyle}
              setHairStyle={setHairStyle}
              bg={bg}
              setBg={setBg}
              accent={accent}
              setAccent={setAccent}
            />
            <Gallery
              onSelect={(preset) => {
                setSkinTone(preset.skinTone)
                setHairColor(preset.hairColor)
                setHairStyle(preset.hairStyle)
                setBg(preset.bg)
                setAccent(preset.accent)
              }}
            />
          </div>
          <div className="order-1 lg:order-2">
            <PortraitCard
              skinTone={skinTone}
              hairColor={hairColor}
              hairStyle={hairStyle}
              bg={bg}
              accent={accent}
            />
          </div>
        </div>
        <p className="mt-10 text-sm text-slate-600 leading-relaxed">
          This app renders a wholesome, non-photorealistic illustration of a young student. It avoids any sexualized depiction and focuses on friendly, age-appropriate aesthetics.
        </p>
      </main>
    </div>
  )
}

export default App
