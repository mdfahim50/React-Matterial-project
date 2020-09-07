import React from 'react';
import { makeStyles,AppBar,Toolbar,Button} from '@material-ui/core';
import logo from '../Img/Adnan.svg'

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor:"lightgray"
    },
    centering: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    },
    setLogo:{
        width: "220px",
        height: "70px"
    },
    decoration: {
        textDecoration:"none"
    }
  }));

const Home = () => {
    const classes = useStyles();
    return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.centering}>
          <img src={logo} alt="logo" className={classes.setLogo}/>
          <a href="/home" className={classes.decoration}>
              <Button>
                HOME
              </Button>
          </a>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Home;