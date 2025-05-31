import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SideBar from './components/SideBar';
import './App.css';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Header onMenuClick={() => setDrawerOpen(true)} />
      <Home />
      <SideBar open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <Footer />
    </>
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
