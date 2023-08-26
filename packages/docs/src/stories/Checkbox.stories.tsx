import { Box, Checkbox, CheckboxProps, Text } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,

  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', gap: '$2', alignItems: 'center' }}
        >
          {Story()}
          <Text size="sm">Accept terms and conditions.</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
