import { ComponentMeta, ComponentStory } from '@storybook/react'
import SampleCategories from './SampleCategories'

/* CONFIG ------------------------------------------------------------------- */

export default {
  title: 'Sample / Component / Presenters / SampleCategories',
  component: SampleCategories,
  // 컴포넌트의 default props를 입력해주세요
  args: {},
} as ComponentMeta<typeof SampleCategories>

/* TEMPLATE ----------------------------------------------------------------- */

const Template: ComponentStory<typeof SampleCategories> = (args) => <SampleCategories {...args} />

/* BASE --------------------------------------------------------------------- */

export const Default = Template.bind({})
