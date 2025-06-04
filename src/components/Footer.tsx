import { FacebookTwoTone } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import MailOutlineTwoToneIcon from "@mui/icons-material/MailOutlineTwoTone";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";

import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
     <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-around",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: { xs: 2, md: 4 },
        width: "100%",
        backgroundColor: "#1B2936",
        px: { xs: 12, md: 4 }, // reduced horizontal padding on mobile
        py: { xs: 13, md: 6 }, // reduced vertical padding on mobile
      }}
    >
      {/* Box 1 - Style cutz in white box */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          flex: "1 1 250px",
        }}
      >
        {/* White box with heading only */}
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "0.9rem",
            p: 2,
            maxWidth: "12rem",
          }}
        >
          <Typography variant="h6" sx={{ fontFamily: "Cinzel, serif" }}>
            Style cutz
          </Typography>
        </Box>

        {/* Text & Icons directly on blue background */}
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Cinzel, serif",
            color: "white",
            lineHeight: 1.6,
            pt: 1,
          }}
        >
          lovely, change, perfect <br />
          will do it... <br />
          we are develop our personality!
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, pt: 1 }}>
          <InstagramIcon sx={{ color: "white" }} />
          <FacebookTwoTone sx={{ color: "white" }} />
        </Box>
      </Box>

      {/* Box 2 - CONTACT */}
      <Box
        sx={{
          color: "white",
          flex: "1 1 250px",
          mt: { xs: 2, md: 0 },
          boxSizing: "border-box",
          pt: { xs: 1, md: "3rem" },
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ fontFamily: "Cinzel, serif" }}>
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

      {/* Box 3 - LINKS */}
      <Box
        sx={{
          color: "white",
          flex: "1 1 200px",
          mt: { xs: 2, md: 0 },
          boxSizing: "border-box",
          pt: { xs: 1, md: "3rem" },
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
