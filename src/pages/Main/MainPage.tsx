import React from 'react';
import Box from '@material-ui/core/Box';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Paper from '@material-ui/core/Paper';
import Stack from '@material-ui/core/Stack';
import { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';

import styles from './MainPage.module.scss';

function App() {
  const position: LatLngExpression = [37.53366158833611, 126.936281308943];
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
    },
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
    },
    {
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
      title: 'Doors',
    },
    {
      img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      title: 'Storage',
    },
    {
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: 'Candle',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
  ];

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      <Paper>
        <Box>1</Box>
      </Paper>
      <Paper>
        <Box>2</Box>
      </Paper>
      <Paper>
        <Box sx={{ width: 600, maxHeight: 600, overflowY: 'scroll' }}>
          <ImageList variant="masonry" cols={3}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=200&fit=crop&auto=format 1x,
                    ${item.img}?w=200&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Paper>
      <Paper>
        <Box className={styles.MapBox}>
          <MapContainer
            className={styles.MapContainer}
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            dragging={false}
            attributionControl={false}
            zoomControl={false}
          >
            <TileLayer
              className={styles.TileLayer}
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Tooltip>Test</Tooltip>
            </Marker>
          </MapContainer>
        </Box>
      </Paper>
    </Stack>
  );
}

export default App;
