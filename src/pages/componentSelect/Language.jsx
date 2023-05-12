import React, { useState } from 'react'
import OneSelected from '../property/OneSelected'
import Button from '../property/Button'
function Language() {
  const [state, setState] = useState([
    { label: "Seç", value: "" },
    { label: "Ana Dil", value: "default" },
    { label: "Konuşma ve yazmaya fazlasıyla hakim", value: "exprt" },
    { label: "Çok iyi Hakimiyet", value: "dia" },
    { label: "Çok iyi hakimiyet", value: "plat" },
    { label: "İyi derecede çalışma bilgisi", value: "gold" },
    { label: "Çalışma Bilgisi", value: "silver" },
    { label: "a1", value: "a1" },
    { label: "a2", value: "a2" },
    { label: "b1", value: "b1" },
    { label: "b2", value: "b2" },
    { label: "c1", value: "c1" },
    { label: "c2", value: "c2" },
  ])
  return (
    <div>
      <hr />
      <div>
        <OneSelected compName="Language" onespan="Dil" place="örn. İspanyolca" twospan="Seviye" data={state} />
      </div>
      <Button />
    </div>
  )
}

export default Language