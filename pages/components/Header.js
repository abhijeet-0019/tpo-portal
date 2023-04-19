import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header({tabname}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'silver' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
            {tabname}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}