import React ,{useState}from 'react';
import {useForm} from 'react-hook-form'
// import { useNavigate } from 'react-router-dom';
function SignIn() {
  const {register,handleSubmit,formState:{errors}}=useForm();
  const registerForm=(formObj)=>{
    console.log(formObj)
  }
  return (
    <div className='container'>
      <div className='row mt-3'>
      <div className='col-sm-8'>
        <img src='https://t3.ftcdn.net/jpg/06/08/16/60/360_F_608166034_haBlRXd8f5g5QeNCYLRYbIC8IRJmaq4R.jpg'
        alt='not found'/>
      </div>
        <div className='col-sm-4'>
            <h2 className='text-center'>Join us</h2>
          <form onSubmit={handleSubmit(registerForm)}>
            <div className='form-group mb-3'>
              <label htmlFor='name'>Username</label>
              <input
                type='text'
                id='name'
                {...register("name",{required:true,minLength:3})}
                className='form-control'
                placeholder='Enter your name'
              />
              {
                errors.name && errors.name.type==="required"&&<span className='text-danger'>*required</span>
              }
            </div>
            <div className='form-group mb-3'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                {...register("password",{required:true})}
                className='form-control'
                placeholder='Enter your password'
              />
              {
                errors.password&&errors.password.type==="required"&&<span className='text-danger'>*required</span>
              }
            </div>
            <p>Existing user login <span>here</span></p>
            <div className='text-center'>
            <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;