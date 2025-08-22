// import { useState } from 'react';
// import { Menu, MenuItem, Button, Box, Typography, CircularProgress } from '@mui/material';
// import { AccountCircle, Login, Person } from '@mui/icons-material';
// import { useAuth } from '../hooks/useAuth';

// const ProfileMenu = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const { user, loading, signInWithGoogle, signOut } = useAuth();
  
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleProfileClick = async () => {
//     handleClose();
    
//     if (user) {
//       // If user is already logged in, redirect to profile page
//       window.location.href = '/profile';
//     } else {
//       // If user is not logged in, initiate Google login
//       const { error } = await signInWithGoogle();
//       if (error) {
//         console.error('Login error:', error);
//         // Handle error (show toast, etc.)
//       }
//     }
//   };

//   const handleMyAccountClick = async () => {
//     handleClose();
    
    