import React from 'react'
import { StyledButton } from './StyledButton'
import { StyledBox } from '../styledBox/StyledBox'
import { StyledLines } from '../styledLines/StyledLines'

export const Button = props => {
  const {
    toggleButton,
    buttonColor,
    buttonWidth,
    buttonStyle,
    className,
    Box,
    Lines,
    barColor,
    isActive,
  } = props

  return (
    <StyledButton
      onClick={toggleButton}
      {...{ buttonWidth, buttonColor, buttonStyle, className }}
      aria-label="Navigation"
    >
      <Box {...{ buttonWidth }}>
        <Lines {...{ buttonWidth, barColor, isActive }} />
      </Box>
    </StyledButton>
  )
}

Button.defaultProps = {
  buttonWidth: 40,
  Box: StyledBox,
  Lines: StyledLines,
}
