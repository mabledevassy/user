import { Button, TextField } from '@mui/material'
import React from 'react'

const Buy = () => {
  return (
    <div>
       <TextField id="outlined-basic"label="Name" variant="outlined"/><br/><br/>
       <TextField id="outlined-basic"label="Phone Number" variant="outlined"/><br/><br/>
       <TextField id="outlined-basic"label="pincode" variant="outlined"/><br/><br/>
       <TextField id="outlined-basic"label="state" variant="outlined"/><br/><br/>
       <TextField id="outlined-basic"label="city" variant="outlined"/><br/><br/>
     
<TextField id="outlined-multiline-flexible"label="House name/Building name" multiline={4}/><br/><br/>
       <TextField id="outlined-basic"label="Road name" variant="outlined"/><br/><br/>
       <Button variant="contained">Submit</Button>
    </div>
  )
}

export default Buy
