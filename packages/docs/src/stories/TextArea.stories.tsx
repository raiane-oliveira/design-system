import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,

  args: {
    placeholder: 'Type some text...',
  },

  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
