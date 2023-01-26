import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { SampleUserDefaultInfo } from '@/constants'
import { SamplePresenter } from '@/components/presenters'

const SampleContainer = () => {
  const [userInfo, setUserInfo] = useState(SampleUserDefaultInfo)

  useEffect(() => {
    axios.get('https://randomuser.me/api/').then((res) => {
      setUserInfo(res.data)
    })
  }, [])

  return <SamplePresenter data={userInfo} />
}

export default SampleContainer
