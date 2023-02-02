import React from 'react'

import { SampleUserProfile } from '@/components/presenters'
import { useQuery } from 'react-query'
import SampleUserService from '@/services/SampleUserService'

const SampleUserProfileContainer = () => {
  // Data fetching
  const { isLoading, data } = useQuery('userInfoProfileData', () => {
    const params = {
      id: 1,
    }

    return SampleUserService.profile(params)
  })

  if (isLoading) return <p>Loading...</p>

  return <SampleUserProfile data={data?.data} />
}

export default SampleUserProfileContainer
