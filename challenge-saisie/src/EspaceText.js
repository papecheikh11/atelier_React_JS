import { useState } from "react";
import React from 'react'

const EspaceText = () => {
  const [value] = useState('')
  const handleChange = (e) => {
    value = e.target.value
  }
  return (
    <div className='col-lg-8'>
      <textarea onChange={handleChange}></textarea>
    </div>
  )
}

export default EspaceText
