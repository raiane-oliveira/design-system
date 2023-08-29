import { Meta, StoryObj } from "@storybook/react";
import { Button, Tooltip, TooltipProps } from "@raiane-ignite-ui/react"

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,

  args: {
    delayDuration: 0,
    children: (
      <Button>21</Button>
    ),
    content: '21 de Outubro - Indisponível'
  },

  argTypes: {
    children: {
      control: {
        type: null
      }
    },
    delayDuration: {
      control: {
        type: 'number'
      }
    },
  }

} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}