import { styled as MuiStyled } from '@mui/material/styles'
import { Button as MuiButton, Stack, ButtonProps } from '@mui/material'

interface PropsButton extends ButtonProps {
  variants: string
}

export const Button = ({ onClick, variants, children }: PropsButton) => {
  return (
    <Stack>
      <StyledButtonMui onClick={onClick} variants={variants}>
        {children}
      </StyledButtonMui>
    </Stack>
  )
}

interface propsCssFun {
  variants: string
}

const getBackgroundColor = (props: propsCssFun) => {
  return props.variants === 'contained' ? '#1976d2;' : '#fff'
}

const getBorder = (props: propsCssFun) => {
  return props.variants === 'contained' ? '#1976d2;' : '1px solid #1976d2;'
}

const getColor = (props: propsCssFun) => {
  return props.variants === 'contained' ? '#fff' : '#1976d2;'
}

const StyledButtonMui = MuiStyled(MuiButton)((variants: propsCssFun) => ({
  '& ': {
    padding: '10px 32px',
    background: getBackgroundColor(variants),
    borderRadius: '30px',
    color: getColor(variants),
    fontWeight: '600',
    fontSize: '16px',
    border: getBorder(variants),
    lineHeight: '24px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',

    ':hover': {
      backgroundColor: '#612006',
      color: 'white',
    },

    ':active': {
      backgroundColor: '#7e2a0a',
    },
  },
}))
