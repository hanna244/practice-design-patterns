import { ComponentMeta, ComponentStory } from '@storybook/react'
import SampleTextInput from './SampleTextInput'

/* CONFIG ------------------------------------------------------------------- */

export default {
  title: 'Sample / Component / SampleTextInput',
  component: SampleTextInput,
  // 컴포넌트의 default props를 입력해주세요
  args: {
    id: 'Test',
    label: '테스트 인풋',
  },
} as ComponentMeta<typeof SampleTextInput>

/* TEMPLATE ----------------------------------------------------------------- */

const Template: ComponentStory<typeof SampleTextInput> = (args) => <SampleTextInput {...args} />

/* BASE --------------------------------------------------------------------- */

export const Default = Template.bind({})
