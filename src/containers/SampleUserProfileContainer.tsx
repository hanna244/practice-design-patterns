import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { SampleUserDefaultInfo } from '@/constants'

import { SampleUserProfile } from '@/components/presenters'

const SampleUserProfileContainer = () => {
  const [userInfo, setUserInfo] = useState(SampleUserDefaultInfo)

  useEffect(() => {
    axios.get('https://randomuser.me/api/').then((res) => {
      setUserInfo(res.data)
    })
  }, [])

  return <SampleUserProfile data={userInfo} />
}

export default SampleUserProfileContainer
