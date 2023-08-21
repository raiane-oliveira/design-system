import type { StoryObj, Meta } from '@storybook/react'

import { Button, ButtonProps } from '@ignite-ui/react'

// Configuração global do story Button
// Irá herdar para as duas variações: Primary e Secondary
export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
