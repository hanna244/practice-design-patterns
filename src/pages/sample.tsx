import React from 'react'

import { NextPage } from 'next'
import SampleMainContainer from '@/containers/SampleContainer'
import { Layout } from '@/components/layouts'

const SamplePage: NextPage = () => {
  return (
    <Layout>
      <SampleMainContainer />
    </Layout>
  )
}

export default SamplePage
