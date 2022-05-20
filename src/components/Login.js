import React, {Component} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class Login extends Component{
  constructor(){
    super();
    this.state = {
      email:"",
      password:""
    }

    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);

  }

  handleChange(e){
    console.log(e.target.name + " modified to " + e.target.value);
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  
    validateForm(e){
      if(this.state.email==='' || this.state.password ===''){
          alert("Dont leave anything blank");
          e.preventDefault();
      }
  

  }
  render(){
    return(
      <Box
          component="form"
          sx={{
            '& > :not(style)': {m: 1,width: '25ch' },

          }}
          noValidate
          autoComplete='off'
       >
         <TextField id="emailInput" name="email" placeholder='Email' label="Email"
         variant="outlined" value={this.state.email}
         onChange={this.handleChange}/>
         <TextField id="passwordInput" name="password" placeholder='password' label="password"
         variant="outlined" value={this.state.password}
         onChange={this.handleChange}/>
         <Button variant='contained' onClick={this.validateForm}>Submit</Button>
       </Box>   
    )
  }
}
export default Login;