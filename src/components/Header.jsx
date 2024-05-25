import React from 'react'
import {Box,AppBar,Toolbar,IconButton,Typography,Button} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../state/index';


const Header = () => {
  const user=useSelector(state=>state.user);
  const dispatch=useDispatch();
  // console.log(user);
  return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Redux
          </Typography>
          {
            user ?  <Button onClick={()=>{dispatch(actionCreators.LogMeIn(null))}} color="inherit">LogOut</Button> :  <Button onClick={()=>{dispatch(actionCreators.LogMeIn({name:"ramana",password:"asas"}))}}  color="inherit">LogIn</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
