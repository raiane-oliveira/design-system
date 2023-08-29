import * as Tooltip from "@radix-ui/react-tooltip"
import { ReactNode } from "react"

export interface TriggerProps extends Tooltip.TooltipTriggerProps {
  children: ReactNode
}

export function Trigger({ children, ...props }: TriggerProps) {
  return (
    <Tooltip.Trigger {...props}>
      {children}
    </Tooltip.Trigger>
  )
}

Trigger.displayName = "Tooltip.Trigger"