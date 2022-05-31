import './App.css';
import DailyContainer from './components/DailyContainer';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ height: '100vh', display:'flex',justifyContent:'center', alignItems:'center' }}>
          <DailyContainer/>
      </Box>
      </Container>        
    </div>
  );
}

export default App;
