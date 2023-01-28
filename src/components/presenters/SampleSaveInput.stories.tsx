import { SampleUserDefaultInfo } from '@/constants'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import SampleSaveInput from './SampleSaveInput'

/* CONFIG ------------------------------------------------------------------- */

export default {
  title: 'Sample / Component / Presenters / SampleSaveInput',
  component: SampleSaveInput,
  // 컴포넌트의 default props를 입력해주세요
  args: {
    data: SampleUserDefaultInfo,
  },
} as ComponentMeta<typeof SampleSaveInput>

/* TEMPLATE ----------------------------------------------------------------- */

const Template: ComponentStory<typeof SampleSaveInput> = (args) => <SampleSaveInput {...args} />

/* BASE --------------------------------------------------------------------- */

export const Default = Template.bind({})
