import React from 'react'

import { NextPage } from 'next'
import { Layout } from '@/components/layouts'
import SampleTemplate from '@/templates/SampleTemplate'

const SamplePage: NextPage = () => {
  return (
    <Layout>
      <SampleTemplate />
    </Layout>
  )
}

export default SamplePage
