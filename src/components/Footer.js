import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FolderIcon from '@material-ui/icons/Folder';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Typography } from '@material-ui/core';
import { Link } from 'gatsby'

const useStyles = makeStyles({
  root: {
    width: '80%',
    margin: 'auto',
    // backgroundColor: 'rgb(100,0,123)',
    background:'radial-gradient(circle, rgba(100,0,123,1) 0%, rgba(66,20,86,1) 100%)',
    // color: 'rgb(100,0,123)',
    color: 'white',
    textAlign: 'center'
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
      <>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <Link to='/'><BottomNavigationAction label="Home" icon={<HomeIcon color="secondary" />} /></Link>
      <Link to='/projects'><BottomNavigationAction label="Projects" icon={<FolderIcon style={{ color: 'green' }} />} /></Link>
      <Link to='/contact'><BottomNavigationAction label="Contact Me" icon={<LocationOnIcon />} /></Link>
    </BottomNavigation>
    <div className={classes.root}><b>Made with <FavoriteIcon /> by Faiza Aziz Khan 2020</b>
    </div>

    </>
  );
}