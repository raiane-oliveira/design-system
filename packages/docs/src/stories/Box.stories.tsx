import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          tempore magnam deserunt ipsa hic optio velit quis veritatis in
          reiciendis quas neque, non laborum sed quidem vel ipsum natus debitis!
        </Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
