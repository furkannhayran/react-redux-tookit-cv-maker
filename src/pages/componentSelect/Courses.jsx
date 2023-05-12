import React, { useEffect, useState } from 'react'
import Inputs from '../property/Inputs'
import RickText from '../property/RickText';
import Button from '../property/Button';
import Selected from '../property/Selected';
import { useDispatch } from 'react-redux';
import { rickTextProfile } from '../../redux/property';

function Courses() {
  const [profile, setProfil] = useState("")
  const dispatch = useDispatch()
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
    <div>
      <Inputs compName="Courses" onespan="Kurs" onePlace="örn. Finanasal Yönetim"  twospan="Kurum" twoPlace = "örn. London business Scholl"/>
      <Selected compName="Courses" onespan="Başlangıç Tarihi" onemoon={moons} oneyil={years} twospan="Bitiş Tarihi" twomoon={twoMoons} twoyil={years} />
      <RickText compName="Courses" setProfil={setProfil} span="Açıklama"/>
      <Button/>
    </div>
  )
}

export default Courses