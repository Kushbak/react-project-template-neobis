import cn from 'classnames'
import React from 'react'
import styles from './style.module.scss'

const Button = ({children, projectType = 'default', ...props}) => {
  return (
    <button 
    type='button' 
    className={cn(styles.button, styles[projectType] )} 
    {...props}
    >
      {children}
    </button>
  )
}

export default Button