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
        backgroundColor: "#168b7c",
        width: "100%",
        maxWidth: "100%",
        borderRadius: "2rem",
        p: { xs: 2, sm: 3, md: 4 },
        zIndex: 10,
        mt: 4,
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: { xs: 2, md: 3 },
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Box 1 */}
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "0.9rem",
            p: 2,
            flex: "1 1 300px",
            boxSizing: "border-box",
          }}
        >
          <Typography variant="h6" sx={{ fontFamily: "Cinzel, serif" }}>
            Style cutz
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 1, fontFamily: "Cinzel, serif" }}
          >
            lovely, change, perfect <br />
            will do it... <br />
            we are develop our personality!
          </Typography>
          <Box sx={{ mt: 1, display: "flex", alignItems: "center" }}>
            <InstagramIcon sx={{ mr: 1 }} />
            <FacebookTwoTone />
          </Box>
        </Box>

        {/* Box 2 */}
        <Box
          sx={{
            color: "white",
            flex: "1 1 250px",
            mt: { xs: 2, md: 0 },
            boxSizing: "border-box",
          }}
        >
          <Typography variant="h6" gutterBottom>
            CONTACT
          </Typography>
          <Typography
            variant="body2"
            sx={{
              paddingTop: "1rem",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <LocalPhoneTwoToneIcon sx={{ mr: 1 }} />
            8610655241
          </Typography>
          <Typography
            variant="body2"
            sx={{
              paddingTop: "1rem",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <MailOutlineTwoToneIcon sx={{ mr: 1 }} />
            stylecutz@gmail.com
          </Typography>
          <Typography
            variant="body2"
            sx={{
              paddingTop: "1rem",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <LocationOnSharpIcon sx={{ mr: 1 }} />
            Coimbatore
          </Typography>
        </Box>

        {/* Box 3 */}
        <Box
          sx={{
            color: "white",
            flex: "1 1 200px",
            mt: { xs: 2, md: 0 },
            boxSizing: "border-box",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontFamily: "Cinzel, serif" }}>
            LINKS
          </Typography>
          <Typography variant="body2" sx={{ paddingTop: "1rem", fontFamily: "Cinzel, serif" }}>
            About
          </Typography>
          <Typography variant="body2" sx={{ paddingTop: "1rem", fontFamily: "Cinzel, serif" }}>
            Service
          </Typography>
          <Typography variant="body2" sx={{ paddingTop: "1rem", fontFamily: "Cinzel, serif" }}>
            Home
          </Typography>
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
