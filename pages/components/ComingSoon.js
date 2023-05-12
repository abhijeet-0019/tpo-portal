import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Container, useTheme } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
    backgroundColor: '#f5f5f5', 
    color: '#000000', 
  },
  icon: {
    fontSize: '100px',
    color: '#000000', 
    marginBottom: '16px', 
  },
  title: {
    marginBottom: '16px', 
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000000', 
  },
  subtitle: {
    marginBottom: '32px', 
    textAlign: 'center',
    color: '#000000', 
  },
}));

const ComingSoonPage = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <ConstructionIcon className={classes.icon} />
        <Typography variant="h4" component="h1" className={classes.title}>
          We're Under Construction
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Exciting things are happening behind the scenes.
        </Typography>
        <Typography variant="body1">
          We are working hard to bring you an amazing experience.
          <br />
          Stay tuned for updates and new features!
        </Typography>
      </Container>
    </div>
  );
};

export default ComingSoonPage;
