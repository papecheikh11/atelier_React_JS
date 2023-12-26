import React from 'react'

const Input = ({content, type, value, onChange, name}) => {
  return (
    <div className="col-lg-6 my-3">
      <label>{content}</label>
      <input className='form-control' type={type} value={value} onChange={onChange} name={name}/>
    </div>
  )
}

export default Input
