import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
              <h3>Login page</h3>
      <TextField id="outlined-basic"label="Username" variant="outlined"/><br/><br/>
      <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /><br/><br/>
      <Button variant="contained">Ok</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="contained">cancel</Button>
      <p>forget password</p>
    </div>
  )
}

export default Login
