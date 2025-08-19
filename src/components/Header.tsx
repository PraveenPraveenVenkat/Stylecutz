import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom"; // If using React Router
// import SignInGoogle from './SignInGoogle'; // Import your component if needed

type Props = {
  onMenuClick: () => void;
};

export default function MenuAppBar({ onMenuClick }: Props) {
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const navigate = useNavigate(); // If using React Router

  // Check if user is logged in on component mount
  React.useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const userEmail = localStorage.getItem("userEmail");
    if (authToken && userEmail) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle Profile click
  const handleProfileClick = () => {
    handleClose();

    if (isLoggedIn) {
      // User is logged in - redirect to profile page
      navigate("/profile"); // Using React Router
      // OR window.location.href = '/profile'; // Direct redirect
    } else {
      // User not logged in - redirect to Google Sign-In component
      navigate("/signin"); // Navigate to your SignInGoogle component
      // OR window.location.href = '/signin'; // Direct redirect
    }
  };

  // Handle My Account click
  const handleMyAccountClick = () => {
    handleClose();

    if (isLoggedIn) {
      // User is logged in - redirect to account page
      navigate("/account");
      // OR window.location.href = '/account';
    } else {
      // User not logged in - redirect to Google Sign-In
      navigate("/signin");
      // OR window.location.href = '/signin';
    }
  };

  // Handle Logout (if user is logged in)
  const handleLogout = () => {
    handleClose();

    // Clear stored authentication data
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");

    // Update state
    setIsLoggedIn(false);

    // Redirect to home page
    navigate("/");
    // OR window.location.href = '/';
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          marginTop: { xs: 0, sm: "-0.5rem" },
          borderRadius: { xs: 0, sm: "1.5rem" },
          height: { xs: "4.2rem", sm: "5rem", md: "6rem" },
          width: "100%",
          backgroundColor: "#1B2936",
          boxShadow: 4,
        }}
        elevation={4}
      >
        <Toolbar
          sx={{
            minHeight: { xs: "4.2rem", sm: "5rem", md: "6rem" },
            borderRadius: { xs: 0, sm: "1.5rem" },
            alignItems: "center",
            px: { xs: 1, sm: 3, md: 6 },
            gap: { xs: 1, sm: 2 },
          }}
        >
          <IconButton
            size={
              typeof window !== "undefined" && window.innerWidth < 600
                ? "medium"
                : "large"
            }
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: { xs: 1, sm: 2 } }}
            onClick={onMenuClick}
          >
            <MenuIcon sx={{ fontSize: { xs: 26, sm: 32 } }} />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            noWrap
            sx={{
              flexGrow: 1,
              fontFamily: "Cinzel, serif",
              fontSize: { xs: "1.1rem", sm: "1.5rem", md: "2rem" },
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              textAlign: { xs: "center", sm: "left" },
              ml: { xs: 0, sm: 1 },
              pr: { xs: 0.5, sm: 0 },
            }}
          >
            Style cutz
          </Typography>
          {auth && (
            <div>
              <IconButton
                size={
                  typeof window !== "undefined" && window.innerWidth < 600
                    ? "medium"
                    : "large"
                }
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{ ml: { xs: 0, sm: 1 } }}
              >
                <AccountCircle sx={{ fontSize: { xs: 26, sm: 32 } }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfileClick}>
                  {isLoggedIn ? "Profile" : "Sign In to Profile"}
                </MenuItem>
                <MenuItem onClick={handleMyAccountClick}>
                  {isLoggedIn ? "My Account" : "Sign In to Account"}
                </MenuItem>
                {isLoggedIn && (
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                )}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
