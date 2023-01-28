import React from 'react'

import { SampleUserInfoRequestDataType } from '@/types/SampleType'
import { SampleProfileThumb } from '../commons'

type SampleUserProfilePresenterProps = {
  data: SampleUserInfoRequestDataType
}

const SampleUserProfilePresenter = ({ data }: SampleUserProfilePresenterProps) => {
  return (
    <div>
      <SampleProfileThumb
        width={72}
        height={72}
        alt={data.results[0].id.name + '프로필'}
        src={data.results[0].picture.medium}
      ></SampleProfileThumb>
      <dl>
        <div style={{ display: 'flex', fontSize: '1.5rem' }}>
          <dt>name:</dt>
          <dd style={{ fontWeight: 'bold' }}>
            {data.results[0].name.last + data.results[0].name.first}
          </dd>
        </div>
        <div style={{ display: 'flex', fontSize: '1.5rem' }}>
          <dt>email:</dt>
          <dd style={{ fontWeight: 'bold' }}>{data.results[0].email}</dd>
        </div>
        <div style={{ display: 'flex', fontSize: '1.5rem' }}>
          <dt>gender:</dt>
          <dd style={{ fontWeight: 'bold' }}>{data.results[0].gender}</dd>
        </div>
        <div style={{ display: 'flex', fontSize: '1.5rem' }}>
          <dt>registered date:</dt>
          <dd style={{ fontWeight: 'bold' }}>{data.results[0].registered.date}</dd>
        </div>
        <div style={{ display: 'flex', fontSize: '1.5rem' }}>
          <dt>registered age:</dt>
          <dd style={{ fontWeight: 'bold' }}>{data.results[0].registered.age}</dd>
        </div>
      </dl>
    </div>
  )
}

export default SampleUserProfilePresenter
