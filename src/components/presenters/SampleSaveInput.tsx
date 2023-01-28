import React from 'react'

import { SampleButton, SampleTextInput } from '../commons'

type SampleSaveInputProps = {
  id: string
  label: string
}

const SampleSaveInput = ({ id, label }: SampleSaveInputProps) => {
  return (
    <div style={{ display: 'flex' }}>
      <SampleTextInput
        id={id}
        placeholder={label}
        label={label}
        style={{ height: '100%', marginRight: '10px', fontSize: '13px' }}
      />
      <SampleButton>저장</SampleButton>
    </div>
  )
}

export default SampleSaveInput
