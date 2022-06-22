import { Button } from 'antd';
import React, {useState} from 'react'
import { auth } from "../../firebase"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = () =>{

  }
  const registerForm = () => 
  <form onSubmit={handleSubmit}>
    <input type="email" className='form-control' value={email} onChange={e => setEmail(e.target.value)} autoFocus/>
    <button type='submit' className='btn btn-raise'>Register / {email}</button>
  </form>
  return (
    <div className='container p-5'>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          
        </div>
      </div>
      
    </div>
  )
}

export default Register