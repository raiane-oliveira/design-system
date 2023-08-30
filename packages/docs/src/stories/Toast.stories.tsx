import { Meta} from "@storybook/react"
import { Button, Toast, ToastProps } from "@raiane-ignite-ui/react"
import { useState } from "react"

export default {
  title: 'Data Display/Toast',
  component: Toast,

  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h', 
  },

  argTypes: {
    children: {
      control: {
        type: null
      },
    },
  }
} as Meta<ToastProps>

export const Primary = (args: ToastProps) => {
  const [open, setOpen] = useState(args.open)

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <Toast {...args} open={open} onOpenChange={setOpen}>
      <Button variant='tertiary' onClick={handleOpen}>
        Add to calendar
      </Button>
    </Toast>
  )
}