import React from 'react'
import Inputs from '../property/Inputs'
import Button from '../property/Button'

function ReferanceContent() {
  // const [inputCityHandleChange, setInputCityHandleChange] = useState("")
  // useEffect(() => {
  //   dispatch(inputsCity(inputCityHandleChange))
  // }, [inputCityHandleChange]);

  // const [workHandleChange, setWorkHandleChange] = useState("")
  // useEffect(() => {
  //   dispatch(inputsWork(workHandleChange))
  // }, [workHandleChange]);
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