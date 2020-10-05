import { Story, Meta } from '@storybook/react/types-6-0'
import FirstAndSecond from '.'

export default {
  title: 'FirstAndSecond',
  component: FirstAndSecond
} as Meta

export const Basic: Story = () => <FirstAndSecond />
