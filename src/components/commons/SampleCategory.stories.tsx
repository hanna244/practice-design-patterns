import { ComponentMeta, ComponentStory } from '@storybook/react'
import SampleCategory from './SampleCategory'

/* CONFIG ------------------------------------------------------------------- */

export default {
  title: 'Sample / Component / Commons / SampleCategory',
  component: SampleCategory,
  // 컴포넌트의 default props를 입력해주세요
  args: {},
} as ComponentMeta<typeof SampleCategory>

/* TEMPLATE ----------------------------------------------------------------- */

const Template: ComponentStory<typeof SampleCategory> = (args) => <SampleCategory {...args} />

/* BASE --------------------------------------------------------------------- */

export const Default = Template.bind({})
