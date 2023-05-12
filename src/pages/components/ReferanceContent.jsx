import React from 'react'
import Inputs from '../property/Inputs'
import Button from '../property/Button'

function ReferanceContent() {
  return (
    <div style={{
      marginBottom: "50px"
    }}>
      <input type='checkbox' />
      <hr />
      <Inputs compName="Referances" onespan="Şirket Adı" onePlace="" twospan="İletişim Kişisi" twoPlace />
      <Inputs compName="Referances" onespan="Telefon Numarası" onePlace="" twospan="E-posta Adresi" twoPlace />
      <Button />
    </div>
  )
}

export default ReferanceContent