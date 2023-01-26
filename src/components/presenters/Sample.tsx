import React from 'react'

import { SampleUserInfoRequestDataType } from '@/types/SampleType'

import { SampleSaveInput } from '../groups'

type SamplePresenterProps = {
  data: SampleUserInfoRequestDataType
}

const SamplePresenter = ({ data }: SamplePresenterProps) => {
  return (
    <div>
      <div style={{ width: '72px', height: '72px' }}>
        <img
          src={data.results[0].picture.medium}
          alt={data.results[0].id.name}
          width={72}
          height={72}
        />
      </div>
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
      <SampleSaveInput id={data.info.seed} label={'자기소개'} />
    </div>
  )
}

export default SamplePresenter
