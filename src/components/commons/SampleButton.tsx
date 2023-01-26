import React from 'react'

export type SampleButtonProps = {
  bgColor?: 'green' | 'coral' | 'white'
} & React.ComponentProps<'button'>

const SampleButton = ({ children, bgColor }: SampleButtonProps) => {
  return (
    <button
      type='button'
      title={children as string}
      style={{ border: '1px solid #000', padding: '10px', backgroundColor: `${bgColor}` }}
    >
      {children}
    </button>
  )
}

SampleButton.defaultProps = {
  bgColor: 'white',
}

export default SampleButton
