import React from 'react'

import * as sampleUserProfileType from '@/types/sampleUserProfileType'

import { SampleProfileThumb } from '../commons'

type SampleUserProfileProps = {
  data: sampleUserProfileType.ResponseDataType['data']
}

const SampleUserProfile = ({ data }: SampleUserProfileProps) => {
  return (
    <div>
      <SampleProfileThumb
        width={72}
        height={72}
        alt={data?.username + '프로필'}
        src={data?.image}
      ></SampleProfileThumb>
      <dl>
        <div style={{ display: 'flex', fontSize: '1.5rem' }}>
          <dt>Name:</dt>
          <dd style={{ fontWeight: 'bold' }}>{data?.username}</dd>
        </div>
        <div style={{ display: 'flex', fontSize: '1.5rem' }}>
          <dt>Email:</dt>
          <dd style={{ fontWeight: 'bold' }}>{data?.email}</dd>
        </div>
        <div style={{ display: 'flex', fontSize: '1.5rem' }}>
          <dt>Gender:</dt>
          <dd style={{ fontWeight: 'bold' }}>{data?.gender}</dd>
        </div>
        <div style={{ display: 'flex', fontSize: '1.5rem' }}>
          <dt>Birthday</dt>
          <dd style={{ fontWeight: 'bold' }}>{data?.birthDate}</dd>
        </div>
        <div style={{ display: 'flex', fontSize: '1.5rem' }}>
          <dt>Age:</dt>
          <dd style={{ fontWeight: 'bold' }}>{data?.age}</dd>
        </div>
        <div style={{ display: 'flex', fontSize: '1.5rem' }}>
          <dt>Phone:</dt>
          <dd style={{ fontWeight: 'bold' }}>{data?.phone}</dd>
        </div>
      </dl>
    </div>
  )
}

export default SampleUserProfile
