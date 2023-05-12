import React, { useEffect, useState } from 'react'
import RickText from '../property/RickText'
import Button from '../property/Button'
import { useDispatch } from 'react-redux'
import { rickTextProfile } from '../../redux/property'
function ProfileContent() {
  const [profile, setProfil] = useState("")
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(rickTextProfile(profile))
  }, [profile])

  return (
    <div className='profile' style={{
      marginBottom: "50px"
    }}>
      <hr />
      <RickText span="Açıklama" compName="Profile" setProfil={setProfil} />
      <Button />
    </div>

  )
}

export default ProfileContent