import type { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@design-system-ui-vla/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/vanderL.png',
    alt: 'Vander Lima de Andrade',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
