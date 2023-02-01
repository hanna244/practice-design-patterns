import React from 'react'

export type SampleCategoryProps = React.ComponentProps<'a'>

const SampleCategory = ({ children }: SampleCategoryProps) => {
  return (
    <span
      style={{
        fontSize: '1.2rem',
        display: 'inline-block',
        padding: '5px 10px',
        border: '1px solid blue',
        margin: '2px',
        borderRadius: '4px',
      }}
    >
      {children}
    </span>
  )
}

export default SampleCategory
