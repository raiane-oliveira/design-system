import * as ToastPrimitive from "@radix-ui/react-toast"
import { ToastClose, ToastCloseIcon, ToastContainer, ToastDescription, ToastTitle } from "./styles"
import { ReactNode, useState } from "react"
import { Button } from "../Button"

export interface ToastProps extends ToastPrimitive.ToastProps {
  title: string
  description: string
  children: ReactNode
}

export function Toast({ children, title, description,...props }: ToastProps) {
  return (
    <ToastPrimitive.Provider>
      {children}

      <ToastContainer {...props}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>

        <ToastClose>
          <ToastCloseIcon />
        </ToastClose>
      </ToastContainer>

      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  )
}

Toast.displayName = 'Toast'