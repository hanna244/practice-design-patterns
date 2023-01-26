import React from 'react'

type SampleTextInput = {
  id: string
  label: string
} & React.ComponentProps<'input'>

const SampleTextInput = ({ id, label, ...restProps }: SampleTextInput) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type='text' name={id} id={id} {...restProps} />
    </div>
  )
}

export default SampleTextInput
