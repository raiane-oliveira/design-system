import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@raiane-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        tempore magnam deserunt ipsa hic optio velit quis veritatis in
        reiciendis quas neque, non laborum sed quidem vel ipsum natus debitis!
      </Text>
    ),
  },

  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
