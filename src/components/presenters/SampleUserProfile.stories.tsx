import { SampleUserDefaultInfo } from '@/constants'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import SampleUserProfile from './SampleUserProfile'

/* CONFIG ------------------------------------------------------------------- */

export default {
  title: 'Sample / Component / Presenters / SampleUserProfile',
  component: SampleUserProfile,
  // 컴포넌트의 default props를 입력해주세요
  args: {
    data: SampleUserDefaultInfo,
  },
} as ComponentMeta<typeof SampleUserProfile>

/* TEMPLATE ----------------------------------------------------------------- */

const Template: ComponentStory<typeof SampleUserProfile> = (args) => <SampleUserProfile {...args} />

/* BASE --------------------------------------------------------------------- */

export const Default = Template.bind({})
