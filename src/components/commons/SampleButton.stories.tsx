import { ComponentMeta, ComponentStory } from '@storybook/react'
import SampleButton from './SampleButton'

/* CONFIG ------------------------------------------------------------------- */

export default {
  title: 'Sample / Component / Commons / SampleButton',
  component: SampleButton,
  // 컴포넌트의 default props를 입력해주세요
  args: {
    children: 'Sample Button',
    bgColor: 'white',
  },
} as ComponentMeta<typeof SampleButton>

/* TEMPLATE ----------------------------------------------------------------- */

const Template: ComponentStory<typeof SampleButton> = (args) => <SampleButton {...args} />

/* BASE --------------------------------------------------------------------- */

export const Default = Template.bind({})
