import React, { useEffect, useState } from 'react'
import Inputs from '../property/Inputs'
import Input from '../property/Input'
import Selected from '../property/Selected'
import RickText from '../property/RickText'
import Button from '../property/Button'
import { useDispatch } from 'react-redux'
import { rickTextProfile } from '../../redux/property'
import { inputChangeValue } from '../../redux/inputChange'
import inputsCity from '../../redux/inputsCity'
import inputsWork from '../../redux/inputsWork'

function WorkExpContent() {
  const [profile, setProfil] = useState("")
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  useEffect(() => {
    dispatch(inputChangeValue(input))
  }, [input]);

  const [inputCityHandleChange, setInputCityHandleChange] = useState("")
  useEffect(() => {
    dispatch(inputsCity(inputCityHandleChange))
  }, [inputCityHandleChange]);

  const [workHandleChange, setWorkHandleChange] = useState("")
  useEffect(() => {
    dispatch(inputsWork(workHandleChange))
  }, [workHandleChange]);

  useEffect(() => {
    dispatch(rickTextProfile(profile))
  }, [profile])
  const moons = [
    { moon: "Gösterme" },
    { moon: "Yalnızca yılı göster" },
    { moon: "Ocak" },
    { moon: "Şubat" },
    { moon: "Mart" },
    { moon: "Nisan" },
    { moon: "Mayıs" },
    { moon: "Haziran" },
    { moon: "Temmuz" },
    { moon: "Ağustos" },
    { moon: "Eylül" },
    { moon: "Ekim" },
    { moon: "Kasım" },
    { moon: "Aralık" }
  ]

  const twoMoons = [
    { moon: "Halen" },
    { moon: "Gösterme" },
    { moon: "Yalnızca yılı göster" },
    { moon: "Ocak" },
    { moon: "Şubat" },
    { moon: "Mart" },
    { moon: "Nisan" },
    { moon: "Mayıs" },
    { moon: "Haziran" },
    { moon: "Temmuz" },
    { moon: "Ağustos" },
    { moon: "Eylül" },
    { moon: "Ekim" },
    { moon: "Kasım" },
    { moon: "Aralık" }
  ]

  const currentYear = new Date().getFullYear();

  const years = [];

  for (let i = currentYear - 10; i <= currentYear + 10; i++) {
    years.push(i);
  }

  return (
    <div style={{
      marginBottom: "50px"
    }}>
      <hr />
      <Inputs setInputCityHandleChange={setInputCityHandleChange} setWorkHandleChange={setWorkHandleChange} compName="WorkExp" onespan="İş Unvanı" onePlace="örn. Satış Yönetiçisi" twospan="Şehir/İlçe" twoPlace="örn. İstanbul" />
      <Input setInput={setInput} compName="WorkExp" span="İşveren" place="örn. PwC" />
      <Selected compName="WorkExp" onespan="Başlangıç Tarihi" onemoon={moons} oneyil={years} twospan="Bitiş Tarihi" twomoon={twoMoons} twoyil={years} />
      <RickText setProfil={setProfil} compName="WorkExp"  span="Açıklama" />
      <Button />
    </div>
  )
}

export default WorkExpContent