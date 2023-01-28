import { ComponentMeta, ComponentStory } from '@storybook/react'
import SampleProfileThumb from './SampleProfileThumb'

/* CONFIG ------------------------------------------------------------------- */

export default {
  title: 'Sample / Component / Commons / SampleProfileThumb',
  component: SampleProfileThumb,
  // 컴포넌트의 default props를 입력해주세요
  args: {
    width: 72,
    height: 72,
    alt: '프로필',
    src: 'https://randomuser.me/api/portraits/med/women/61.jpg',
  },
} as ComponentMeta<typeof SampleProfileThumb>

/* TEMPLATE ----------------------------------------------------------------- */

const Template: ComponentStory<typeof SampleProfileThumb> = (args) => (
  <SampleProfileThumb {...args} />
)

/* BASE --------------------------------------------------------------------- */

export const Default = Template.bind({})
