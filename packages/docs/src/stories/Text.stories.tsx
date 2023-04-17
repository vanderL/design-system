import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typograpy/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, sapiente earum odit sunt perspiciatis, quasi officiis nulla mollitia harum itaque, quaerat nobis at necessitatibus voluptates voluptas voluptatum quibusdam nemo! Eaque.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
