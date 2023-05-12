import React, { useEffect, useState } from 'react'
import RickText from '../property/RickText'
import ButtonSave from '../property/ButtonSave'
import { useDispatch } from 'react-redux'
import { rickTextProfile } from '../../redux/property'

function Publication() {
  const [profile, setProfil] = useState("")
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(rickTextProfile(profile))
  }, [profile])
  return (
    <div>

      <hr />
      <RickText compName="Publication" setProfil={setProfil} span="Açıklama" />
      <ButtonSave />
    </div>
  )
}

export default Publication