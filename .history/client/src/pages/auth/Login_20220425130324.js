import React, {useState} from 'react'
import { auth } from "../../firebase"
import { toast } from 'react-toastify';
import { Button } from 'antd';
import { async } from '@firebase/util';
import { MailOutlined  } from '@ant-design/icons';



const Login = () => {
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.table(email, password)

  }

  const loginForm = () => 
    

  <form onSubmit= { handleSubmit }>
    <div className='form-group'>
    <input type="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} placeholder = "your email" autoFocus/>
    </div>
    <div className='form-group'>
    <input type="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} placeholder = "your password"/>
    </div>
    <br />
    <Button
    onClick={handleSubmit}
    type="primary"
    className='mb-3'
    block
    shape='round'
    icon={<MailOutlined />}
    size="large"
    disabled= {!email || password.length < 6}>Login with your email and password </Button>
  </form>
  
  return (
    <div className='container p-5'>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Login</h4>
          
          {loginForm()}
        </div>
      </div>
      
    </div>
  )
}

export default Login