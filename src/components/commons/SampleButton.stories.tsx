import { ComponentMeta, ComponentStory } from '@storybook/react'
import SampleButton from './SampleButton'

/* CONFIG ------------------------------------------------------------------- */

export default {
  title: 'Sample / Component / SampleButton',
  component: SampleButton,
  // 컴포넌트의 default props를 입력해주세요
  args: {
    children: '테스트버튼',
    bgColor: 'white',
  },
} as ComponentMeta<typeof SampleButton>

/* TEMPLATE ----------------------------------------------------------------- */

const Template: ComponentStory<typeof SampleButton> = (args) => <SampleButton {...args} />

/* BASE --------------------------------------------------------------------- */

export const Default = Template.bind({})
