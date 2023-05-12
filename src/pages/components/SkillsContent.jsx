import React, { useState } from 'react'
import Button from '../property/Button'
import OneSelected from '../property/OneSelected'

function SkillsContent() {
  const [state, setState] = useState(
    [
      { label: "Seviye Seç", value: "" },
      { label: "Uzman", value: "expert" },
      { label: "Deneyimli", value: "experies" },
      { label: "Yetenekli", value: "skill" },
      { label: "Başlangıç", value: "start" },
      { label: "Acemi", value: "base" }
    ]
  )
  return (
    <div style={{
      marginBottom:"50px"
    }}>
      <hr />
      <OneSelected compName = "Skills" onespan="Beceri" place="örn. Microsoft word" twospan="Seviye" data={state} />
      <Button />
    </div>
  )
}

export default SkillsContent