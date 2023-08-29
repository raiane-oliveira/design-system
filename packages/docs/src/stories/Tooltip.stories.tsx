import { Meta, StoryObj } from "@storybook/react";
import { Button, Text, Tooltip } from "@raiane-ignite-ui/react"

export default {
  title: 'Tooltip',
  component: Tooltip.Root,
  
  

} as Meta

export const Primary: StoryObj<Tooltip.TooltipProps> = {
  args: {
    children: (
      <>
        <Tooltip.Trigger asChild>
          <Button>
            21
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <Text size="sm">21 de Outubro - Indisponível</Text>
        </Tooltip.Content>
      </>
    )
  },
}

export const ShowTooltipInstantly: StoryObj<Tooltip.TooltipProps> = {
  args: {
    delayDuration: 0,
    children: (
      <>
        <Tooltip.Trigger asChild>
          <Button>
              21
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <Text size="sm">21 de Outubro - Indisponível</Text>
        </Tooltip.Content>
      </>
    )
  }
}