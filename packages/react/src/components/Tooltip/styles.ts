import * as Tooltip from "@radix-ui/react-tooltip"
import { styled } from "../../styles"

export const TooltipContent = styled(Tooltip.Content, {
  background: '$gray900',
  borderRadius: '$xs',
  padding: '$3 $4',
  color: '$gray100',
  fontFamily: '$default',
  fontWeight: '$medium',
  lineHeight: '$short',
  boxShadow: '4px 16px 24px 0px rgba(0, 0, 0, 0.25)'
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
  width: '$4',
  height: '$2'
})