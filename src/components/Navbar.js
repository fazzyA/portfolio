import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { motion } from 'framer-motion';
import { Link } from "gatsby"
import fb from './images/facebook.svg';
import ld from './images/linkedin.svg';
import arrow from './images/arrow.svg';

const svgVariants = {
    hidden: { rotate: -180 },
    visible: { 
      rotate: 0,
      transition: { duration : 1 }
    },
  }
  
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut",
      }
    }
  };
  const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            duration: 0.3,
            yoyo: Infinity
        }
    }
  }
  
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:'rgb(100,0,123)!important',
    // width:'90%',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <motion.div className="logo"
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={0.7}
      >
        <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVariants}
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={pathVariants}
          />
        </motion.svg>
      </motion.div>

          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
          <Link to="/">Portfolio<img src={arrow} alt='menu' className='logosSmall2' /></Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link to="/projects">Projects<img src={arrow} alt='menu' className='logosSmall2' /></Link>          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link to="/contact">Contact<img src={arrow} alt='menu' className='logosSmall2' /></Link>          </Typography>
          <span className= 'titleLeft'><Button color="inherit">
          <a href="https://www.facebook.com/faiza.aziz.188/">
              <img src={fb} alt='facebook' className='logosSmall' /></a></Button>
          <Button color="inherit"><a href="https://www.linkedin.com/in/faiza-aziz-76912092/">
              <img src={ld} alt='linkedIn' className='logosSmall' /></a></Button>
              </span>
        </Toolbar>
      </AppBar>
    </div>
  );
}