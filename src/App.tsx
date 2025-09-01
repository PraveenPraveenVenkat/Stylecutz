import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import Service from "./components/Service";
import About from "./components/Aboutus";
import  Dashboard  from "./components/dashboard/Dashboard";
import AdminLogin from "./components/admin/AdminLogin";
import "./App.css";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <h1 className="logo">💇‍♀️ StyleCutz</h1>
    </div>
  );
};

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(splashTimeout);
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <>
      <Header onMenuClick={() => setDrawerOpen(true)} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Service" element={<Service/>} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
      </main>
      <SideBar open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <Footer />
    </>
  );
}

export default App;



// import { useState, useEffect } from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import SideBar from "./components/SideBar";
// import Service from "./components/Service";
// import "./App.css";
// import { Route } from "react-router-dom";

// const SplashScreen = () => {
//   return (
//     <div className="splash-screen">
//       <h1 className="logo">💇‍♀️ StyleCutz</h1>
//     </div>
//   );
// };

// function App() {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const splashTimeout = setTimeout(() => {
//       setLoading(false);
//     }, 3000); // 3 seconds

//     return () => clearTimeout(splashTimeout);
//   }, []);

//   return (
//     <>
//       {loading && <SplashScreen />}
//       {!loading && (
//         <>
//         <Route>
//     <Header onMenuClick={() => setDrawerOpen(true)} />
//           <main className="main-content">
//             <Home />  
//           </main>
//           <Service/>
//           <SideBar open={drawerOpen} onClose={() => setDrawerOpen(false)} />
//           <Footer />
//         </Route>
      
//         </>
//       )}
//     </>
//   );
// }

// export default App;

