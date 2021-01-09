import React from "react";
import './style/App.css';
import Weather from "./Weather";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import WbSunnyTwoToneIcon from '@material-ui/icons/WbSunnyTwoTone';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        WeatherTrac
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center"
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

function App() {

  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}><WbSunnyTwoToneIcon fontSize="small" style={{ color: 'orange' }} />
            WeatherTrac
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
   <Weather />
   <div className={classes.root}>      
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Made with ❤️ | Developer 👉 <Link href="https://github.com/madhabpaul" >Madhab Paul </Link></Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
   </>
  );
}

export default App;
