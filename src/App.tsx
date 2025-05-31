import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { Box } from '@mui/material';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // full viewport height
      }}
    >
      <Header />

      {/* This Box will expand to fill available space */}
      <Box sx={{ flex: 1 }}>
        {/* Your main page content goes here (can be empty for now) */}
      </Box>

      <Footer />
    </Box>
  );
}

export default App;

// import Header from './components/Header';
// import Footer from './components/Footer'
// import './App.css'

// function App() {
  

//   return (<>
//    <Header/>
//    <Footer/>
//   </>
//   )
// }

// export default App
