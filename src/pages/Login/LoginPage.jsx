import React, { useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import styles from './style.module.css'

const LoginPage = ({ onSubmit = () => {}, register = () => {}, watch, errors}) => {
  const onChange = () => console.log('changing')
  const onClick = () => console.log('clicked')
  console.log()
  return (
    <div>
      <form className={styles.form} onSubmit={onSubmit}>
        <input onChange={onChange} placeholder='Login' {...register("login", { required: true })} />
        <input placeholder='Password' type='password' {...register("password", { required: true })} />
        <Button 
          projectType={!watch('password') ? 'disabled' : 'primary'} 
          onClick={onClick} 
          type='submit'
          disabled={!watch('password')}
        >Submit</Button>
      </form>
    </div>
  )
}

export default LoginPage