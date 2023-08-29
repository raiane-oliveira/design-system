import * as Tooltip from "@radix-ui/react-tooltip"
import { ReactNode } from "react"
import {  TooltipArrow, TooltipContent } from "./styles"

export interface ContentProps extends Tooltip.TooltipContentProps {
  children: ReactNode
}

export function Content({ children, ...props }: ContentProps) {
  return (
    <Tooltip.Portal>
      <TooltipContent sideOffset={2} {...props}>
        {children}

        <TooltipArrow  />
      </TooltipContent>
    </Tooltip.Portal>
  )
}

Content.displayName = "Tooltip.Content"