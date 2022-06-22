import React, {useState} from 'react'
import { auth } from "../../firebase"
import { toast } from 'react-toastify';

import { async } from '@firebase/util';



const RegisterComplete = ({history}) => {
  const [email, setEmail ] = useState("");
  const [password, setPassword] = useState('');
//   history.push('/dashboard')

  const handleSubmit = async (e) => {
    e.preventDefault();

      
  }

  const registerForm = () => 
    

  <form onSubmit= { handleSubmit }>
    <input type="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} autoFocus/>
    <button type='submit' className='btn btn-raised'>Register</button>
  </form>
  
  return (
    <div className='container p-5'>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          
          {registerForm()}
        </div>
      </div>
      
    </div>
  )
}

export default RegisterComplete