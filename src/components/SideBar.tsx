import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// ✅ Define the props type
interface SideBarProps {
  open: boolean;
  onClose: () => void;
}

export default function SideBar({ open, onClose }: SideBarProps) {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Home', path: '/', icon: <HomeIcon /> },
    { label: 'Service', path: '/service', icon: <MiscellaneousServicesIcon /> },
    { label: 'About Us', path: '/about', icon: <InfoIcon /> },
    { label: 'Mail', path: '/contact', icon: <MailIcon /> },
  ];

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onKeyDown={onClose}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
                onClose(); // Close drawer after navigating
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      {DrawerList}
    </Drawer>
  );
}

// import HomeIcon from '@mui/icons-material/Home';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// // ✅ Define the props type
// interface SideBarProps {
//   open: boolean;
//   onClose: () => void;
// }

// export default function SideBar({ open, onClose }: SideBarProps) {
//   const DrawerList = (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//       onClick={onClose}
//       onKeyDown={onClose}
//     >
//       <List>
//         {['Home', 'Service', 'About Us', 'Mail'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <HomeIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//        {/*
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List> */}
//     </Box>
//   );

//   return (
//     <Drawer open={open} onClose={onClose}>
//       {DrawerList}
//     </Drawer>
//   );
// }
