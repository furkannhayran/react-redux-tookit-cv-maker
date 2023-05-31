import React, { useEffect, useState } from 'react'
import Input from '../property/Input'
import Button from '../property/Button'
import { useDispatch } from 'react-redux';
import { inputChangeValue } from '../../redux/inputChange';
function InterestContent() {
  const dispatch = useDispatch()
  const [input, setInput] = useState("");
  useEffect(() => {
    dispatch(inputChangeValue(input))
  }, [input]);
  return (
    <div style={{
      marginBottom: "50px"
    }}>
      <hr />
      <Input setInput={setInput} span="Hobi" compName="Interest" place="örn. Doğa Yürüyüşü" />
      <Button />

    </div>

  )
}

export default InterestContent