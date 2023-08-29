import { Meta, StoryObj } from "@storybook/react";
import { Button, Tooltip, TooltipProps } from "@raiane-ignite-ui/react"

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,

  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }

} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    children: (
      <Button>21</Button>
    ),
    content: '21 de Outubro - Indisponível',
  },
}

export const ShowTooltipInstantly: StoryObj<TooltipProps> = {
  args: {
    delayDuration: 0,
    children: (
      <Button>21</Button>
    ),
    content: '21 de Outubro - Indisponível'
  }
}