import React from 'react'

import { SampleUserProfile } from '@/components/presenters'
import { useQuery } from 'react-query'
import SampleUserService from '@/services/SampleUserService'

const SampleUserProfileContainer = () => {
  const { isLoading, data } = useQuery('userInfoProfileData', () => {
    const params = {
      id: 1,
    }

    return SampleUserService.profile(params)
  })

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      <SampleUserProfile data={data?.data} />
    </div>
  )
}

export default SampleUserProfileContainer
