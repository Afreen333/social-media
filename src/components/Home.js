import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Profile from './Profile';
import Posts from './Posts';
import { Link } from 'react-router-dom'

export default function ButtonAppBar(props) {
  if(props.isLoggedin=="true")
        return (
    
    <>
    
    <Profile/>
    <h2>FEED</h2>
    <Posts/>
    <Posts/>
    <Posts/>
    </>
  );
  else 
  return(<><p>please login or sign up to continue!</p>
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Connect
          </Typography>
          
            <Link to="/login"><Button color="inherit">Login</Button></Link>
            
          <Button color="inherit">
            <Link to="/signup">Sign Up</Link>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>)
}
