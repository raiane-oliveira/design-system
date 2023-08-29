import * as Toast from "@radix-ui/react-toast"

import { keyframes, styled } from "../../styles";
import {  X } from "phosphor-react";

const VIEWPORT_PADDING = 25

const slideIn = keyframes({
  from: {
    transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))`
  },
  to: {
    transform: 'translateX(0)'
  }
})

const slideOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))'
  },
  to: {
    transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))`
  }
})

export const ToastContainer = styled(Toast.Root, {
  padding: '$3 $5',
  borderRadius: '$sm',
  border: '1px solid $gray600',
  background: '$gray800',
  
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  },

  '&[data-swipe="end"], &[data-state="closed"]': {
    animation: `${slideOut} 100ms ease-out`
  },

  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out'
  },

  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontSize: '$xl',
  lineHeight: '$base',
  fontWeight: '$bold',
  fontFamily: '$default'
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontSize: '$sm',
  fontFamily: '$default',
  lineHeight: '$base'
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  lineHeight: 0,
  position: 'absolute',
  top: '$4',
  right: '$4',
  cursor: 'pointer'
})

export const ToastCloseIcon = styled(X, {
  width: '$5',
  height: '$5',
  color: '$gray200'
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  zIndex: 100,
  padding: VIEWPORT_PADDING
})