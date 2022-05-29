import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/doctors';
import LoginPage from './LoginPage';

const LoginContainer = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch()
  const onSubmit = handleSubmit(data => dispatch(login(data)))

  // return navigation.push('/')
  return <LoginPage 
    register={register} 
    onSubmit={onSubmit}
    watch={watch}
    errors={errors}
  />
}

export default LoginContainer