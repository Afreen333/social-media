import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    > 
    <div>
      <h2>Login</h2>
      <TextField id="outlined-basic" label="Username or Email" variant="outlined" /><br></br>
      <TextField id="outlined-basic" label="Password" variant="outlined" /><br></br>
      
      <Button variant="contained">login</Button>
      </div>
    </Box>
  );
}
