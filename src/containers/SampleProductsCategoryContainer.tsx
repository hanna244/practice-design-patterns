import React from 'react'
import { useQuery } from 'react-query'

import { SampleUseCategory } from '@/components/presenters'
import SampleProductsService from '@/services/SampleProductsService'

const SampleUserProfileContainer = () => {
  // Data fetching
  const { isLoading, data } = useQuery('productsCategoryData', () => {
    return SampleProductsService.categories()
  })

  if (isLoading) return <p>Loading...</p>

  return <SampleUseCategory data={data?.data} />
}

export default SampleUserProfileContainer
