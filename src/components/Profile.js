import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
  <>  <h3>my profile</h3>
    <Card sx={{ maxWidth: 345 }}>
      
      <CardMedia
        component="img"
        height="140"
        image="https://images.unsplash.com/photo-1644982647869-e1337f992828?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500"
        alt="green iguana"
      />
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
          Mona Lisa
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Intern at TIGER ANALYTICS<br></br><strong>email:</strong> bhjdsguy@tigeranalytics.com<br></br><strong>phone:</strong>387215871
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit Profile</Button>
        
      </CardActions>
    </Card>
    </>

  );
}
