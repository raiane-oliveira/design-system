import { ComponentProps } from 'react'
// ComponentProps é uma forma de extrair a tipagem das propriedades
// que um componente pode receber

import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  color: '$white',
  backgroundColor: '$ignite300',
  borderRadius: '$sm',
  border: 0,
  fontWeight: '$bold',
  transition: '.3s',
  cursor: 'pointer',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },

  '&:hover': {
    boxShadow: '5px 5px 0 black',
    marginTop: -3,
    marginLeft: -3,
  },
})

export type ButtonProps = ComponentProps<typeof Button>
