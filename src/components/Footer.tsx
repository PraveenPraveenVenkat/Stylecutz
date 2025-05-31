import { FacebookTwoTone } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import MailOutlineTwoToneIcon from "@mui/icons-material/MailOutlineTwoTone";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";

import { Box, Divider, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
      
        backgroundColor: "#0d2f87",
        height: "15rem",
        width: "100%",
        borderRadius: "2rem",
        p: 4,
         zIndex: 10,
      }}
    >
      {/* Flex container to arrange boxes horizontally */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "flex-start",
          gap: 3,
          pt:'2rem',
        }}
      >
        {/* Box 1 */}
<Box
  sx={{
    backgroundColor: "white",
    width: "10rem",
    borderRadius: "0.9rem",
    p: 2,
  }}
>
  <Typography variant="h6">Style cutz</Typography>

    

  <Typography variant="body2" sx={{ mt: 1 }}>
    lovely, change, perfect <br />
    will do it... <br />
    we are develop our personality!
  </Typography>

  <Box sx={{ mt: 1, display: "flex", alignItems: "center" }}>
    <InstagramIcon sx={{ mr: 1 }} />
    <FacebookTwoTone />
  </Box>
</Box>



        {/* <Box
          sx={{
            backgroundColor: "white",
            width: "7rem",
            height: "3rem",
            borderRadius: "0.9rem",
            p: 2,
          }}
        >
          <Typography variant="h6">Style cutz</Typography>
           </Box>
          <Typography variant="body2">
            lovely, change, perfect <br />
            will do it... <br />
            we are develop our personality!
          </Typography>
          <Box sx={{ mt: 1 }}>
            <InstagramIcon sx={{ mr: 1 }} />
            <FacebookTwoTone />
         
        </Box> */}

        {/* Box 2 */}
        <Box sx={{ color: "white" }}>
          <Typography variant="h6" gutterBottom>
            CONTACT
          </Typography>
          <Typography variant="body2" sx={{ paddingTop: '2rem', fontSize: '1rem' }}>
  <LocalPhoneTwoToneIcon sx={{ fontSize: '1.5rem', verticalAlign: 'middle', mr: 1 }} />
  9843276
</Typography>

          <Typography variant="body2"  sx={{ paddingTop: '1.2rem', fontSize: '1rem' }}>
           <MailOutlineTwoToneIcon sx={{ fontSize: '1.5rem', verticalAlign: 'middle', mr: 1 }} />  stylecutz@gmail.com
          </Typography>
          <Typography variant="body2" sx={{ paddingTop: '1.2rem', fontSize: '1rem' }}>
          <LocationOnSharpIcon sx={{ fontSize: '1.5rem', verticalAlign: 'middle', mr: 1 }} />   Coimbatore 
          </Typography>

          
        </Box>

        {/* Box 3 */}
        <Box sx={{ color: "white" }}>
          <Typography variant="h6" gutterBottom>
            LINKS
          </Typography>
          <Typography variant="body2"  sx={{paddingTop:'2rem'}}>About</Typography>
          <Typography variant="body2"  sx={{paddingTop:'1rem'}}>Service</Typography>
          <Typography variant="body2"  sx={{paddingTop:'1rem'}}>Home</Typography>
        </Box>
      </Box>
        <Divider sx={{ mt: 4, borderColor: "white" }} />

    </Box>
    
  );
};

export default Footer;




// import { FacebookTwoTone } from "@mui/icons-material";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
// import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
// import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';

// import { Box, Divider, Typography } from "@mui/material";

// const Footer = () => {
//   return (
//     <>
//       <Box
//         sx={{
//           backgroundColor: "#3565f6",
//           height: "20rem",
//           width: "Fullscreen",
//           borderRadius: "2rem",

         
//         }}
//       >
//         <Box sx={{ flex:'grow'}}>

       
//         // ?Box 1
        // <Box
        //   sx={{
        //     backgroundColor: "white",
        //     width: "6rem",
        //     pl: "3rem",
        //     ml: "2rem",
        //     height: "3.6rem",
        //     borderRadius: "0.9rem",
        //   }}
        // >
        //   <p>
        //     Style
        //     <br />
        //     cutz
        //   </p>

        //   <p>
        //     lovely, change, perfect
        //     <br />
        //     will do it...
        //     <br />
        //     we are develop our personality!
        //     <InstagramIcon />
        //     <FacebookTwoTone />
        //     <Divider sx={{ width: "40rem" }} />
        //   </p>
        // </Box>

//         // ?Box 2
//         <Box> 
//             <Typography variant="h4">
//                 CONTACT
//             </Typography>
//             <Typography variant="button" >
//                    9843276
//                  <LocalPhoneTwoToneIcon/>
//             </Typography>
//             <Typography variant="button" >
//                 stylecutz@gmail.com
//                 <  MailOutlineTwoToneIcon/>
//             </Typography>

//               <Typography variant="button" >
//                 Coimbatore
//                 <   LocationOnSharpIcon/>
//             </Typography>
//         </Box>

//    // ?Box 3
// <Box>
//     <Typography variant="h5">
//         LINKS
//     </Typography>

//     <Typography variant="button">
//         About
//     </Typography>

//     <Typography variant="button">
//         Service
//     </Typography>

//     <Typography variant="button">
//         Home
//     </Typography>
// </Box>


//  </Box>
//       </Box>
//     </>
//   );
// };
// export default Footer;
