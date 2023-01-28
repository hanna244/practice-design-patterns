import React from 'react'

type SampleProfileThumb = {
  width: number
  height: number
  alt: string
  src: string
} & React.ComponentProps<'img'>

const SampleProfileThumb = ({ width, height, alt, src, ...restProps }: SampleProfileThumb) => {
  return (
    <div style={{ width: `${width}px`, height: `${height}px` }}>
      <img src={src} alt={alt} width={width} height={height} {...restProps} />
    </div>
  )
}

export default SampleProfileThumb
