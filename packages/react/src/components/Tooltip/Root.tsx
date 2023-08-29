import * as Tooltip from "@radix-ui/react-tooltip"
import { ReactNode } from "react"

export interface TooltipProps extends Tooltip.TooltipProviderProps {
  children: ReactNode
}

export function Root({ children, ...props }: TooltipProps) {
  return (
    <Tooltip.Provider {...props}>
      <Tooltip.Root>
        {children}
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

Root.displayName = "Tooltip.Root"
