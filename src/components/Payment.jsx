import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

const Payment = () => {
  return (
    <div>
        <h3>Payment</h3>
      <TextField id="outlined-basic"label="UserID" variant="outlined"/><br/><br/>
      <TextField id="outlined-basic"label="Total amount" variant="outlined"/><br/><br/>
      <FormControl  sx={{ m: 1, minWidth: 120 }}>
  <InputLabel id="demo-simple-select-label">Payment method</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    
    label="Age"
    
  >
    <MenuItem value={10}>cash on delivery</MenuItem>
    
  </Select>
</FormControl>
    </div>
  )
}

export default Payment
