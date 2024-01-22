import { Button, TextField } from '@mui/material'

import React from 'react'

const Signup = () => {
    
     
  return (
    <div>
              <h3>Sign Up</h3>
      <TextField id="outlined-basic"label="Username" variant="outlined"/><br/><br/>
      <TextField id="outlined-basic"label="Username" variant="outlined"/><br/><br/>
     <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /><br/><br/>
      <Button variant="contained">Submit</Button>
    </div>
  )
}

export default Signup
