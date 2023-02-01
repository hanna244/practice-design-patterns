import React from 'react'
import { useQuery } from 'react-query'

import { SampleUseCategory } from '@/components/presenters'
import SampleProductsService from '@/services/SampleProductsService'

const SampleUserProfileContainer = () => {
  const { isLoading, data } = useQuery('productsCategoryData', () => {
    return SampleProductsService.categories()
  })

  console.log(data)

  if (isLoading) return <p>Loading...</p>

  return <SampleUseCategory data={data?.data} />
}

export default SampleUserProfileContainer
