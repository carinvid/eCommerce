import React, {useState, useEffect} from 'react'
import { auth } from "../../firebase"
import { toast } from 'react-toastify';

import { async } from '@firebase/util';



const RegisterComplete = ({history}) => {
  const [email, setEmail ] = useState("");
  const [password, setPassword] = useState('');
//   history.push('/dashboard')

useState( () => {
    console.log(window.localStorage.getItem('emailforRegistration'))
}, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

      
  }

  const completeRegistrationForm = () => 
    

  <form onSubmit= { handleSubmit }>
    <input type="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} autoFocus/>
    <button type='submit' className='btn btn-raised'>Register</button>
  </form>
  
  return (
    <div className='container p-5'>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          
          {completeRegistrationForm()}
        </div>
      </div>
      
    </div>
  )
}

export default RegisterComplete