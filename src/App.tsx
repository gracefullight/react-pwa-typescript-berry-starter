import React, { useRef, useState, useEffect, SyntheticEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  CssBaseline,
} from '@mui/material';
import Home from '@mui/icons-material/Home';
import Photo from '@mui/icons-material/Photo';
import Map from '@mui/icons-material/Map';
import Settings from '@mui/icons-material/Settings';

import Router from './routes/Router';

const App: React.FC = () => {
  const { pathname } = useLocation();
  const [value, setValue] = useState(pathname);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
  }, [value]);

  const handleNavigationChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md" disableGutters>
      <CssBaseline />
      <Box sx={{ pb: 8 }} ref={ref}>
        <Router />
      </Box>
      <AppBar position="fixed" style={{ top: 'auto', bottom: 0 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleNavigationChange}
        >
          <BottomNavigationAction
            label="Home"
            icon={<Home />}
            component={Link}
            to="/"
            value="/"
          />
          <BottomNavigationAction
            label="Photo"
            icon={<Photo />}
            component={Link}
            to="/#photo"
            value="/#photo"
          />
          <BottomNavigationAction
            label="Map"
            icon={<Map />}
            component={Link}
            to="/#map"
            value="/#map"
          />
          <BottomNavigationAction
            label="Setting"
            icon={<Settings />}
            component={Link}
            to="/login"
            value="/login"
          />
        </BottomNavigation>
      </AppBar>
    </Container>
  );
};

export default App;
