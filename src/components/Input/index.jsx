import React from 'react'

const Input = ({children, ...props}) => {
  return (
    <input type='text' {...props} />
  )
}

export default Input