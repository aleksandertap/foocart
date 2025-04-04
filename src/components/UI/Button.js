import React, { useState } from 'react'

const Button = ({textOnly, onClick, children}) => {
  
  return (
    <button
      className={textOnly ? 'text-button' : 'button'} 
      onClick={event => onClick(event)}>
      {children}
    </button>
  )
}

export default Button