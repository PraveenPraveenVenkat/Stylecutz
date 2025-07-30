// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import './Login.css';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       // Replace with your actual authentication logic
//       const response = await authenticateUser(email, password);

//       if (response.success) {
//         // Store token/user data
//         localStorage.setItem('token', response.token);
//         localStorage.setItem('user', JSON.stringify(response.user));

//         // Redirect to home or dashboard
//         navigate('/');
//       } else {
//         setError('Invalid email or password');
//       }
//     } catch (error) {
//       setError('Login failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = () => {
//     // Handle Google authentication
//     console.log('Google login clicked');
//     // You can integrate with Google OAuth here
//   };

//   const handleForgotPassword = () => {
//     navigate('/forgot-password');
//   };

//   const handleSignUp = () => {
//     navigate('/signup');
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h1 className="login-title">Welcome to Outlier</h1>

//         <form onSubmit={handleLogin} className="login-form">
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-input"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-input"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="login-button"
//             disabled={loading}
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>

//           {error && <p className="error-message">{error}</p>}
//         </form>

//         <button
//           onClick={handleForgotPassword}
//           className="forgot-password-link"
//         >
//           Forgot password
//         </button>

//         <div className="divider">
//           <span>or</span>
//         </div>

//         <button
//           onClick={handleGoogleLogin}
//           className="google-login-button"
//         >
//           <img
//             src="https://developers.google.com/identity/images/g-logo.png"
//             alt="Google"
//             className="google-icon"
//           />
//           Continue with Google
//         </button>

//         <p className="signup-text">
//           Don't have an account?{' '}
//           <button
//             onClick={handleSignUp}
//             className="signup-link"
//           >
//             Check out our Opportunities
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// // Mock authentication function - replace with your actual API
// async function authenticateUser(email: string, password: string) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       // Mock validation
//       if (email === 'test@example.com' && password === 'password') {
//         resolve({
//           success: true,
//           token: 'fake-jwt-token',
//           user: { email, name: 'Test User' }
//         });
//       } else {
//         resolve({ success: false });
//       }
//     }, 1000);
//   });
// }

// export default Login;

// import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Service from './components/Service';
// import About from './components/Aboutus';
// // import Contact from './components/Contact';
// import SideBar from './components/SideBar';
// // import SignInGoogle from './components/SignIn Google'
// import './App.css';

// function App() {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   return (
//     <>
//       <Header onMenuClick={() => setDrawerOpen(true)} />
//       <SideBar open={drawerOpen} onClose={() => setDrawerOpen(false)} />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/Signin" element={<SignInGoogle />} /> */}
//         <Route path="/service" element={<Service />} />
//         <Route path="/about" element={<About />} />
//         {/* <Route path="/contact" element={<Contact />} /> */}
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
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

  return (
    <>
      {loading && <SplashScreen />}
      {!loading && (
        <>
          <Header onMenuClick={() => setDrawerOpen(true)} />
          <main className="main-content">
            <Home />
          </main>
          <SideBar open={drawerOpen} onClose={() => setDrawerOpen(false)} />
          <Footer />
        </>
      )}
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
