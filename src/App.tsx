import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/Aboutus';
// import Contact from './components/Contact';
import SideBar from './components/SideBar';
// import SignInGoogle from './components/SignIn Google'
import './App.css';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Header onMenuClick={() => setDrawerOpen(true)} />
      <SideBar open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Signin" element={<SignInGoogle />} /> */}
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;

// import { useState } from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import SideBar from './components/SideBar';
// import './App.css';

// function App() {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   return (
//     <>
//       <Header onMenuClick={() => setDrawerOpen(true)} />
//       <Home />
//       <SideBar open={drawerOpen} onClose={() => setDrawerOpen(false)} />
//       <Footer />
//     </>
//   );
// }

// export default App;


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
