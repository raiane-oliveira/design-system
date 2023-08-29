import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { TooltipArrow, TooltipContent } from './styles'
import {  ReactNode } from 'react'
import { Text } from "../Text"

export interface TooltipProps extends TooltipPrimitive.TooltipProps {
  children: ReactNode,
  content: string
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props}>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipContent sideOffset={2}>
            <Text size="sm">
              {content}
            </Text>

            <TooltipArrow  />
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

Tooltip.displayName = "Tooltip"