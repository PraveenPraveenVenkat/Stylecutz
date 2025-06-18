// import  { useState } from 'react';
// import { Menu, MenuItem, Button, Box, Typography } from '@mui/material';
// import { AccountCircle, Login, Person } from '@mui/icons-material';

// // Mock Google Login function - replace with actual implementation
// const signInWithGoogle = () => {
//   // Option 1: Redirect to Google OAuth URL
//   const googleAuthUrl = `https://accounts.google.com/oauth/authorize?` +
//     `client_id=YOUR_GOOGLE_CLIENT_ID&` +
//     `redirect_uri=${encodeURIComponent(window.location.origin + '/auth/callback')}&` +
//     `response_type=code&` +
//     `scope=email profile&` +
//     `access_type=offline`;
  
//   window.location.href = googleAuthUrl;
  
//   // Option 2: Using Google Sign-In JavaScript SDK (uncomment if using)
//   // if (window.google) {
//   //   window.google.accounts.id.prompt();
//   // }
// };

// const ProfileMenu = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
//   const [user, setUser] = useState(null); // Store user data
  
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleProfileClick = () => {
//     handleClose();
    
//     if (isLoggedIn) {
//       // If user is already logged in, redirect to profile page
//       window.location.href = '/profile';
//       // or use React Router: navigate('/profile');
//     } else {
//       // If user is not logged in, initiate Google login
//       signInWithGoogle();
//     }
//   };

//   const handleMyAccountClick = () => {
//     handleClose();
    
//     if (isLoggedIn) {
//       // Redirect to account settings
//       window.location.href = '/account';
//       // or use React Router: navigate('/account');
//     } else {
//       // Redirect to login if not authenticated
//       signInWithGoogle();
//     }
//   };

//   const handleLogout = () => {
//     handleClose();
//     setIsLoggedIn(false);
//     setUser(null);
//     // Clear any stored tokens
//     localStorage.removeItem('authToken');
//     // Redirect to home page
//     window.location.href = '/';
//   };

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h5" gutterBottom>
//         Profile Menu Demo
//       </Typography>
      
//       {/* Demo Button to trigger menu */}
//       <Button
//         variant="contained"
//         startIcon={<AccountCircle />}
//         onClick={handleClick}
//         sx={{ mb: 2 }}
//       >
//         Account Menu
//       </Button>

//       {/* The actual Menu component */}
//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//       >
//         <MenuItem onClick={handleProfileClick}>
//           <Person sx={{ mr: 1 }} />
//           {isLoggedIn ? 'View Profile' : 'Login to Profile'}
//         </MenuItem>
        
//         <MenuItem onClick={handleMyAccountClick}>
//           <AccountCircle sx={{ mr: 1 }} />
//           {isLoggedIn ? 'My Account' : 'Login to Account'}
//         </MenuItem>

//         {isLoggedIn && (
//           <MenuItem onClick={handleLogout}>
//             <Login sx={{ mr: 1 }} />
//             Logout
//           </MenuItem>
//         )}
//       </Menu>

//       {/* Demo Login Status */}
//       <Box sx={{ mt: 2, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
//         <Typography variant="h6">Current Status:</Typography>
//         <Typography color={isLoggedIn ? 'success.main' : 'error.main'}>
//           {isLoggedIn ? `Logged in as ${user?.name || 'User'}` : 'Not logged in'}
//         </Typography>
        
//         {/* Demo login button for testing */}
//         {!isLoggedIn && (
//           <Button 
//             variant="outlined" 
//             onClick={() => {
//               setIsLoggedIn(true);
//               setUser({ name: 'John Doe', email: 'john@example.com' });
//             }}
//             sx={{ mt: 1 }}
//           >
//             Simulate Login (Demo)
//           </Button>
//         )}
//       </Box>

//       {/* Implementation Instructions */}
//       <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
//         <Typography variant="h6" gutterBottom>
//           Implementation Notes:
//         </Typography>
//         <Typography variant="body2" component="div">
//           <strong>To implement Google Login:</strong>
//           <br />
//           1. Install: <code>npm install @google-cloud/local-auth googleapis</code>
//           <br />
//           2. Set up Google OAuth credentials in Google Console
//           <br />
//           3. Replace YOUR_GOOGLE_CLIENT_ID with actual client ID
//           <br />
//           4. Implement proper error handling and token management
//           <br />
//           5. Use React Router for navigation instead of window.location.href
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default ProfileMenu;