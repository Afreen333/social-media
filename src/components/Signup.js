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
      <h2>Sign Up</h2>
      <TextField id="outlined-basic" label="first name" variant="outlined" />
      <TextField id="outlined-basic" label="last name" variant="outlined" /><br></br>
      <TextField id="outlined-basic" label="email" variant="outlined" />
      <TextField id="outlined-basic" label="phone" variant="outlined" /><br></br>
      <TextField id="outlined-basic" label="password" variant="outlined" />
      <TextField id="outlined-basic" label="re-enter password" variant="outlined" /><br></br>
      <Button variant="contained">Sign Up</Button>
    </Box>
  );
}
