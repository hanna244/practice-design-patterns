import React from 'react'
import { v4 as uuid } from 'uuid'

import * as sampleProductsCategoryType from '@/types/sampleProductsCategoryType'

import { SampleCategory } from '../commons'

type SampleCategoriesProps = {
  data: sampleProductsCategoryType.ResponseDataType['data']
}

const SampleCategories = ({ data }: SampleCategoriesProps) => {
  return (
    <>
      {data.map((item) => {
        return <SampleCategory key={uuid()}>{item}</SampleCategory>
      })}
    </>
  )
}

export default SampleCategories
