import React, {useState, useEffect} from 'react'
import { auth } from "../../firebase"
import { toast } from 'react-toastify';

import { async } from '@firebase/util';



const RegisterComplete = ({history}) => {
  const [email, setEmail ] = useState("");
  const [password, setPassword] = useState('');
//   history.push('/dashboard')

useEffect( () => {
    setEmail(window.localStorage.getItem('emailForRegistration'))
    console.log(window.location.href)
    console.log(window.localStorage.getItem('emailForRegistration'))
}, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const result = await auth.signInWithEmailLink(email, window.location.href)
        console.log("Result", result)
    } catch (error){
            console.log(error)
    }

      
  }

  const completeRegistrationForm = () => 
    

  <form onSubmit= { handleSubmit }>
    <input type="email" className='form-control' value={email} disabled/>
    <input type="password" className='form-control' value={password} onChange={e => setPassword(e.target.value)} placeholder="enter a password" autoFocus/>
    <br/>
    <button type='submit' className='btn btn-raised'>Complete Registration</button>
    
  </form>
  
  return (
    <div className='container p-5'>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register Complete</h4>
          
          {completeRegistrationForm()}
        </div>
      </div>
      
    </div>
  )
}

export default RegisterComplete