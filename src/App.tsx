import React, { useRef, useState, useEffect, SyntheticEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  CssBaseline,
} from '@material-ui/core';
import Home from '@material-ui/icons/Home';
import Photo from '@material-ui/icons/Photo';
import Map from '@material-ui/icons/Map';
import Settings from '@material-ui/icons/Settings';

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
      <Box sx={{ pb: 8 }} ref={ref}>
        <Router />
        <CssBaseline />
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
      </Box>
    </Container>
  );
};

export default App;
