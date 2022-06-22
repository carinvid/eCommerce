
import React, {useState} from 'react'
import { auth } from "../../firebase"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { async } from '@firebase/util';

const Register = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) =>{
    e.preventDefault();

      const config = {
        url: 'http://localhost:3000/register/complete',
        handleCodeInApp: true
      }

      await auth.sendSignInLinkToEmail(email, config)
      toast.success(`"Email is send to" ${email}. Click the link to complete the registration.`)
  }

  // email will be saved in the local storage
  window.localStorage.setItem('emailForRegistration', email)
  //clear state
  setEmail("");
  }

  const registerForm = (e) => {
    

  <form onSubmit= { handleSubmit }>
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