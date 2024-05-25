import React from 'react'
import {Card,CardMedia,CardContent,Typography,CardActions,Button} from "@mui/material"
import { useSelector } from 'react-redux'

const Home = () => {
  const user=useSelector(state=>state.user);
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",}}>
    {
      user ? <Card sx={{ maxWidth: 345,marginTop:4,  }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://lh3.googleusercontent.com/a/ACg8ocKDU3W6Mfs6vK9SZ_VHU9TbdstgWiD1iwkMN5G-cDPc6Jm2xTM=s96-c"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
     </Card> : <Typography  margin={6}   > Please Login to access the content </Typography>
    }
  
  </div>
  )
}

export default Home
