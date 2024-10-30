import { useState } from 'react';
import CarList from './components/CarList';
import './App.css';

import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="xl">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Car Shop
          </Typography>  
        </Toolbar>
      </AppBar>
      <CarList />
    </Container>
  )
}

export default App
